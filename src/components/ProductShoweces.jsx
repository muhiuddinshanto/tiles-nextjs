import ProductCard from "./ProductCard";



const ProductShowcase = async () => {

    const res = await fetch('http://localhost:3000/data.json')
    const data = await res.json();
    



    return (
        <section className="py-32 bg-white">
            <div className="container mx-auto px-8">
                <div className="mb-20">
                    <span className="text-[#7D2237] font-label-lg uppercase tracking-[0.2em] block mb-4">Premium Materials</span>
                    <h2 className="font-headline-lg text-on-surface">Top 4 Tile Products</h2>
                </div>
                <div className="grid grid-cols-12 gap-gutter gap-4">
                    {data.slice(0, 4).map((product, index) => (
                        <ProductCard key={index} product={product}></ProductCard>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProductShowcase;
