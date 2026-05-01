import Link from 'next/link';
import React from 'react';
import { BiHomeAlt, BiArrowBack } from 'react-icons/bi';

const NotFound = () => {
    return (
        <div className="min-h-screen bg-white flex items-center justify-center px-6">
            <div className="max-w-2xl w-full text-center">
                
                {/* 404 Large Text  */}
                <div className="relative inline-block mb-8">
                    <h1 className="text-[120px] sm:text-[180px] font-black text-zinc-100 leading-none select-none">
                        404
                    </h1>
                    <div className="absolute inset-0 flex items-center justify-center">
                        <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900 uppercase tracking-[0.3em]">
                            Lost in Space
                        </h2>
                    </div>
                </div>

                {/* Description */}
                <div className="space-y-6">
                    <div className="w-16 h-1 bg-[#7D2237] mx-auto"></div>
                    <p className="text-zinc-500 max-w-sm mx-auto text-lg leading-relaxed">
                        The architectural structure you are looking for does not exist or has been moved to a new coordinate.
                    </p>
                </div>

                {/* Action Buttons */}
                <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Link href="/">
                        <button className="btn btn-lg bg-[#7D2237] hover:bg-[#5a1827] text-white border-none rounded-none px-10 flex items-center gap-2 uppercase tracking-widest text-xs">
                            <BiHomeAlt className="text-lg" />
                            Return Home
                        </button>
                    </Link>
                    
                    <Link href="/all-tiles">
                        <button className="btn btn-lg btn-ghost border-zinc-200 hover:bg-zinc-50 rounded-none px-10 flex items-center gap-2 uppercase tracking-widest text-xs">
                            <BiArrowBack className="text-lg" />
                            Back to Gallery
                        </button>
                    </Link>
                </div>

                {/* Brand Footer */}
                <div className="mt-20 pt-10 border-t border-zinc-100">
                    <p className="text-[10px] text-zinc-400 uppercase tracking-[0.5em]">
                        Archetype Digital • Precision in Every Line
                    </p>
                </div>
            </div>
        </div>
    );
};

export default NotFound;