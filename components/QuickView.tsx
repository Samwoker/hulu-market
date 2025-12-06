'use client'

import {
  Sheet,
  SheetContent,
} from "@/components/ui/sheet"
import { Heart, RefreshCcw, Star, TimerIcon } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { Button } from "./ui/button";

interface Color{
  name:string;
  hex:string;
}


type Product = {
    image: string;
    hoverImage: string;
    title: string;
    price: string;
    discountPrice: string;
    discountPercent: string;
    reviews?: number; 
    description?: string;
    colors?: Color[];
    sizes?: string[];
    estimatedDelivery?: string;
    sku?: string;
    categories?: string[];
}

type QuickViewProps = {
    open: boolean;
    setOpen: (open: boolean) => void;
    product: Product | null; 
}

const QuickView = ({ open, setOpen, product }: QuickViewProps) => {

  const [selectColor,setSelectColor] = useState<Color>(product?.colors?.[0] || {name:"",hex:""})
  const [selectSize,setSelectSize] = useState<string>(product?.sizes?.[0] || "")
  const [quantity,setQuantity] = useState(1)
    if (!product) {
        return null;
    }
const handleQuantityIncrement = ()=>{
  setQuantity(quantity+1);
}
const handleQuantityDecrement = ()=>{
  if(quantity>0){
    setQuantity(quantity-1)
  }
}
    const setColor = (color:Color)=>{
      setSelectColor(color)
    }
    const setSize = (size:string)=>{
      setSelectSize(size)
    }

  return (
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetContent side="right" className="sm:max-w-[800px] rounded-tl-2xl rounded-bl-2xl md:max-w-3xl overflow-y-auto p-0">
          <div className="grid md:grid-cols-3">

            <div className="flex flex-col mt-4 bg-gray-50 border-r col-span-1">
                <div className="relative w-full aspect-square mb-4">
                  <Image
                  src={product.image}
                  alt="Product image"
                  layout="fill"
                  objectFit="contain"
                  className="rounded-2xl w-full"
                  />
                </div>
            </div>

            <div className="col-span-2" >
                  
                <div className="mt-12 mb-6">
                  <div className="flex justify-between">
                    <h1 className="mx-10 mb-2 text-2xl font-bold">
                    Quick view
                  </h1>
                  <Button className="bg-white border-gray-200 border mr-10 hover:bg-gray-300 hover:cursor-pointer">
                    <Heart className="text-black size-6 " />
                  </Button>
                  </div>
                  <p className="text-gray-500  font-semibold mx-10 mb-4">FASHION</p>
                  <h1 className="text-3xl mx-10 font-semibold" >{product.title}</h1>
                  <div className="mx-10 flex items-center gap-1 text-xl font-light my-4">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star className="text-yellow-300" key={i} />
                    ))}
                    ({product.reviews}) reviews
                  </div>
                  <div className="flex justify-start mx-10 mt-2 gap-4">
                    <span className="font-bold">{product.discountPrice}</span>
                  <span className="line-through">{product.price}</span>
                  <span className="w-12 h-6 bg-[#D2EF9A] ml-2 rounded-3xl pl-1.5 ">{product.discountPercent}</span>
                  </div>
                </div>
                <div className="mt-12 text-gray-500 wrap-break-word mx-6 mb-6">
                  {product.description}
                </div>
             <div className="mx-10">
               <h3 className="font-semibold">
                Colors: {selectColor.name}
              </h3>
             </div>
  
              <div className="flex gap-12 ml-10 " >
                  {product.colors?.map((item)=>(
                    <div  onClick={()=>setColor(item)} key={item.hex} className="w-24 h-8 rounded-full border border-gray-200 p-2 flex items-center gap-3 mt-1.5 hover:border-black hover:cursor-pointer " >
                        <div className="w-5 h-5 rounded-full " style={{background:item.hex}} ></div>
                        <h3>{item.name}</h3>
                    </div>
                  ))}
              </div>
               <div className="mx-10 mt-6">
                <h3>Size:{selectSize} </h3>
              </div>
                  <div className="flex ml-10 mt-2 gap-2" >
                     {product.sizes?.map((size,i)=>(
                      <div onClick={()=>setSize(size)} key={i} className={`w-12 h-12 rounded-full border border-gray-200 flex items-center hover:border-black hover:cursor-pointer`} >
                          <h3 className="flex items-center text-xl ml-3 " >{size}</h3>
                      </div>
                     ))}
                  </div>
                  <div className="flex justify-start">
                     <div className="mt-6 ml-10 border border-gray-200 w-26 rounded-sm text-xl">
                        <Button onClick={()=>handleQuantityDecrement()}className="bg-white text-black text-2xl hover:bg-white hover:cursor-pointer " >-</Button> 
                        <span>{quantity}</span>
                        <Button onClick={()=>handleQuantityIncrement()} className="bg-white text-2xl text-black hover:bg-white hover:cursor-pointer ">+</Button>
                     </div>
                     <div>
                      <Button className="bg-[#006666] text-white w-[345px] hover:bg-[#FE6A49] border border-[#006666] hover:cursor-pointer h-12 mt-6 ml-2 rounded-sm text-[16px]">Add To Cart</Button>
                     </div>
                    </div>
                      <Button className="bg-white text-black w-[458px] hover:bg-[#FE6A49] hover:cursor-pointer border border-[#006666] rounded-sm h-12 mx-10 mt-6 mr-10 text-[16px]">Buy It Now</Button>
                     <div>
                        <div className="flex justify-start mt-6 mx-10">
                          <RefreshCcw/>
                          <span className="text-[16px] font-bold ml-2">Delivery & Return</span>
                        </div>
                        <div className="flex justify-start mt-3 mx-10">
                          <TimerIcon/>
                          <span className="font-bold text-[16px] mr-1">Estimated Delivery: </span>
                          <span className="text-gray-500"> 5 days</span>
                        </div>
                        <div className="mt-3 mx-10">
                          <span className="font-bold text-[16px]">Phone:</span>
                          <span className="ml-1 text-gray-500">0912345678</span>
                        </div>
                        <div className="mt-3 mx-10">
                          <span className="font-bold text-[16px] mr-1">Categories:</span>
                          <span className="text-gray-500">
                              {product.categories}
                          </span>
                        </div>
                     </div>
            </div>
          </div>    
        </SheetContent>
      </Sheet>
    
  )
}

export default QuickView