import { NextResponse } from "next/server";
import {connectToDatabase} from "@/lib/db";
import User from "@/models/User";
import { verifyJwt } from "@/lib/auth";
import { cookies } from "next/headers";

export async function GET() {
    try {
        await connectToDatabase()
    const cookieStore = cookies();
    const token = (await cookieStore).get("token")?.value;
    if(!token) return NextResponse.json({user:null},{status:404})
    let payload;
try {
    payload = verifyJwt<{sub:string; role?:string}>(token);
} catch (e) {
    return NextResponse.json({user:null},{status:404})
}
const user = await User.findById(payload.sub).select("-password")
if(!user) return NextResponse.json({user:null},{status:404})
    return NextResponse.json({user},{status:200})
    } catch (error) {
        console.error(error)
        return NextResponse.json({user:null},{status:404})
    }
}