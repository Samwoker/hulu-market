'use client'
import { trendingProducts } from "@/lib/constants"
import Card from "./Card" // Assuming Card component handles image display
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

const TrendingProducts = ({}) => {
    const [open , setOpen] = useState(false);
    const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);
    const handleQuickView = (product: Product) => {
        setQuickViewProduct(product);
        setOpen(true);
    }
    
  return (
   <div>
    <div className="flex justify-center mt-8">
        <h2 className="text-2xl font-semibold text-[#006666]">
            Our Trending Products
        </h2>
    </div>
     <div className="grid grid-cols-4 mt-8 mr-50 ml-50" >
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
    
    {/* Pass the state controller and the product data to QuickView */}
    <QuickView 
      open={open} 
      setOpen={setOpen} 
      product={quickViewProduct} 
    />
   </div>
  )
}

export default TrendingProducts