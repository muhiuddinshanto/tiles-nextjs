import Link from 'next/link';
import React from 'react';
import { FaArrowRight } from 'react-icons/fa6';

const Hero = () => {
  return (
    <section className="max-w-[1280px] mx-auto px-6 sm:px-8 mb-16 lg:mb-32 pt-24 lg:pt-32">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        
        
        <div className="order-2 lg:order-1 lg:col-span-7">
          <div className="relative aspect-square sm:aspect-[4/3] lg:aspect-[4/5] overflow-hidden rounded-2xl shadow-xl">
            <img 
              src="/images/heroImage.jpg" 
              alt="Architectural Precision" 
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-[#7D2237]/10 mix-blend-multiply"></div>
          </div>
        </div>

        
        <div className="order-1 lg:order-2 lg:col-span-5 flex flex-col justify-center text-center lg:text-left">
          <div className="space-y-6 lg:space-y-8">
            <span className="text-[#7D2237] text-xs sm:text-sm font-bold uppercase tracking-[0.2em] block">
              Architecture & Digital
            </span>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-zinc-900 leading-tight">
              Precision in <br className="hidden lg:block" /> Every Line.
            </h1>
            
            <p className="text-base sm:text-lg text-zinc-600 max-w-md mx-auto lg:mx-0">
              Crafting premium ceramic and porcelain structures for the modern world. We blend aesthetic elegance with digital innovation to redefine your space.
            </p>
            
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 sm:gap-6">
              <Link href={'/all-tiles'}><button className="w-full sm:w-auto bg-[#7D2237] text-white px-8 py-4 font-semibold rounded-lg border border-[#7D2237] hover:bg-transparent hover:text-[#7D2237] transition-all duration-300">
                View Products
              </button></Link>
              
              <a href="#" className="group flex items-center gap-2 font-semibold text-zinc-900 hover:text-[#7D2237] transition-colors">
                Our Methodology
                <FaArrowRight className="text-[#7D2237] group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;