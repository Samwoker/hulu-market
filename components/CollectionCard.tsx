
import { Button } from "@/components/ui/button";

interface CollectionCardProps{
    image:string;
    buttonText?:string;
}

export const CollectionCard = ({image,buttonText}:CollectionCardProps) => {
  return (
    <div className="relative group w-80 h-120 cursor-pointer overflow-hidden rounded-2xl shadow-lg mb-16">

      {/* Default image */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-opacity duration-300 opacity-100 "
        style={{ backgroundImage: `url(${image})` }}
      />
      {/* Bottom center buttons */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-3 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-3 group-hover:translate-y-0">

        <Button className="rounded-xs px-8 py-6 shadow bg-white hover:bg-[#006666] hover:cursor-pointer text-black hover:text-white ">
          {buttonText}
        </Button>
      </div>
    </div>
  
  )
}


