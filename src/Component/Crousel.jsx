import React from 'react'
import a from "../assets/a.png";
import b from "../assets/b.png";
import c from "../assets/c.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";

const Crousel = () => {
  return (
    <div>
      <div className="text-center py-12 text-[#253E52] text-2xl font-[poppins] font-semibold tracking-wide">
        {" "}
        Supported By{" "}
      </div>

      <div className="flex justify-between items-center sm:px-20 px-10 py-12 bg-[#F7F7F799] md:gap-3.5">
      <Swiper
          modules={[Autoplay, Pagination]} 
          spaceBetween={0} 
          autoplay={{ delay: 2000, disableOnInteraction: false }} // Auto play slides every 3 seconds
          loop={true} 
          className="mx-5"
          breakpoints={{
            // when window width is >= 640px
            300: {
              slidesPerView: 2, // Show 1 slide for mobile devices
              pagination: { clickable: true },
            },
            // when window width is >= 768px
            640: {
              slidesPerView: 3, // Show 2 slides for tablets
            },
            770: {
              slidesPerView: 4, // Show 2 slides for tablets
            },
           
          }}
        >
          <SwiperSlide>
            <img src={a} className="lg:w-60 md:w-48 sm:w-44 w-36" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={b} className="xl:w-60 lg:w-40  w-36" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={c} className="xl:w-60 lg:w-40  w-36" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={a} className="xl:w-60 lg:w-40  w-36" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={b} className="xl:w-60 lg:w-40  w-36" />
          </SwiperSlide>
        <SwiperSlide>
            <img src={c} className="xl:w-60 lg:w-40  w-36" />
          </SwiperSlide>
                    
        </Swiper>
      
        
      </div>
    </div>
  )
}

export default Crousel

