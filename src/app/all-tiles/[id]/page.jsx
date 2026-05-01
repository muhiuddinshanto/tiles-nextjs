import Image from "next/image";
import Link from "next/link";
import { BiChevronLeft, BiEnvelope, BiDownload } from "react-icons/bi";



const TilesDetails = async ({ params }) => {
    const { id } = await params;

    
    const res = await fetch("https://pixgen-mu-nine.vercel.app/data.json", { cache: 'no-store' });
    const datas = await res.json();
    const singleTile = datas.find((item) => item.id === id);

    if (!singleTile) {
        return (
            <div className="h-screen flex items-center justify-center">
                <h2 className="text-2xl font-bold">Tile Not Found</h2>
            </div>
        );
    }

    const {
        image,
        title,
        shortDescription,
        longDescription,
        category,
        material,
        dimensions,
        inStock,
        price,
    } = singleTile;

    return (
        <section className="bg-white min-h-screen pt-24 lg:pt-32 pb-20">
            <div className="container mx-auto px-6 sm:px-8">
                
                {/* Back Link */}
                <Link href="/all-tiles" className="flex items-center gap-1 text-zinc-500 hover:text-[#7D2237] mb-10 transition-colors group">
                    <BiChevronLeft className="text-2xl group-hover:-translate-x-1 transition-transform" />
                    <span className="text-sm font-semibold uppercase tracking-widest">Back to Gallery</span>
                </Link>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
                    
                    {/* LEFT - IMAGE  */}
                    <div className="col-span-12 lg:col-span-7">
                        <div className="relative aspect-square bg-zinc-100 rounded-2xl overflow-hidden border border-zinc-200">
                            <Image
                                src={image}
                                alt={title}
                                fill
                                className="object-cover"
                                priority
                            />
                            {/*  Badge */}
                            <div className={`absolute top-6 right-6 px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest ${inStock ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                                {inStock ? "Available" : "On Request"}
                            </div>
                        </div>
                    </div>

                    {/* RIGHT - CONTENT  */}
                    <div className="col-span-12 lg:col-span-5">
                        <div className="sticky top-32">
                            <span className="text-[#7D2237] text-sm font-bold uppercase tracking-[0.2em] block mb-4">
                                {category} collection
                            </span>
                            <h1 className="text-4xl lg:text-5xl font-bold text-zinc-900 mb-6 leading-tight">
                                {title}
                            </h1>
                            <p className="text-zinc-600 text-lg leading-relaxed mb-8">
                                {shortDescription}
                            </p>

                            {/* Ditailes */}
                            <div className="border-t border-b border-zinc-100 py-6 mb-8">
                                <div className="grid grid-cols-2 gap-y-4 text-sm">
                                    <div className="text-zinc-400 uppercase tracking-wider">Material</div>
                                    <div className="text-zinc-900 font-semibold">{material}</div>
                                    
                                    <div className="text-zinc-400 uppercase tracking-wider">Dimensions</div>
                                    <div className="text-zinc-900 font-semibold">{dimensions}</div>
                                    
                                    <div className="text-zinc-400 uppercase tracking-wider">Estimated Price</div>
                                    <div className="text-[#7D2237] font-bold text-xl">${price} <span className="text-xs text-zinc-400 font-normal">/ sqft</span></div>
                                </div>
                            </div>

                            {/* Call to Actions  */}
                            <div className="flex flex-col gap-4">
                                <button className="w-full bg-zinc-900 text-white py-5 px-8 font-bold uppercase tracking-widest flex items-center justify-center gap-3 hover:bg-[#7D2237] transition-colors duration-500">
                                    <BiEnvelope className="text-xl" />
                                    Request Sample / Quote
                                </button>
                                
                                <div className="grid grid-cols-2 gap-4">
                                    <button className="border border-zinc-200 py-4 font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-zinc-50 transition-all">
                                        <BiDownload className="text-lg" />
                                        Datasheet
                                    </button>
                                    <button className="border border-zinc-200 py-4 font-bold text-xs uppercase tracking-widest hover:bg-zinc-50 transition-all">
                                        Book Consultation
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Description */}
                <div className="mt-20 lg:mt-32 max-w-3xl">
                    <h3 className="text-2xl font-bold text-zinc-900 mb-6">Product Overview</h3>
                    <div className="prose prose-zinc lg:prose-lg text-zinc-600">
                        <p className="leading-loose">
                            {longDescription}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TilesDetails;