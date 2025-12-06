
import { connectToDatabase } from "@/lib/db"
import Category from '@/models/Category';

export async function GET(){
    await connectToDatabase();
    const categories = await Category.find();
    return new Response(JSON.stringify(categories),{status:200});
}

export async function POST(req:Request){
    await connectToDatabase();
    const body = await req.json();
    const category = await Category.create(body);
    return new Response(JSON.stringify(category),{status:201});
}