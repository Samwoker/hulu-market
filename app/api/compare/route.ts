import { connectToDatabase } from "@/lib/db";
import CompareItem from "@/models/CompareItems";
import { cookies } from "next/headers";
import jwt from "jsonwebtoken";

async function getUserIdFromToken() {
  const token = await (await cookies()).get("token")?.value;
  if (!token) return null;

  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET!);
    return payload.sub
  } catch {
    return null;
  }
}

export async function GET(){
    await connectToDatabase();
    const userId = await getUserIdFromToken();
    if(!userId) return new Response("Unauthorized",{status:401});
    const compare = await CompareItem.find({userId},{status:200});
    return new Response(JSON.stringify(compare),{status:200})
}

export async function POST(req:Request){
    await connectToDatabase();
    const userId = await getUserIdFromToken();
    if(!userId) return new Response("Unauthorized",{status:401});
    const body = await req.json();
    const item = await CompareItem.create({...body,userId});
    return new Response(JSON.stringify(item),{status:201})
}