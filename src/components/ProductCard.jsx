import { Button } from '@heroui/react';
import Link from 'next/link';
import { BiArrowFromLeft } from 'react-icons/bi';

const ProductCard = ({ product }) => {
    const {image, title, shortDescription} = product;
    console.log(product);
    
    return (
        
            <div className="col-span-12 md:col-span-6 lg:col-span-3 group border border-zinc-400 rounded-2xl overflow-hidden p-4">
                <div className="aspect-square overflow-hidden mb-6 bg-zinc-100">
                    <img
                        src={image}
                        alt={title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 "
                    />
                </div>
                <h3 className="font-headline-md text-xl mb-2">{title}</h3>
                <p className="font-body-md text-gray-500 mb-4">{shortDescription}</p>
                <Link href={`/all-tiles/${product.id}`} className="font-label-lg text-primary flex items-center gap-2 hover:gap-3 transition-all">
                    <button className='btn'>View Details <BiArrowFromLeft/></button>
                    
                </Link>
            </div>
        
    );
};

export default ProductCard;