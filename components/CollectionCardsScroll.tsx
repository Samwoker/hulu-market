'use client'
import { collectionCards } from "@/lib/constants"
import { CollectionCard } from "./CollectionCard"
import { useState } from "react"
import { Button } from "./ui/button";
import { ChevronLeft } from "lucide-react";


const CollectionCardsScroll = () => {
    const [cards,setCards]=useState(collectionCards);
    const next = ()=>{
        setCards((prev)=>{
            const [first,...rest]=prev;
            return [...rest,first];
        })
    }
    const prev=()=>{
            setCards((prev)=>{
                const last = prev[prev.length -1];
                const rest = prev.slice(0,  -1);
                return [last,...rest];
            })
        }
  return (
   <div className="mt-16">
    <div className="mb-16 flex justify-center">
        <h2 className="text-[#006666] font-semibold text-2xl">Explore Collections</h2>
    </div>
     <div className="relative w-full flex items-center">
        <Button onClick={prev} className="absolute left-0 z-0 p-2 rounded-full bg-black/40 hover:bg-black/70 text-white">
            <ChevronLeft/>
        </Button>
        <div className="flex gap-12 overflow-hidden w-full px-12 mx-40">
                <div className="flex gap-6 transition-transform duration-300">
                    {cards.map((item,i)=>(
                        <CollectionCard 
                        key={i}
                        image={item.image}
                        buttonText={item.buttonText}
                        />
                    ))}
                </div>
        </div>
        <Button onClick={next} className="absolute right-0 z-0 p-2 rounded-full bg-black/40 hover:bg-black/70 text-white">
            <ChevronLeft className="rotate-180"/>
        </Button>
    </div>
   </div>
  )
}

export default CollectionCardsScroll