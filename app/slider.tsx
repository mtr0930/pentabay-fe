'use client'
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from "next/image";
import { motion } from "framer-motion"

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import required modules
import { EffectFade, Autoplay, Pagination } from 'swiper/modules';

export default function Slider() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        effect={'fade'}
        pagination={{
          clickable: true,
        }}
        modules={[EffectFade, Pagination]}
        className="mySwiper  max-w-7xl"
      >
        <SwiperSlide className='relative'>
        <Image alt="Skyscrapers" src="/lng-boat.jpeg" width={1024} height={1024} quality={100}/>
        <div className="absolute overlay-bg  overlay-text text-center">
          <div className='overlay-text fade-in'>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white drop-shadow-md">
          Penta BAY
        </h1>
        <p className="mt-4 text-lg md:text-xl lg:text-2xl text-white drop-shadow-md">
          NAVIGATING LNG INNOVATION
        </p>
        </div>
      </div>
        </SwiperSlide>
        <SwiperSlide className='relative'>
        <Image alt="Skyscrapers" src="/lng-boat.jpeg" width={1024} height={1024} quality={100}/>
        <div className="absolute overlay-bg  overlay-text text-center">
          <div className='overlay-text fade-in'>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white drop-shadow-md">
          Penta BAY
        </h1>
        <p className="mt-4 text-lg md:text-xl lg:text-2xl text-white drop-shadow-md">
          NAVIGATING LNG INNOVATION
        </p>
        </div>
      </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
