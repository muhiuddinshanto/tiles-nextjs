"use client";

import FastMarquee from "react-fast-marquee";

const MarqueeSection = () => {
  return (
    <div className="bg-white border-y border-[#7D2237]/10 shadow-sm">
      
      <FastMarquee pauseOnHover speed={45} gradient={false}>
        
        <div className="flex items-center gap-10 py-3 text-sm md:text-base font-medium tracking-wide">

          <span className="text-[#7D2237] flex items-center gap-2">
            🆕 <span>New Arrivals: Ceramic Blue Tile</span>
          </span>

          <span className="text-gray-300">•</span>

          <span className="text-gray-700 flex items-center gap-2">
            ⭐ <span>Weekly Feature: Modern Geometric Patterns</span>
          </span>

          <span className="text-gray-300">•</span>

          <span className="text-[#7D2237]/80 flex items-center gap-2">
            👥 <span>Join Our Community</span>
          </span>

          <span className="text-gray-300">•</span>

          <span className="text-green-600 flex items-center gap-2">
            ✨ <span>Premium Tile Collection Available Now</span>
          </span>

        </div>

      </FastMarquee>

    </div>
  );
};

export default MarqueeSection;