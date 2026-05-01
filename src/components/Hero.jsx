import React from 'react';
import { BiArrowFromRight } from 'react-icons/bi';
import { BsArrowBarLeft } from 'react-icons/bs';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa6';

const Hero = () => {
  return (
    <section className="max-w-[1280px] mx-auto px-8 mb-32 pt-32">
      <div className="grid grid-cols-12 gap-gutter items-center">
        {/* Image Side (Left) */}
        <div className="col-span-12 lg:col-span-7 order-2 lg:order-1">
          <div className="relative aspect-[4/5] lg:aspect-auto lg:h-[700px] overflow-hidden rounded-DEFAULT">
            <img 
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2070" 
              alt="Architectural Precision" 
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-primary/10 mix-blend-multiply"></div>
          </div>
        </div>

        {/* Text Side (Right) */}
        <div className="col-span-12 lg:col-span-5 order-1 lg:order-2 pl-0 lg:pl-12 py-12">
          <div className="space-y-8">
            <span className="text-[#7D2237]  font-label-lg uppercase tracking-[0.2em] block">Architecture & Digital</span>
            <h1 className="font-headline-xl text-on-surface">Precision in Every Line.</h1>
            <p className="font-body-lg text-zinc-700 max-w-md">
              Archetype Digital builds technical structures for the modern web. We blend architectural discipline with digital innovation to create premium brand ecosystems.
            </p>
            <div className="pt-8 flex items-center gap-6">
              <button className="bg-[#7D2237] text-white px-8 py-4 font-label-lg rounded-DEFAULT border border-primary hover:bg-transparent hover:text-[#7D2237] transition-all duration-300">
                View Portfolio
              </button>
              <a href="#" className="group flex items-center gap-2 font-label-lg text-on-surface">
                Our Methodology
                <span className="material-symbols-outlined text-[#7D2237] group-hover:translate-x-1 transition-transform"><FaArrowRight/></span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
