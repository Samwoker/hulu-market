import { useId } from "react"
import { Heart, SearchIcon, ShoppingCart } from "lucide-react"

import Logo from "@/components/navbar-components/logo"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import Link from "next/link"

const navigationLinks = [
  { href: "#", label: "Products" },
  { href: "#", label: "Categories" },
  { href: "#", label: "Deals" },
]

export default function Component() {
  const id = useId()

  return (
    <header className="border-b px-4  py-3 md:px-6">
      <div className="flex h-16 items-center justify-center gap-4">
        {/* Left side */}
        <div className="flex justify-center items-center gap-8">
          {/* Mobile menu trigger */}
          <Popover>
            <PopoverTrigger asChild>
              <Button
                className="left-0 group size-8 md:hidden"
                variant="ghost"
                size="icon"
              >
                <svg
                  className="pointer-events-none"
                  width={16}
                  height={16}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4 12L20 12"
                    className="origin-center -translate-y-[7px] transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] group-aria-expanded:translate-x-0 group-aria-expanded:translate-y-0 group-aria-expanded:rotate-[315deg]"
                  />
                  <path
                    d="M4 12H20"
                    className="origin-center transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.8)] group-aria-expanded:rotate-45"
                  />
                  <path
                    d="M4 12H20"
                    className="origin-center translate-y-[7px] transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] group-aria-expanded:translate-y-0 group-aria-expanded:rotate-[135deg]"
                  />
                </svg>
              </Button>
            </PopoverTrigger>
            <PopoverContent align="start" className="w-36 p-1 md:hidden">
              <NavigationMenu className="max-w-none *:w-full">
                <NavigationMenuList className="flex-col items-start gap-2 md:gap-2">
                  {navigationLinks.map((link, index) => (
                    <NavigationMenuItem key={index} className="w-full">
                      <NavigationMenuLink href={link.href} className="py-1.5">
                        {link.label}
                      </NavigationMenuLink>
                    </NavigationMenuItem>
                  ))}
                  <NavigationMenuItem
                    className="w-full"
                    role="presentation"
                    aria-hidden="true"
                  >
                    <div
                      role="separator"
                      aria-orientation="horizontal"
                      className="-mx-1 my-1 h-px bg-border"
                    ></div>
                  </NavigationMenuItem>
                  <NavigationMenuItem className="w-full">
                
                    <Link href="#">
                    <span className="relative inline-block">
  
         <ShoppingCart className="text-2xl text-gray-700" />
         <span className="absolute -top-1 -right-1 bg-blue-600 text-white text-[10px] font-semibold rounded-full px-1.5 py-0.5 leading-none shadow">
                 2
         </span>
          </span>
                   </Link>
                  </NavigationMenuItem>   
                  <NavigationMenuItem>
                    <Link href="#">
                      <span className="relative inline-block">
                      <Heart className="text-2xl text-gray-700" />
                      <span className="absolute -top-1 -right-1 bg-blue-600 text-white text-[10px] font-semibold rounded-full px-1.5 py-0.5 leading-none shadow">
                        0
                      </span>
                      </span>
                    </Link>
                  </NavigationMenuItem>

                  <NavigationMenuItem className="w-full">
                    <NavigationMenuLink href="#" className="py-1.5 border hover:text-white hover:bg-black">
                      Sign In
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </PopoverContent>
          </Popover>
          {/* Main nav */}
          <div className="flex flex-1 items-center gap-6 max-md:justify-between">
            <a href="#" className="text-primary hover:text-primary/90">
              <Logo />
            </a>
            {/* Navigation menu */}
            <NavigationMenu className="max-md:hidden">
              <NavigationMenuList className="gap-2">
                {navigationLinks.map((link, index) => (
                  <NavigationMenuItem key={index}>
                    <NavigationMenuLink
                      href={link.href}
                      className="py-1.5 mx-2 font-medium text-muted-foreground hover:text-primary"
                    >
                      {link.label}
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
            {/* Search form */}
            <div className="relative">
              <Input
                id={id}
                className="peer h-8 ps-8 pe-2 w-60 md:w-80 lg:w-96"
                placeholder="Search..."
                type="search"
              />
              <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center ps-2 text-muted-foreground/80 peer-disabled:opacity-50">
                <SearchIcon size={16} />
              </div>
            </div>
          </div>
        </div>
        {/* Right side */}
        <div className="flex items-center gap-8 mr-3 max-md:hidden mx-8">
           <Link href="#">
                      <span className="relative inline-block">
                      <Heart className="text-2xl text-gray-700" />
                      <span className="absolute -top-1 -right-1 bg-blue-600 text-white text-[10px] font-semibold rounded-full px-1.5 py-0.5 leading-none shadow">
                        0
                      </span>
                      </span>
                    </Link>
            <Link href="#">
              <span className="relative inline-block">
  
        <ShoppingCart className="text-2xl text-gray-700" />
        <span className="absolute -top-1 -right-1 bg-blue-600 text-white text-[10px] font-semibold rounded-full px-1.5 py-0.5 leading-none shadow">
                 2
         </span>
          </span>
            </Link>
             <Button asChild variant="ghost" size="lg" className="text-sm border px-4 hover:text-white hover:bg-black ">
            <a href="#">Sign In</a>
          </Button>
        </div>
      </div>
    </header>
  )
}
