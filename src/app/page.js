import Card from "@/components/Card";
import CTA from "@/components/CTA";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import ProductShowcase from "@/components/ProductShoweces";
import ProtfolioTiles from "@/components/ProtfolioTiles";
import UserModal from "@/components/UserModal";


export default async function Home() {

  const res = await fetch ('http://localhost:3000/data.json')
  const datas = await res.json();
  
  

  return (
   <>
   <div className="container mx-auto">
   <Hero/>
   <Marquee/>
   
   <ProductShowcase/>
   <ProtfolioTiles/>
   <CTA/>
   <UserModal/>
   </div>
   </>
  );
}
