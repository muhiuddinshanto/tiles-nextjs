import ProductCard from "@/components/ProductCard";

const AllTiles = async () => {
    const res = await fetch("http://localhost:3000/data.json", {
        cache: "no-store",
    });
    const datas = await res.json();

    return (
        <div className="container mx-auto px-4 space-y-6 mt-6">

            {/* HEADER */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 gap-6 border-b border-zinc-200 pb-6">

                <div className="space-y-2">
                    <span className="text-[#7D2237] text-xs sm:text-sm font-bold uppercase tracking-[0.2em]">
                        Full Collection
                    </span>

                    <h1 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-zinc-900 leading-tight">
                        Explore All Tiles
                    </h1>
                </div>

                <div className="text-zinc-500 font-medium uppercase tracking-widest text-xs sm:text-sm">
                    Total items:{" "}
                    <span className="text-zinc-900 font-bold">
                        {datas.length}
                    </span>
                </div>

            </div>

            {/* GRID */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">

                {datas.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}

            </div>

        </div>
    );
};

export default AllTiles;