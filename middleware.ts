
import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
import jwt from "jsonwebtoken";

export function middleware(req:NextRequest){
    const token = req.cookies.get("token")?.value;
    const protectedRoutes = ['/cart','/wishlist','/compare'];
    if(protectedRoutes.includes(req.nextUrl.pathname)){
        if(!token) return NextResponse.redirect(new URL("/sign-in"));
   
    try{
        jwt.verify(token,process.env.JWT_SECRET!);
    }catch{
        return NextResponse.redirect(new URL("/sign-in",req.url));
    }
}
return NextResponse.next();
}
export const config = {
    matcher:["/cart","/wishlist","/compare"]
}