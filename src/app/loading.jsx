"use client";
import React from 'react';

const Loading = () => {
    return (
        <div className="min-h-[80vh] w-full flex flex-col items-center justify-center space-y-6">
            
            {/* Architectural Loading Animation */}
            <div className="relative flex items-center justify-center">
                {/* Outer Ring */}
                <div className="w-16 h-16 border-4 border-zinc-100 border-t-[#7D2237] rounded-full animate-spin"></div>
                
                {/* Inner Logo or Dot */}
                <div className="absolute w-2 h-2 bg-[#7D2237] rounded-full animate-pulse"></div>
            </div>

            {/* Loading Text */}
            <div className="text-center">
                <h2 className="text-zinc-900 font-bold uppercase tracking-[0.4em] text-xs mb-2">
                    Archetype
                </h2>
                <div className="flex items-center gap-1">
                    <span className="text-[10px] text-zinc-400 uppercase tracking-widest">
                        Loading Experience
                    </span>
                    <span className="loading loading-dots loading-xs text-zinc-300"></span>
                </div>
            </div>

            {/* Subtle Progress Line (Optional) */}
            <div className="w-48 h-[1px] bg-zinc-100 relative overflow-hidden">
                <div className="absolute inset-0 bg-[#7D2237] w-1/2 animate-[loading-line_1.5s_infinite_ease-in-out]"></div>
            </div>

            <style jsx>{`
                @keyframes loading-line {
                    0% { transform: translateX(-100%); }
                    100% { transform: translateX(200%); }
                }
            `}</style>
        </div>
    );
};

export default Loading;