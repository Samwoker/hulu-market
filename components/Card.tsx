"use client";
import { Heart, Shuffle } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CardProps {
  image: string;
  hoverImage: string;
  onQuickViewClick: ()=>void;
}

export default function Card({
  image,
  hoverImage,
  onQuickViewClick
}: CardProps) {
  return (
    <div className="relative group w-80 h-120 cursor-pointer overflow-hidden rounded-2xl shadow-lg">

      {/* Default image */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-opacity duration-300 opacity-100 group-hover:opacity-0"
        style={{ backgroundImage: `url(${image})` }}
      />

      {/* Hover image */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-opacity duration-300 opacity-0 group-hover:opacity-100"
        style={{ backgroundImage: `url(${hoverImage})` }}
      />

      {/* Top-right icons */}
      <div className="absolute top-3 right-3 flex flex-col gap-3 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-3 group-hover:translate-x-0">
        <Button size="icon" variant="secondary" className="rounded-full p-2 shadow hover:cursor-pointer">
          <Heart className="w-5 h-5" />
        </Button>

        <Button size="icon" variant="secondary" className="rounded-full p-2 shadow hover:cursor-pointer">
          <Shuffle className="w-5 h-5" />
        </Button>
      </div>

      {/* Bottom center buttons */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-3 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-3 group-hover:translate-y-0">

        <Button variant="secondary" className="rounded-full px-4 py-4 shadow bg-[#006666] text-white hover:bg-[#FE6A49] hover:cursor-pointer " onClick={onQuickViewClick}>
          Quick View
        </Button>

        <Button className="rounded-full px-4 py-4 shadow bg-[#006666] hover:bg-[#FE6A49] hover:cursor-pointer ">
          Add to Cart
        </Button>
      </div>
    </div>
  );
}
