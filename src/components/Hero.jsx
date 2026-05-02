"use client";
import Link from 'next/link';
import React from 'react';
import Image from 'next/image'; 
import { FaArrowRight } from 'react-icons/fa6';
import { LuLayers } from 'react-icons/lu'; 

const Hero = () => {
  return (
    <section className="relative max-w-[1440px] mx-auto px-6 sm:px-12 mb-16 lg:mb-32 pt-24 lg:pt-40 overflow-hidden">
      
      {/* Background Decorative Element - টাইলের গ্রিড প্যাটার্ন বোঝাতে */}
      <div className="absolute top-0 right-0 -z-10 opacity-[0.03] pointer-events-none">
        <svg width="400" height="400" viewBox="0 0 100 100">
          <defs>
            <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="black" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100" height="100" fill="url(#grid)" />
        </svg>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
        
        {/* Left Side: Content */}
        <div className="order-2 lg:order-1 lg:col-span-6 flex flex-col justify-center text-center lg:text-left">
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#7D2237]/5 border border-[#7D2237]/10">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#7D2237] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#7D2237]"></span>
              </span>
              <span className="text-[#7D2237] text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em]">
                Premium Ceramic & Porcelain
              </span>
            </div>
            
            {/* Heading */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-zinc-900 leading-[1.1] tracking-tight">
              Elevate Your <br /> 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7D2237] to-zinc-500">Living Space.</span>
            </h1>
            
            {/* Description */}
            <p className="text-lg sm:text-xl text-zinc-600 max-w-lg mx-auto lg:mx-0 leading-relaxed">
              Explore our curated collection of architectural tiles. Where digital precision meets timeless craftsmanship to create extraordinary surfaces.
            </p>
            
            {/* Buttons & Trust Badge */}
            <div className="pt-6 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-5">
              <Link href={'/all-tiles'} className="w-full sm:w-auto">
                <button className="w-full group bg-[#7D2237] text-white px-10 py-5 font-bold rounded-full flex items-center justify-center gap-3 hover:bg-zinc-900 transition-all duration-500 shadow-lg shadow-[#7D2237]/20">
                  Explore Collection
                  <FaArrowRight className="group-hover:translate-x-2 transition-transform" />
                </button>
              </Link>
              
              <div className="flex items-center gap-4 text-sm font-medium text-zinc-500">
                <div className="flex -space-x-3">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-zinc-200 flex items-center justify-center overflow-hidden relative">
                      <Image 
                        src={`https://i.pravatar.cc/100?img=${i+10}`} 
                        alt="User" 
                        fill
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>
                <span>Trusted by 500+ Architects</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Image with Floating Card */}
        <div className="order-1 lg:order-2 lg:col-span-6 relative">
          <div className="relative aspect-[4/5] sm:aspect-square lg:aspect-[4/5] overflow-hidden rounded-3xl shadow-2xl group">
            <Image 
              src="/images/heroImage.jpg" 
              alt="Premium Tile Texture" 
              fill
              priority
              className="object-cover scale-105 group-hover:scale-100 transition-all duration-1000"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
            
            {/* Floating Info Card */}
            <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md p-6 rounded-2xl border border-white/20 shadow-xl hidden sm:block translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-[#7D2237] font-bold text-sm uppercase tracking-tighter">Featured Finish</p>
                  <p className="text-zinc-900 font-bold text-xl">Calacatta Borghini</p>
                </div>
                <div className="bg-[#7D2237] text-white p-3 rounded-xl">
                  <LuLayers size={24} />
                </div>
              </div>
            </div>
          </div>
          
          {/* Decorative Back Blurs */}
          <div className="absolute -top-6 -right-6 w-32 h-32 bg-[#7D2237]/5 rounded-full blur-3xl -z-10"></div>
          <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-zinc-100 rounded-full blur-3xl -z-10"></div>
        </div>

      </div>
    </section>
  );
};

export default Hero;