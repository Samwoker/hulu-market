import jwt, { SignOptions } from "jsonwebtoken";
import {serialize} from "cookie";

const JWT_SECRET = process.env.JWT_SECRET

if(!JWT_SECRET) throw new Error("please set jwt");

export const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN

export function signJwt(payload: object) {
  const options: SignOptions = {};
  if (JWT_EXPIRES_IN) options.expiresIn = JWT_EXPIRES_IN as unknown as SignOptions["expiresIn"];
  return jwt.sign(payload, JWT_SECRET as string, options);
}

export function verifyJwt<T = unknown> (token:string){
    return jwt.verify(token, JWT_SECRET as string) as T
}

export function createAuthCookie(token:string){
     const maxAge = (() => {
    // parse simple values like "7d", "1h" or fallback to 7 days
    const v = JWT_EXPIRES_IN;
    if (typeof v !== "string") return 60 * 60 * 24 * 7;
    if (v.endsWith("d")) return parseInt(v) * 24 * 60 * 60;
    if (v.endsWith("h")) return parseInt(v) * 60 * 60;
    if (v.endsWith("m")) return parseInt(v) * 60;
    return 60 * 60 * 24 * 7;
  })();
  return serialize("token",token,{
    httpOnly:true,
    secure:process.env.NODE_ENV === "production",
    sameSite:"lax",
    path:"/",
    maxAge
  })
}