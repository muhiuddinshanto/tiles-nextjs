import ProductCard from "@/components/ProductCard";
import { BiSearch } from "react-icons/bi";


const AllTiles = async ({ searchParams }) => {
   
    const { query } = await searchParams;

    const res = await fetch("https://tiles-nextjs-brown.vercel.app/data.json", {
        cache: "no-store",
    });
    let datas = await res.json();

    
    if (query) {
        datas = datas.filter((item) =>
            item.title.toLowerCase().includes(query.toLowerCase()) ||
            item.category.toLowerCase().includes(query.toLowerCase())
        );
    }

    return (
        <div className="container mx-auto px-4 space-y-6 mt-10">

            
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-10 gap-8 border-b border-zinc-200 pb-8">

                <div className="space-y-2">
                    <span className="text-[#7D2237] text-xs sm:text-sm font-bold uppercase tracking-[0.2em]">
                        Full Collection
                    </span>
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-zinc-900 leading-tight">
                        Explore All Tiles
                    </h1>
                </div>

                <div className="flex flex-col sm:flex-row items-center gap-4 w-full lg:w-auto">
                    {/* Search Input  */}
                    <form action="/all-tiles" className="relative w-full sm:w-72">
                        <input
                            name="query"
                            type="text"
                            placeholder="Search by name or category..."
                            defaultValue={query}
                            className="w-full bg-zinc-100 border border-zinc-200 rounded-md py-3 pl-10 pr-4 text-sm focus:outline-none focus:ring-1 focus:ring-[#7D2237] transition-all"
                        />
                        <BiSearch className="absolute left-3 top-3.5 text-zinc-400" size={18} />
                    </form>

                    <div className="text-zinc-500 font-medium uppercase tracking-widest text-[10px] sm:text-xs whitespace-nowrap border-l border-zinc-200 pl-4 hidden sm:block">
                        Results:{" "}
                        <span className="text-zinc-900 font-bold">
                            {datas.length}
                        </span>
                    </div>
                </div>

            </div>

            {/* GRID */}
            {datas.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {datas.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            ) : (
                <div className="py-20 text-center border-2 border-dashed border-zinc-100 rounded-2xl">
                    <p className="text-zinc-400 text-lg italic">
                        No tiles found matching &quot;{query}&quot;
                    </p>
                </div>
            )}

        </div>
    );
};

export default AllTiles;