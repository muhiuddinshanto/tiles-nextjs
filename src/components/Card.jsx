"use client";


import Image from "next/image";
import Link from "next/link";

const Card = ({ data }) => {
    return (
        <div className="border rounded-xl shadow-md hover:shadow-xl transition overflow-hidden">

            {/* Image */}
            <div className="relative w-full aspect-square">

                <Image
                    src={data.image}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    alt={data.title}
                    className="object-cover"
                />

                {/* Category badge */}
                <span className="absolute right-2 top-2 text-xs px-2 py-1 rounded-full bg-green-500 text-white">
                    {data.category}
                </span>

            </div>

            {/* Content */}
            <div className="p-4">

                <h2 className="text-lg font-bold mb-1">
                    {data.title}
                </h2>

                <p className="text-sm text-gray-500 mb-2 line-clamp-2">
                    {data.shortDescription}
                </p>

                <p className="text-gray-700 font-medium mb-3">
                    ${data.price}
                </p>

                <Link href={`/all-tiles/${data.id}`}>
                    <button className="btn btn-primary btn-sm w-full">
                        View Details
                    </button>
                </Link>

            </div>

        </div>
    );
};

export default Card;