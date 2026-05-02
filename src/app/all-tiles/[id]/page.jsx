import Image from "next/image";
import Link from "next/link";
import { BiChevronLeft, BiEnvelope, BiDownload } from "react-icons/bi";

const TilesDetails = async ({ params }) => {
    const { id } = await params;

    const res = await fetch("https://tiles-nextjs-brown.vercel.app/data.json", { cache: 'no-store' });
    const datas = await res.json();
    const singleTile = datas.find((item) => item.id === id);

    if (!singleTile) {
        return (
            <div className="h-screen flex items-center justify-center px-6 text-center">
                <h2 className="text-xl md:text-2xl font-bold">Tile Not Found</h2>
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
        <section className="bg-white min-h-screen pt-20 lg:pt-32 pb-16">
            <div className="container mx-auto px-4 sm:px-8">
                
                {/* Back Link - মোবাইলে মার্জিন কমানো হয়েছে */}
                <Link href="/all-tiles" className="inline-flex items-center gap-1 text-zinc-500 hover:text-[#7D2237] mb-6 lg:mb-10 transition-colors group">
                    <BiChevronLeft className="text-xl lg:text-2xl group-hover:-translate-x-1 transition-transform" />
                    <span className="text-[10px] lg:text-sm font-semibold uppercase tracking-widest">Back to Gallery</span>
                </Link>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-20 items-start">
                    
                    {/* LEFT - IMAGE */}
                    <div className="col-span-12 lg:col-span-7">
                        {/* মোবাইলে aspect-square এর বদলে aspect-[4/3] দেওয়া যেতে পারে যদি ইমেজ বেশি লম্বা হয় */}
                        <div className="relative aspect-square sm:aspect-video lg:aspect-square bg-zinc-100 rounded-xl lg:rounded-2xl overflow-hidden border border-zinc-200">
                            <Image
                                src={image}
                                alt={title}
                                fill
                                className="object-cover"
                                priority
                            />
                            {/* Badge - মোবাইলে সাইজ একটু ছোট */}
                            <div className={`absolute top-4 right-4 lg:top-6 lg:right-6 px-3 py-1 lg:px-4 lg:py-1 rounded-full text-[9px] lg:text-[10px] font-bold uppercase tracking-widest ${inStock ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                                {inStock ? "Available" : "On Request"}
                            </div>
                        </div>
                    </div>

                    {/* RIGHT - CONTENT */}
                    <div className="col-span-12 lg:col-span-5">
                        {/* মোবাইলে sticky থাকবে না, শুধু বড় স্ক্রিনে থাকবে */}
                        <div className="lg:sticky lg:top-32">
                            <span className="text-[#7D2237] text-xs lg:text-sm font-bold uppercase tracking-[0.2em] block mb-3 lg:mb-4">
                                {category} collection
                            </span>
                            <h1 className="text-3xl lg:text-5xl font-bold text-zinc-900 mb-4 lg:mb-6 leading-tight">
                                {title}
                            </h1>
                            <p className="text-zinc-600 text-base lg:text-lg leading-relaxed mb-6 lg:mb-8">
                                {shortDescription}
                            </p>

                            {/* Details Table */}
                            <div className="border-t border-b border-zinc-100 py-5 lg:py-6 mb-6 lg:mb-8">
                                <div className="grid grid-cols-2 gap-y-4 text-xs lg:text-sm">
                                    <div className="text-zinc-400 uppercase tracking-wider">Material</div>
                                    <div className="text-zinc-900 font-semibold">{material}</div>
                                    
                                    <div className="text-zinc-400 uppercase tracking-wider">Dimensions</div>
                                    <div className="text-zinc-900 font-semibold">{dimensions}</div>
                                    
                                    <div className="text-zinc-400 uppercase tracking-wider">Estimated Price</div>
                                    <div className="text-[#7D2237] font-bold text-lg lg:text-xl">
                                        ${price} <span className="text-[10px] lg:text-xs text-zinc-400 font-normal">/ sqft</span>
                                    </div>
                                </div>
                            </div>

                            {/* Call to Actions - মোবাইলে বাটনগুলো ফুল উইডথ */}
                            <div className="flex flex-col gap-3 lg:gap-4">
                                <button className="w-full bg-zinc-900 text-white py-4 lg:py-5 px-8 font-bold uppercase tracking-widest text-xs lg:text-sm flex items-center justify-center gap-3 hover:bg-[#7D2237] transition-all duration-300 active:scale-[0.98]">
                                    <BiEnvelope className="text-lg lg:text-xl" />
                                    Request Sample / Quote
                                </button>
                                
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 lg:gap-4">
                                    <button className="border border-zinc-200 py-3 lg:py-4 font-bold text-[10px] lg:text-xs uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-zinc-50 transition-all active:scale-[0.98]">
                                        <BiDownload className="text-lg" />
                                        Datasheet
                                    </button>
                                    <button className="border border-zinc-200 py-3 lg:py-4 font-bold text-[10px] lg:text-xs uppercase tracking-widest hover:bg-zinc-50 transition-all active:scale-[0.98]">
                                        Book Consultation
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Description - মোবাইলে মার্জিন অ্যাডজাস্ট করা হয়েছে */}
                <div className="mt-16 lg:mt-32 max-w-3xl">
                    <h3 className="text-xl lg:text-2xl font-bold text-zinc-900 mb-4 lg:mb-6 uppercase tracking-tight">Product Overview</h3>
                    <div className="prose prose-zinc lg:prose-lg text-zinc-600 max-w-none">
                        <p className="leading-relaxed lg:leading-loose text-sm lg:text-base text-justify lg:text-left">
                            {longDescription}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TilesDetails;