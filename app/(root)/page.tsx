import BentoGrid from "@/components/Bento"
import Hero from "@/components/Hero";
import TrendingProducts from "@/components/TrendingProducts";

const page = () => {
  return (
    <div>
      <Hero/>
      <BentoGrid/>
    <TrendingProducts/>
    </div>
  )
}

export default page