import ProductCard from "./ProductCard";
import data from "@/../public/data.json";

const ProductShowcase = async () => {
    
    const res = await fetch('https://pixgen-mu-nine.vercel.app/data.json', { cache: 'no-store' });
    const data = await res.json();

    return (
        <section className="py-16 lg:py-32 bg-white">
            <div className="container mx-auto px-6 sm:px-8">
                {/* Header Section */}
                <div className="mb-12 lg:mb-20 text-center md:text-left">
                    <span className="text-[#7D2237] font-semibold uppercase tracking-[0.2em] block mb-3 text-sm">
                        Premium Materials
                    </span>
                    <h2 className="text-3xl lg:text-5xl font-bold text-zinc-900">
                        Top 4 Tile Products
                    </h2>
                </div>

                
                <div className="grid grid-cols-12 gap-6 lg:gap-8">
                    {data.slice(0, 4).map((product, index) => (
                        <div key={index} className="col-span-12 md:col-span-6 lg:col-span-3">
                            <ProductCard product={product} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProductShowcase;