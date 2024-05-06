'use client'
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from "next/image";

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
        <SwiperSlide>
        <Image alt="Skyscrapers" src="/skyscraper.jpg" width={1440} height={800}/>
        </SwiperSlide>
        <SwiperSlide>
        <Image alt="Skyscrapers" src="/skyscraper.jpg" width={1440} height={800}/>
        </SwiperSlide>
        <SwiperSlide>
        <Image alt="Skyscrapers" src="/skyscraper.jpg" width={1440} height={800}/>
        </SwiperSlide>
        <SwiperSlide>
        <Image alt="Skyscrapers" src="/skyscraper.jpg" width={1440} height={800}/>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
