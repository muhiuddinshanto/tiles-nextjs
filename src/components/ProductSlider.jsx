"use client"; // Swiper

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import ProductCard from "./ProductCard";


import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const ProductSlider = ({ products }) => {
    return (
        <Swiper
            spaceBetween={30}
            slidesPerView={1}
            autoplay={{
                delay: 3000,
                disableOnInteraction: false,
            }}
            pagination={{ clickable: true }}
            navigation={true}
            breakpoints={{
                640: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
                1280: { slidesPerView: 4 },
            }}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper !pb-12" 
        >
            {products.map((product, index) => (
                <SwiperSlide key={index}>
                    <ProductCard product={product} />
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default ProductSlider;