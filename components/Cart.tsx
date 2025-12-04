'use client'
import Link from "next/link"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Separator } from "./ui/separator"
import Image from "next/image"
import { Star, Trash2 } from "lucide-react"
import { useState } from "react"

const Cart = () => {
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
        <div className="flex justify-between mt-50 mx-36">
            <div className="flex flex-col lg:flex-row gap-8">
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
                                            <div>
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
            <div className="col-span-1 w-[470px] h-[520px] bg-gray-100 rounded-sm">
                <h1 className="ml-10 mt-6 text-2xl font-bold">Order Summary</h1>
                <div className="mt-12 mx-6 flex justify-between mb-4">
                    <span>Subtotal</span>
                    <span>$372.00</span>
                </div>
                <Separator className="text-sm" />
                <div className="my-4 mx-6 flex justify-between">
                    <span>Discounts</span>
                    <span>-$0.00</span>
                </div>
                <Separator/>
                <div className="flex justify-between my-4 mx-6 ">
                    <span>Shipping</span>
                    <div className="flex flex-col">
                       <div className="flex justify-start my-1">
                             <Input type="radio" className="h-5 w-5 accent-[#006666]" />
                             <span className="text-nowrap" >Free Shipping:</span>
                       </div>
                        <div className="flex justify-start my-1">
                             <Input type="radio" className="h-5 w-5 accent-[#006666]" />
                             <span className="text-nowrap">Local:</span>
                       </div>
                        <div className="flex justify-start my-1">
                             <Input type="radio" className="h-5 w-5 accent-[#006666]" />
                             <span className="text-nowrap">Flat Rate:</span>
                       </div>
                    </div>
                    <div className="flex flex-col">
                        <span className="my-1">$0.00</span>
                        <span className="my-1">$25.00</span>
                        <span className="my-1">$30.00</span>
                    </div>
                </div>
                <Separator/>
                <div className="flex justify-between mx-6 mt-4">
                    <span className="font-bold text-3xl ">Total</span>
                    <span className="font-bold text-3xl">$372.00</span>
                </div>
                <div className="mt-6">
                    <Button className="w-[400px] bg-[#006666] rounded-sm h-12 mx-7 hover:bg-[#FE6A49] hover:cursor-pointer border border-[#006666] font-bold ">Process To Checkout</Button>
                </div>
                <div className="mt-4 ml-40">
                    <Link href={"/"} className="font-bold hover:underline" >Continue Shopping</Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Cart