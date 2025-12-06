
import { connectToDatabase } from "@/lib/db";
import Wishlist from "@/models/Wishlist";
import { cookies } from "next/headers";
import jwt from 'jsonwebtoken'

async function getUserIdFromToken() {
    const token = (await cookies()).get('token')?.value;
    if(!token) return null;
    try {
        const payload = jwt.verify(token,process.env.JWT_SECRET!);
        return payload.sub;
    } catch  {
        return null
    }
}

export async function GET(){
    await connectToDatabase();
    const userId = await getUserIdFromToken();
    if(!userId) return new Response("Unauthorized",{status:401});
    const wishlist = await Wishlist.find({userId}).populate("productId");
    return new Response(JSON.stringify(wishlist),{status:200});
}

export async function POST(req:Request){
    await connectToDatabase();
    const userId = await getUserIdFromToken();
    if(!userId) return new Response("Unauthorized",{status:401});
    const body = await req.json();
    const item = await Wishlist.create({...body,userId});
    return new Response(JSON.stringify(item),{status:201});
}