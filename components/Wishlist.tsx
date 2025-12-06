'use client'
import Image from "next/image"
import { Button } from './ui/button'
import { Star, Trash2 } from 'lucide-react'
import { useState } from "react"

const Wishlist = () => {
     const [quantity,setQuantity] = useState(1)
        const handleQuantityIncrement = ()=>{
            setQuantity(quantity+1);
        }
        const handleQuantityDecrement = ()=>{
            if (quantity > 0){
                setQuantity(quantity - 1)
            }
        }
  return (
    <div>
         <div className="flex flex-col lg:flex-row gap-8 mx-25 my-25">
                        <div className="flex-2 w-[1050px]">
                            <div className="bg-gray-100 shadow-md rounded-sm overflow-hidden">
                                <table className="w-full text-left">
                                    <thead className="bg-gray-200">
                                        <tr>
                                            <th className="px-6 py-3 text-gray-700">Product</th>
                                            <th className="px-6 py-3 text-gray-700">Unit Price</th>
                                            <th className="px-6 py-3 text-gray-700">Quantity</th>
                                            <th className="px-6 py-3 text-gray-700">Subtotal</th>
                                            <th className="px-6 py-3 text-gray-700">Remove</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="border-b hover:bg-gray-50 transition">
                                            <td className="px-6 py-4">
                                                <div className="flex items-center gap-4">
                                                    <Image src={"/images/image1.jpg"} width={90} height={90} alt="cart-item" className="rounded-lg"/>
                                                    <div className="ml-12">
                                                        <h3 className="font-semibold">Gray Blazer & Wide-Leg Pant</h3>
                                                        <div className="flex items-center text-yellow-400">
                                                            <Star className="mr-1" /> (5.0)
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 font-bold text-gray-700">
                                                $20.50
                                            </td>
                                            <td className="px-6 py-4">
                                                <div className="flex items-center border border-gray-300 rounded-md overflow-hidden w-max">
                                                <Button onClick={()=>handleQuantityDecrement()}className="bg-white text-black text-2xl hover:bg-white hover:cursor-pointer " >-</Button> 
                                                      <span>{quantity}</span>
                                                  <Button onClick={()=>handleQuantityIncrement()} className="bg-white text-2xl text-black hover:bg-white hover:cursor-pointer ">+</Button>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 font-bold text-teal-700">
                                             $20.50
                                            </td>
                                            <td className="px-6 py-4 text-red-500 hover:text-red-700 cursor-pointer">
                                                <Trash2 />
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>              
                        </div>
                    </div>
    </div>
  )
}

export default Wishlist