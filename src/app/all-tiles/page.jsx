import Card from "@/components/Card";
import ProductCard from "@/components/ProductCard";





const AllTiles = async () => {
    const res = await fetch("http://localhost:3000/data.json", {
  cache: "no-store",
});
    const datas = await res.json();

    console.log("TOTAL DATA:", datas.length);
    return (
        <div className="container mx-auto space-y-3 mt-3">
            <div>
                <h2 className="text-xl font-bold">AllTiles</h2>
            </div>
            
            <div className="grid grid-cols-12  gap-4">
                {
                    datas.map((product) => {
                        console.log(product);
                        
                        return <ProductCard key={product.id} product={product}></ProductCard>
                    })
                }
            </div>
        </div>

    );
};

export default AllTiles;