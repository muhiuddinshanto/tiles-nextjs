import ProductSlider from "./ProductSlider"; // নতুন কম্পোনেন্ট ইম্পোর্ট

const ProductShowcase = async () => {
    const res = await fetch('https://tiles-nextjs-brown.vercel.app/data.json', { cache: 'no-store' });
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

                {/* এখানে গ্রিড ডিলিট করে স্লাইডার বসানো হয়েছে */}
                <ProductSlider products={data.slice(0, 8)} /> 
            </div>
        </section>
    );
};

export default ProductShowcase;