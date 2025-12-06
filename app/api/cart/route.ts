
import { connectToDatabase } from "@/lib/db";
import Cart from "@/models/Cart";
import {cookies} from 'next/headers'
import jwt from 'jsonwebtoken';

async function getUserIdFromToken(){
    const token = (await cookies()).get('token')?.value;
    if(!token) return null;
    try {
        const payload = jwt.verify(token,process.env.JWT_SECRET!);
        return payload.sub;
    } catch (e) {
        return null;
    }
}

export async function GET(){
    await connectToDatabase();
    const userId = await getUserIdFromToken();
    if(!userId) return new Response("Unauthorized",{status:401})
    const cartItems = await Cart.find({userId}).populate("productId");
    return new Response(JSON.stringify(cartItems),{status:200});
}

export async function POST(req:Request){
    await connectToDatabase();
    const userId = await getUserIdFromToken();
    if(!userId) return new Response("Unauthorized",{status:401});
    const body = await req.json();
    const newItem = await Cart.create({...body,userId});
    return new Response(JSON.stringify(newItem),{status:201});
}