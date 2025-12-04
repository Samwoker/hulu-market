import { NextResponse } from "next/server";
import {connectToDatabase} from "@/lib/db";
import User from "@/models/User";
import bcrypt from "bcryptjs";
import { signJwt, createAuthCookie } from "@/lib/auth";
import { use } from "react";

export async function POST(req:Request) {
    try {
        await connectToDatabase();
        const body = await req.json();
        const {email,password} = body as {
            email:string;
            password:string;
        }
        const user = await User.findOne({email:email.toLocaleLowerCase().trim()})
        if(!user){
            return NextResponse.json({message:"Invalid credentials"})
        }
        const isMatch = await bcrypt.compare(password,user.password);
        if(!isMatch){
            return NextResponse.json({message:"Invalid credentials"})
        }
        const payload = {
            sub:user._id.toString(),role:user.role
        }
        const token = signJwt(payload);
        const cookie = createAuthCookie(token);
        const res = NextResponse.json(
            {
                user:{id:user._id,name:user.name,email:user.email,role:user.role},
                message:"Logged in"
            },{
                status:200
            }
        )
        res.headers.set("Set-cookie",cookie)
        return res;
    } catch (error) {
        console.log("Login error",error)
        return NextResponse.json({message:"Internal Server Error"})
    }
}