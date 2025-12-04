import { NextResponse } from "next/server";
import {connectToDatabase} from "@/lib/db"
import User from "@/models/User"
import bcrypt from "bcryptjs"

export async function POST(req:Request){
    try {
        await connectToDatabase();
        console.log("Database connected")
        const body = await req.json();
        const {name,email,password,confirmPassword} = body as {
            name:string;
            email:string;
            password:string;
            confirmPassword:string;
        }
        console.log("user info retrieved",name,email,password,confirmPassword)
        if(!name || !email || ! password || !confirmPassword){
            return NextResponse.json({message:"Missing fields"});
        }
        if(password !== confirmPassword){
            return NextResponse.json({message:"Password doesn't match"})
        }
        const existing  = await User.findOne({email})
        if(existing){
            return NextResponse.json({message:"Email already taken"})
        }
        const salt= await bcrypt.genSalt(10);
        const hashed = await bcrypt.hash(password,salt)
        const user = new User({
            name:name.trim(),
            email:email.toLocaleLowerCase(),
            password:hashed
        });
        await user.save()
        const safeUser = {
            id:user._id,
            name:user.name,
            email:user.email,
            role:user.role
        }
        return NextResponse.json({user:safeUser},{status:201})
    } catch (error) {
        console.log("Signup error:",error)
        return NextResponse.json({message:"Internal Server Error"},{status:500})
    }
}