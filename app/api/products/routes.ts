
import {connectToDatabase} from "@/lib/db";
import Product from "@/models/Products"

export async function GET() {
    await connectToDatabase();

    const products = await Product.find().populate('categoryId').populate('brandId');
    return new Response(JSON.stringify(products),{status:200})
}

export async function POST(req:Request){
    await connectToDatabase();
    const body = await req.json();
    const newProduct = await Product.create(body);
    return new Response(JSON.stringify(newProduct),{status:201})
}