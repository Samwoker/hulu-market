'use client'
import { Button } from "@/components/ui/button"
import {
  Card,
  CardAction,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Link from "next/link"
import { useState } from "react"

export function SigninForm() {

  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  const [error,setError] = useState("")

  const handleLogin = async (e:React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault();
    setError("")
    try {

      const res = await fetch("/api/auth/sign-in",{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        credentials:"include",
        body:JSON.stringify({email,password})
      })

      const data = await res.json();

      if(!res.ok){
        setError(data.message || "Login Failed")
        return
      }

      console.log("User :",data.User)

      window.location.href = "/"
      
    } catch (error) {
      console.log(error)
      setError("Something went wrong")
    }
  }
  
  return (
    <div className="flex justify-center items-center min-h-screen p-4">
    <Card className="w-full max-w-[550px] shadow-xl rounded-2xl ">
      <CardHeader>
        <CardTitle className="flex justify-center">Login to your account</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleLogin}>
          <div className="flex flex-col gap-6 mb-6">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                required
                className="py-6 border-[#006666]"
                onChange={(e)=>setEmail(e.target.value)}
              />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">Password</Label>
                
              </div>
              <Input id="password" type="password" onChange={(e)=>setPassword(e.target.value)} placeholder="Enter your password" required  className="py-6 border-[#006666]" />
               <a
                  href="#"
                  className="mr-auto inline-block text-sm underline-offset-4 hover:underline"
                >
                  Forgot your password?
                </a>
            </div>
          </div>
          <div>
            {error && <p className="text-red-600">{error}</p>}
          </div>
          <Button type="submit"  className="w-full bg-[#006666] hover:bg-[#FE6A49] rounded-full hover:cursor-pointer py-6 ">
          Login
        </Button>
        </form>
      </CardContent>
      <CardFooter className="flex-col gap-2">
        <CardAction> 
         <span>Don’t have an account?</span> <Link href={"/sign-up"} className="hover:cursor-pointer font-sm underline ml-2 ">Sign Up</Link>
        </CardAction>
        <Button variant="outline" className="w-full py-6 border-black rounded-full hover:cursor-pointer">
          Login with Google
        </Button>
      </CardFooter>
    </Card>
    </div>
  )
}
