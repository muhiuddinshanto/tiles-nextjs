"use client";
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules';
import Image from 'next/image';

// Swiper Styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

const ProtfolioTiles = () => {
    // আগের ৪টি এবং নতুন ৫টি সহ মোট ৯টি প্রজেক্ট
    const projects = [
        { id: 1, title: "Nexus Alpha Dashboard", tag: "Fintech", img: "/images/Project1.jpg", desc: "Digital overhaul for financial institutions." },
        { id: 2, title: "Temporis Identity", tag: "Luxury", img: "/images/Project2.jpg", desc: "Craftsmanship for luxury watchmakers." },
        { id: 3, title: "Vortex Interactive", tag: "Immersive", img: "/images/Project3.jpg", desc: "Cutting edge web experiences." },
        { id: 4, title: "Elysian Group Global", tag: "Corporate", img: "/images/Project4.jpg", desc: "Award winning corporate identity." },
        // নতুন ৫টি ইমেজ এখানে এড করা হয়েছে
        { id: 5, title: "Urban Living Space", tag: "Architecture", img: "/images/tiles/tile_005.jpg", desc: "Modern residential interior design." },
        { id: 6, title: "Stone Craft Villa", tag: "Rustic", img: "/images/tiles/tile_006.jpg", desc: "Natural stone finish architectural project." },
        { id: 7, title: "Minimalist Haven", tag: "Interior", img: "/images/tiles/tile_007.jpg", desc: "Calm and soothing environment design." },
        { id: 8, title: "Artistic Moroccan Hub", tag: "Decorative", img: "/images/tiles/tile_008.jpg", desc: "Vibrant patterns and creative charm." },
        { id: 9, title: "Modern White Studio", tag: "Clean", img: "/images/tiles/tile_009.jpg", desc: "High-gloss porcelain aesthetic." },
    ];

    return (
        <section className="py-16 lg:py-32 bg-white overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="mb-12 text-center md:text-left">
                    <span className="text-[#7D2237] font-bold uppercase tracking-[0.2em] block mb-2 text-xs">Curated Works</span>
                    <h2 className="text-3xl lg:text-5xl font-bold text-zinc-900">Selected Case Studies</h2>
                </div>

                <Swiper
                    effect={'coverflow'}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={'auto'}
                    loop={true}
                    coverflowEffect={{
                        rotate: 30,
                        stretch: 0,
                        depth: 100,
                        modifier: 1,
                        slideShadows: true,
                    }}
                    autoplay={{ delay: 3000, disableOnInteraction: false }}
                    pagination={{ 
                        clickable: true,
                        dynamicBullets: true // অনেক ইমেজ থাকলে ডাইনামিক ডটস দেখতে ভালো লাগে
                    }}
                    modules={[EffectCoverflow, Pagination, Autoplay]}
                    className="w-full !pb-14"
                >
                    {projects.map((project) => (
                        <SwiperSlide key={project.id} className="!w-[300px] sm:!w-[500px] !h-[400px]">
                            <div className="relative w-full h-full rounded-2xl overflow-hidden group shadow-2xl">
                                <Image 
                                    src={project.img} 
                                    alt={project.title} 
                                    fill 
                                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                                {/* Content Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent p-8 flex flex-col justify-end">
                                    <span className="text-[#7D2237] text-xs font-bold uppercase tracking-widest mb-2">
                                        {project.tag}
                                    </span>
                                    <h4 className="text-white text-2xl font-bold mb-2">
                                        {project.title}
                                    </h4>
                                    <p className="text-white/70 text-sm opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                                        {project.desc}
                                    </p>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default ProtfolioTiles;