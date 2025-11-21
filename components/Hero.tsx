'use client'
import Image from "next/image"
import { Button } from "./ui/button"
import { useState,useEffect } from "react"
import { slides } from "@/lib/constants"

import AOS from "aos";
import "aos/dist/aos.css";


const Hero = () => {
    const [current,setCurrent] = useState(0);
    useEffect(() => {
  AOS.refresh();
}, [current]);

  return (
    <div className="h-screen bg-gray-50">
        <div className="flex justify-around items-center">
            <div className="ml-5">
                <h3  data-aos="fade-right" className="text-xl font-bold text-[#495057] mb-5">{slides[current].title}</h3>
                <div data-aos="fade-right">
                <span className="text-7xl font-bold text-[#495057]">{slides[current].text1}</span><br />
                <span  className="text-7xl font-bold text-[#495057]">{slides[current].text2}</span><br />
                </div>
                <Button  data-aos="fade-right" size="lg" className="bg-[#006666] rounded-1 mt-8 hover:bg-[#FE6A49] hover:cursor-pointer">Shop Now</Button>
            </div>
            <div data-aos="fade-left" className="mr-20">
                <Image 
                width={600}
                height={700}
                src={slides[current].image} alt="Slider one"/>
            </div>
        </div>
        <div>
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-4">
                {slides.map((_,index)=>(
                    <button
      key={index}
      onClick={() => setCurrent(index)}
      className={`
        w-4 h-4 rounded-full transition-all border-[#006666] border-1 hover:cursor-pointer 
        ${current === index ? "bg-[#006666] scale-100" : "bg-white hover:bg-[#FE6A49]"}
      `}
    />
                ))}
            </div>

        </div>
    </div>
  )
}

export default Hero