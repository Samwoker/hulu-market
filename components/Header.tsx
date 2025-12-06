import { Input } from "./ui/input"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import { categories } from "@/lib/constants"
import HeaderButtons from "./HeaderButtons"
import { Heart, Repeat, ShoppingCart, User2 } from "lucide-react"
import Link from "next/link"
const Header = () => {
  return (
    <div className="w-full h-24 px-12 pt-4">
        <div className="flex justify-around">
            <div>
                <h2 className="text-[#006666] text-3xl font-bold mt-2 ">Hulu-Market</h2>
            </div>
            <div className="mt-2 flex justify-center min-w-1/4">
             
           <div className="px-4 hover:bg-gray-300 text-gray-700 font-medium border-[#006666] border border-r-0 rounded-none">
                <Popover>
          <PopoverTrigger className="mt-3 w-18 ">Categories</PopoverTrigger>
          <PopoverContent>
<Command>
  <CommandInput placeholder="Type a categories or search..." />
  <CommandList>
    <CommandEmpty>No results found.</CommandEmpty>
    <CommandGroup heading="categories">
      {categories.map((c)=>(
        <CommandItem key={c}>{c}</CommandItem>
      ))}
    </CommandGroup>
  </CommandList>
</Command>
          </PopoverContent>
         </Popover>
           </div>
               <Input placeholder="Search..."  className="border-[#006666] focus:ring-0 focus:ring-offset-0 rounded-none h-12" />
            </div>
          <div className="flex justify-center items-center ">
              <div className="border border-gray-300 w-28 h-10 mt-2 rounded-sm mx-3">
                <HeaderButtons/>
            </div>
          <Link href={"/cart"} className="flex justify-center items-center border border-gray-300 w-28 h-10 mt-2 rounded-sm mx-3 relative">
  <ShoppingCart />
  <span className="text-gray-500 ml-2">Cart</span>
  <span className="absolute -top-2 -right-1 bg-[#006666] text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
    3
  </span>
</Link>

<Link href={'/wishlist'} className="flex justify-center items-center border border-gray-300 w-28 h-10 mt-2 rounded-sm mx-3 relative">
  <Heart />
  <span className="text-gray-500 ml-2">WishList</span>
  <span className="absolute -top-2 -right-1 bg-[#006666] text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
    5
  </span>
</Link>

<Link href={"/compare"} className="flex justify-center items-center border border-gray-300 w-28 h-10 mt-2 rounded-sm mx-3 relative">
  <Repeat />
  <span className="text-gray-500 ml-2">Compare</span>
  <span className="absolute -top-2 -right-1 bg-[#006666] text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
    2
  </span>
</Link>
            <div className="flex justify-center items-center border border-gray-300 w-28 h-10 mt-2 rounded-sm  mx-3">
                <User2/><span className="text-gray-500">Account</span>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Header