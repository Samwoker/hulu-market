'use client'
import { trendingProducts } from "@/lib/constants"
import Card from "./Card"
import { Separator } from "./ui/separator"
import {  Eye, Grid,  Heart,  Rows4, Shuffle } from "lucide-react"
import CardRow from "./CardRow"
import { Button } from "./ui/button"
import { useState } from "react"
import QuickView from "./QuickView"

type Product = {
    image: string;
    hoverImage: string;
    title: string;
    price: string;
    discountPrice: string;
    discountPercent: string;
    reviews?: number; 
    description?: string;
    colors?: { name: string, hex: string }[];
    sizes?: string[];
    estimatedDelivery?: string;
    sku?: string;
    categories?: string[];
}

const ProductCart = () => {
      const [open , setOpen] = useState(false);
      const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);
      const [showGrid,setShowGrid] = useState(false)
      const handleQuickView = (product: Product) => {
          setQuickViewProduct(product);
          setOpen(true);
      }

  const gridComponent = ()=>{
    return(
        <div className="grid grid-cols-3 gap-6  mx-12" >
        {
        trendingProducts.map((item, i) => {
        // Apply onClick handler to a container or the Card component itself
          return (
            <div 
            key={i} 
            className="mt-16 cursor-pointer" 
            //   onClick={() => handleQuickView(item)}
            >
              <Card 
              image={item.image}
              hoverImage={item.hoverImage}

              onQuickViewClick = {()=> handleQuickView(item)}
              />
              <div className="mt-3 mb-1 text-black font-light text-xl">
                    <p>{item.title}</p>
              </div>
              <div>
                      <span className="mr-3 font-semibold ">{item.discountPrice}</span>
                      <span className="text-gray-500 mr-3 line-through" >{item.price}</span>
                      <span className="w-16 h-14 bg-[#D2EF9A] px-2 py-1 rounded-full">{item.discountPercent}</span>
              </div>
            </div>
          )
        })
        }
        </div>
    )
  }


  return (
    <div className="mt-12">
        <div className="grid grid-cols-6 gap-12">
            <div className="mt-12 col-span-2">
                <div className="ml-24">
                    <h1 className="text-xl font-bold mb-6">Product Type</h1>
                     <div className="flex justify-between">
                        <span className="text-[18px] mb-0.5 hover:underline hover:cursor-pointer">T-Shirt</span>
                         <span className="mb-0.5">12</span>
                     </div> 
                     <div className="flex justify-between">
                        <span className="text-[18px] mb-0.5 hover:underline hover:cursor-pointer">Dress</span>
                         <span className="mb-0.5">41</span>
                     </div>
                     <div className="flex justify-between">
                        <span className="text-[18px] mb-0.5 hover:underline hover:cursor-pointer">Top</span>
                         <span className="mb-0.5">62</span>
                     </div>
                     <div className="flex justify-between">
                        <span className="text-[18px] mb-0.5 hover:underline hover:cursor-pointer">Swimwear</span>
                         <span className="mb-0.5">30</span>
                     </div>
                     <div className="flex justify-between">
                        <span className="text-[18px] mb-0.5 hover:underline hover:cursor-pointer">Shirt</span>
                         <span className="mb-0.5">80</span>
                     </div>
                     <div className="flex justify-between">
                        <span className="text-[18px] mb-0.5 hover:underline hover:cursor-pointer">Sets</span>
                         <span className="mb-0.5">90</span>
                     </div>
                     <div className="flex justify-between">
                        <span className="text-[18px] mb-0.5 hover:underline hover:cursor-pointer">Accessories</span>
                         <span className="mb-0.5">50</span>
                     </div>
                     <Separator className=" my-4" />
                </div>

                   <h1 className="text-xl font-bold ml-24">Size</h1>
                <div className="ml-34 flex mt-6 justify-center">
       
                    <div className="flex mt-2  gap-2" > 
                      <div className={`w-10 h-10 rounded-full border border-gray-200 flex items-center hover:bg-black hover:text-white hover:cursor-pointer`} >
                          <h3 className="flex items-center font-bold text-[15px] ml-2 " >
                            XS
                          </h3>
                      </div>   
                   </div>
                   <div className="flex mt-2 ml-3 gap-2" > 
                      <div className={`w-10 h-10 rounded-full border border-gray-200 flex items-center hover:bg-black hover:text-white hover:cursor-pointer`} >
                          <h3 className="flex items-center font-bold text-[15px] ml-3 " >
                            S
                          </h3>
                      </div>   
                   </div>
                   <div className="flex mt-2 ml-3 gap-2" > 
                      <div className={`w-10 h-10 rounded-full border border-gray-200 flex items-center hover:bg-black hover:text-white hover:cursor-pointer`} >
                          <h3 className="flex items-center font-bold text-[15px] ml-3 " >
                            M
                          </h3>
                      </div>   
                   </div>
                   <div className="flex mt-2 ml-3 gap-2" > 
                      <div className={`w-10 h-10 rounded-full border border-gray-200 flex items-center hover:bg-black hover:text-white hover:cursor-pointer`} >
                          <h3 className="flex items-center font-bold text-[15px] ml-2 " >
                            XL
                          </h3>
                      </div>   
                   </div>
                   <div className="flex mt-2 ml-3 gap-2" > 
                      <div className={`w-10 h-10 rounded-full border border-gray-200 flex items-center hover:bg-black hover:text-white hover:cursor-pointer`} >
                          <h3 className="flex items-center font-bold text-[15px] ml-2 " >
                            2XL
                          </h3>
                      </div>   
                   </div>
                  
                  </div>
                  <div className="ml-24 w-24 h-10 border border-gray-300 flex justify-center rounded-full items-center my-4 hover:bg-black hover:cursor-pointer hover:text-white">
                    <h3 className="text-[16px] font-bold ">FreeSize</h3>
                  </div>
                  <div className="ml-24  my-6">
                    <Separator/>
                  </div>
            </div>

            <div className="col-span-4 mt-8">
              <div className="flex justify-start ml-14 gap-4">
                <Button onClick={()=>setShowGrid(true)} className="w-8 h-8 border-2 rounded-sm bg-white text-gray-800 hover:text-white border-gray-300 flex justify-center items-center hover:cursor-pointer" >
                  <Grid className="w-5 h-5" />
                </Button>
                <Button onClick={()=>setShowGrid(false)} className="w-8 h-8 border-2 rounded-sm bg-white text-gray-800 hover:text-white border-gray-300 flex justify-center items-center hover:cursor-pointer">
                  <Rows4 className="w-5 h-5" />
                </Button>
              </div>

              {showGrid ? gridComponent(): 
                trendingProducts.map((item,i)=>(
                  <div key={i} className="my-8" >
                    <div className="grid grid-cols-4">
                        <div className="col-span-1">
                        <CardRow hoverImage={item.hoverImage} image={item.image} />
                      </div>
                        <div className="col-span-2 ml-10 mt-2">
                    <div className="mt-3 mb-1 text-black font-bold text-[16px]">
                  <p>{item.title}</p>
                </div>
                <div className="text-gray-600 my-6">
                  {item.description}
                </div>
                <div>
                  <span className="mr-3 font-semibold ">{item.discountPrice}</span>
                  <span className="text-gray-500 mr-3 line-through" >{item.price}</span>
                  <span className="w-16 h-14 bg-[#D2EF9A] px-2 py-1 rounded-full">{item.discountPercent}</span>
                </div> 
                  </div>
                  <div className="mt-56">
                    <div className="ml-4">
                      <Button className="rounded-full bg-white text-[#006666]  font-bold border border-[#006666] py-6 px-6 hover:bg-[#006666] hover:text-white hover:cursor-pointer">Add To Cart</Button>
                    </div>
                    <div className="flex justify-start gap-6 mt-6">
                      <Button size="icon" variant="secondary" className="rounded-full p-2 shadow hover:cursor-pointer border border-black hover:bg-black hover:text-white bg-white">
                        <Heart className="w-5 h-5" />
                      </Button>

                      <Button size="icon" variant="secondary" className="rounded-full p-2 shadow hover:cursor-pointer  border border-black hover:bg-black hover:text-white bg-white">
                        <Shuffle className="w-5 h-5" />
                      </Button>
                      <Button size="icon" variant="secondary" className="rounded-full p-2 shadow hover:cursor-pointer  border border-black hover:bg-black hover:text-white bg-white">
                        <Eye className="w-5 h-5" />
                      </Button>

                    </div>
                </div>
                    </div>
                    
                  
                </div>
                ))
              }

             
             
             </div>
        </div>
         <QuickView 
              open={open} 
              setOpen={setOpen} 
              product={quickViewProduct} 
            />
    </div>
  )
}

export default ProductCart