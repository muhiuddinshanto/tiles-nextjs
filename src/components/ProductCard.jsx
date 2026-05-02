"use client";
import Link from 'next/link';
import Image from 'next/image'; // Next.js Image ব্যবহার করা ভালো
import { BiArrowToRight } from 'react-icons/bi';
import { HiOutlineCube } from 'react-icons/hi';

const ProductCard = ({ product }) => {
    const { image, title, shortDescription, id, price, category, inStock, material } = product;

    return (
        <div className="group bg-white border border-zinc-200 rounded-2xl overflow-hidden p-4 hover:shadow-2xl hover:border-[#7D2237]/20 transition-all duration-500 h-full flex flex-col relative">
            
            {/* Stock Badge */}
            {!inStock && (
                <div className="absolute top-6 right-6 z-10 bg-zinc-800/90 text-white text-[10px] font-bold px-3 py-1 rounded-full backdrop-blur-sm">
                    OUT OF STOCK
                </div>
            )}

            {/* Image Container */}
            <div className="aspect-square overflow-hidden rounded-xl mb-5 bg-zinc-100 relative">
                <img
                    src={image}
                    alt={title}
                    className={`w-full h-full object-cover transition-transform duration-700 ${inStock ? 'group-hover:scale-110' : 'grayscale'}`}
                />
                
                {/* Category Tag */}
                <div className="absolute bottom-3 left-3 bg-white/80 backdrop-blur-md text-[#7D2237] text-[10px] font-bold px-2 py-1 rounded shadow-sm uppercase tracking-wider">
                    {category}
                </div>
            </div>

            {/* Content */}
            <div className="flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-zinc-800 group-hover:text-[#7D2237] transition-colors line-clamp-1">
                        {title}
                    </h3>
                    <span className="text-lg font-bold text-[#7D2237]">${price}</span>
                </div>

                <div className="flex items-center gap-1 text-zinc-400 text-xs mb-3">
                    <HiOutlineCube />
                    <span>{material} • {product.dimensions}</span>
                </div>

                <p className="text-sm text-gray-500 mb-6 line-clamp-2 flex-grow leading-relaxed">
                    {shortDescription}
                </p>

                {/* Action Button */}
                <Link href={`/all-tiles/${id}`} className="w-full">
                    <button 
                        disabled={!inStock}
                        className={`btn btn-md w-full flex items-center justify-center gap-2 group/btn transition-all duration-300 rounded-xl font-bold
                        ${inStock 
                            ? 'bg-[#7D2237] hover:bg-zinc-900 text-white border-none shadow-lg shadow-[#7D2237]/20' 
                            : 'bg-zinc-200 text-zinc-500 border-none cursor-not-allowed'}`}
                    >
                        {inStock ? 'View Details' : 'Unavailable'}
                        {inStock && <BiArrowToRight className="text-xl group-hover/btn:translate-x-1 transition-transform" />}
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default ProductCard;