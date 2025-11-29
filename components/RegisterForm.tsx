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

export function RegisterForm() {
  return (
    <div className="flex justify-center items-center min-h-screen p-4">
    <Card className="w-full max-w-[550px] shadow-xl rounded-2xl ">
      <CardHeader>
        <CardTitle className="flex justify-center">Login to your account</CardTitle>
      </CardHeader>
      <CardContent>
        <form>
          <div className="flex flex-col gap-6">
             <div className="grid gap-2">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                type="text"
                placeholder="Enter Your Name"
                required
                className="py-6 border-[#006666]"
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                required
                className="py-6 border-[#006666]"
              />
            </div> 
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">Password</Label>
                
              </div>
              <Input id="password" type="password" placeholder="Enter your password" required  className="py-6 border-[#006666]" />
            </div>
             <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">Confirm Password</Label>
                
              </div>
              <Input id="confirmPassword" type="password" placeholder="Confirm your password" required  className="py-6 border-[#006666]" />
               <a
                  href="#"
                  className="mr-auto inline-block text-sm underline-offset-4 hover:underline"
                >
                  Forgot your password?
                </a>
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex-col gap-2">
        <Button type="submit" className="w-full bg-[#006666] hover:bg-[#FE6A49] rounded-full hover:cursor-pointer py-6">
          Register
        </Button>
        <CardAction> 
         <span>Already have an account? </span> <Button variant="link" className="hover:cursor-pointer">Login</Button>
        </CardAction>
        <Button variant="outline" className="w-full py-6 border-black rounded-full hover:cursor-pointer">
          Login with Google
        </Button>
      </CardFooter>
    </Card>
    </div>
  )
}
