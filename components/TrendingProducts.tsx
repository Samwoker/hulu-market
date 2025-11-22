import { trendingProducts } from "@/lib/constants"
import Card from "./Card"

const TrendingProducts = () => {
  return (
   <div>
    <div className="flex justify-center mt-8">
        <h2 className="text-2xl font-semibold text-[#006666]">
            Our Trending Products
        </h2>
    </div>
     <div className="grid grid-cols-4 mx-24 mt-8" >
       {
        trendingProducts.map((item,i)=>{
            return <div key={i} className="mt-16 " >
                <Card 
                image={item.image}
                hoverImage={item.hoverImage}
                />
          <div className="mt-3 mb-1 text-black font-light text-xl">
            <p>{item.title}</p>
        </div>
        <div>
            <span className="mr-3 font-semibold ">{item.discountPrice}</span>
            <span className="text-gray-500 mr-3 line-through" >{item.price}</span>
            <span  className="w-16 h-14 bg-[#D2EF9A] px-2 py-1 rounded-full">{item.discountPercent}</span>
        </div>
       </div>
        })
       }
    </div>
   </div>
  )
}

export default TrendingProducts