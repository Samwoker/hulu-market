import { navItems } from "@/lib/constants";
import Link from "next/link";
import { Button } from "./ui/button";
import {  ArrowRight, Headphones, LayoutGrid } from "lucide-react";

const NavBar = () => {
  return (
    <div className=" ">
      <div className="flex justify-around">
         <Button variant="outline" size="lg" className="bg-[#006666]  text-white mt-5" >
           <LayoutGrid/> Browse All Categories<ArrowRight/>
        </Button>
        <ul className="flex justify-center mt-6">
           
          {navItems.map((item) => (
            <li key={item.href} className="mx-6 text-xl font-semibold hover:text-[#006666] " >
              <Link href={item.href}>{item.label}</Link>
            </li>
          ))}
        </ul>
        <div className="mt-5">
            <div className="flex justify-center">
                <Headphones size={34}/>
                <span className="text-[#006666] font-bold text-2xl ml-2 mt-1 ">0912345678</span>
            </div>
            <span className="ml-10 text-gray-500 font-extralight">24/7 support center</span>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
