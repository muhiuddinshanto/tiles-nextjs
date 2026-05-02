"use client";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { LuZap, LuStar, LuGem, LuFlame } from 'react-icons/lu';

// Swiper Styles
import 'swiper/css';

const MarqueeSection = () => {
  const announcements = [
    { icon: <LuZap className="text-yellow-500" />, text: "New Arrivals: Urban Living Stone Finish", color: "text-[#7D2237]" },
    { icon: <LuStar className="text-orange-500" />, text: "Featured: Moroccan Hub Patterns", color: "text-zinc-700" },
    { icon: <LuGem className="text-blue-500" />, text: "Premium: Modern White Studio Porcelain", color: "text-[#7D2237]/80" },
    { icon: <LuFlame className="text-red-500" />, text: "Trending: Minimalist Haven Collection", color: "text-zinc-800" },
  ];

  return (
    <div className="bg-zinc-50 border-y border-[#7D2237]/5 py-4 shadow-inner">
      <Swiper
        modules={[Autoplay]}
        spaceBetween={50}
        slidesPerView={'auto'}
        loop={true}
        speed={5000} // মসৃণ গতির জন্য
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        allowTouchMove={false} // ড্র্যাগিং বন্ধ রাখতে চাইলে (মারকুই লুকের জন্য)
        className="marquee-swiper"
      >
        {[...announcements, ...announcements].map((item, index) => (
          <SwiperSlide key={index} className="!w-auto">
            <div className="flex items-center gap-3 px-6">
              <span className="text-lg">{item.icon}</span>
              <span className={`${item.color} text-sm md:text-base font-bold uppercase tracking-wider whitespace-nowrap`}>
                {item.text}
              </span>
              <span className="ml-10 text-zinc-300 font-light">|</span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default MarqueeSection;