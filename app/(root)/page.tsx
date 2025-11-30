import BentoGrid from "@/components/Bento"
import Cart from "@/components/Cart";
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
      <Cart/>
    </div>
  )
}

export default page