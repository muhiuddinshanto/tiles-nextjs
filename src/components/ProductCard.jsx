import Link from 'next/link';
import { BiArrowToRight } from 'react-icons/bi';

const ProductCard = ({ product }) => {
    const { image, title, shortDescription, id } = product;

    return (
        <div className="group border border-zinc-200 rounded-2xl overflow-hidden p-4 hover:shadow-xl transition-shadow duration-300 h-full flex flex-col">
            {/* Image Container */}
            <div className="aspect-square overflow-hidden rounded-xl mb-5 bg-zinc-100">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
            </div>

            {/* Content */}
            <div className="flex flex-col flex-grow">
                <h3 className="text-xl font-bold mb-2 text-zinc-800">{title}</h3>
                <p className="text-sm text-gray-500 mb-6 line-clamp-2 flex-grow">
                    {shortDescription}
                </p>

                {/* Action Button */}
                <Link href={`/all-tiles/${id}`} className="w-full">
                    <button className="btn btn-md w-full bg-[#7D2237] hover:bg-[#5a1827] text-white border-none flex items-center justify-center gap-2 group/btn">
                        View Details 
                        <BiArrowToRight className="text-xl group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default ProductCard;