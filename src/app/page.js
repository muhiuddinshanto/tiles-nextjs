
import CTA from "@/components/CTA";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import ProductShowcase from "@/components/ProductShoweces";
import ProtfolioTiles from "@/components/ProtfolioTiles";



export default async function Home() {

  
  
  

  return (
   <>
   <div className="container mx-auto">
   <Hero/>
   <Marquee/>
   
   <ProductShowcase/>
   <ProtfolioTiles/>
   <CTA/>
   </div>
   </>
  );
}
