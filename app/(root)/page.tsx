import BentoGrid from "@/components/Bento"
import CollectionCardsScroll from "@/components/CollectionCardsScroll";
import Hero from "@/components/Hero";
import TrendingProducts from "@/components/TrendingProducts";

const page = () => {
  return (
    <div>
      <Hero/>
      <BentoGrid/>
      <TrendingProducts/>
      <CollectionCardsScroll />
    </div>
  )
}

export default page