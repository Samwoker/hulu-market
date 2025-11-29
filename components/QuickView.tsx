import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet"
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
    if (!product) {
        return null;
    }

    const setColor = (color:Color)=>{
      setSelectColor(color)
    }
    const setSize = (size:string)=>{
      setSelectSize(size)
    }

  return (
    <div className="w-full mt-8 mb-8 mr-8">
      <Sheet open={open} onOpenChange={setOpen}>
        {/* Remove SheetTrigger as the sheet is opened via state in TrendingProducts */}
        
        <SheetContent side="right" className="rounded-2xl">
          <SheetHeader>
            <SheetTitle className="text-2xl font-bold text-[#006666]">
              Quick View: {product.title}
            </SheetTitle>
            <SheetDescription>
              {product.description}
            </SheetDescription>
          </SheetHeader>

            <div>
             <div>
               <h3>
                Colors: {selectColor.name}
              </h3>
             </div>
  
              <div className="flex justify-around" >
                  {product.colors?.map((item)=>(
                    <div  onClick={()=>setColor(item)} key={item.hex} className="w-24 h-8 rounded-full border-1 border-gray-200 p-2 flex items-center gap-3 mt-1.5 hover:border-black hover:cursor-pointer " >
                        <div className="w-5 h-5 rounded-full " style={{background:item.hex}} ></div>
                        <h3>{item.name}</h3>
                    </div>
                  ))}
              </div>
            </div>

            <div>
              <div>
                <h3>Size:{selectSize} </h3>
              </div>
                  <div className="flex justify-baseline gap-2" >
                     {product.sizes?.map((size,i)=>(
                      <div onClick={()=>setSize(size)} key={i} className="w-12 h-12 rounded-full border-1 border-gray-200 flex items-center hover:border-black hover:cursor-pointer" >
                          <h3 className="flex items-center text-xl ml-3 " >{size}</h3>
                      </div>
                     ))}
                  </div>
            </div>

        </SheetContent>
      </Sheet>
    </div>
  )
}

export default QuickView