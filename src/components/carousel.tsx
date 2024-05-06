'use client'
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/swiper-bundle.min.css';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';


// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';


export default function Carousel() {
    return (
        <Swiper
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={'auto'}
            coverflowEffect={{
                rotate: 70,
                stretch: 10,
                depth: 10,
                modifier: 1,
                slideShadows: true,
            }}
            pagination={false}
            modules={[EffectCoverflow, Pagination]}
            className="mySwiper"
        >
            <SwiperSlide>
                <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
            </SwiperSlide>
            <SwiperSlide>
                <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
            </SwiperSlide>
            <SwiperSlide>
                <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
            </SwiperSlide>
            <SwiperSlide>
                <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
            </SwiperSlide>
            <SwiperSlide>
                <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
            </SwiperSlide>
            <SwiperSlide>
                <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
            </SwiperSlide>
            <SwiperSlide>
                <img src="https://swiperjs.com/demos/images/nature-7.jpg" />
            </SwiperSlide>
            <SwiperSlide>
                <img src="https://swiperjs.com/demos/images/nature-8.jpg" />
            </SwiperSlide>
            <SwiperSlide>
                <img src="https://swiperjs.com/demos/images/nature-9.jpg" />
            </SwiperSlide>
        </Swiper>

    )
}
