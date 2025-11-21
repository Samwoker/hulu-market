'use client';

import { cn } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';

interface BentoGridItemProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  className?: string;
  size?: 'small' | 'medium' | 'large';
  bgImage?:string;
  stock:string;
}

const BentoGridItem = ({
  className,
  bgImage,
  title,
  stock
}: BentoGridItemProps) => {
  return (
    <div
      className={cn(
        "group relative flex flex-col justify-between overflow-hidden rounded-xl border border-primary/10 p-6 shadow-lg transition-all duration-500 hover:scale-105",
        className
      )}
    >
      {/* IMAGE AS REAL <img> FOR PERFECT QUALITY */}
      {bgImage && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={bgImage}
          alt=""
          className="absolute inset-0 w-full h-full object-contain object-center"
        />
      )}

      {/* Optional dim overlay */}
      <div className="absolute inset-0 bg-black/20"></div>

      {/* CONTENT */}
      <div className="flex flex-col justify-between h-full relative z-10">
        <div>
          <div className="text-primary mb-4 flex flex-col h-auto w-56">
            <div>
              <p className='font-semibold' >{title}</p>
            </div>
           <div>
             <p className='font-light' >{stock}</p>
           </div>
          </div>
        </div>

        <div className="mt-4 flex items-center text-sm text-primary font-medium">
          <span className="mr-2">Browse Items</span>
          <ArrowRight className="w-5 h-5 transition-transform duration-500 group-hover:translate-x-2" />
        </div>
      </div>
    </div>
  );
};


const items = [
  { title:"Women's Wear", stock:"3273 items" , size: 'large',bgImage:"/images/slider-2.png" },
  { title:"Women's Classic", stock:"1264 items" ,  size: 'small',bgImage:"/images/image10-removebg-preview.png" },
  {title:"Men's Wear", stock:"645 items" ,  size: 'medium',bgImage:"/images/image20-removebg-preview.png" },
  {  title:"kid's Wear",stock:"4974 items" ,  size: 'medium' ,bgImage:"/images/kid-removebg-preview.png"},
];

export default function BentoGrid() {
  return (
    <div
      className="relative  w-full h-screen"
    >
      {/* Overlay for better readability */}
      <div className="absolute inset-0"></div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-12 h-full flex items-center">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 md:grid-cols-6 w-full h-full">
          {items.map((item, i) => (
            <BentoGridItem
              key={i}
              title={item.title}
              bgImage={item.bgImage}
              stock={item.stock}
              className={cn(
                item.size === 'large'
                  ? 'col-span-4'
                  : item.size === 'medium'
                  ? 'col-span-3'
                  : 'col-span-2',
                'h-full'
              )}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
