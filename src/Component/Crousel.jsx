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

      <div className="flex justify-between items-center px-20 py-12 bg-[#F7F7F799]">
      <Swiper
          modules={[Autoplay, Pagination]} 
          spaceBetween={0} 
          autoplay={{ delay: 2000, disableOnInteraction: false }} // Auto play slides every 3 seconds
          loop={true} 
          slidesPerView={5}
          className="mx-3"
        >
          <SwiperSlide>
            <img src={a} className="w-32" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={b} className="w-32" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={c} className="w-32" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={a} className="w-32" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={b} className="w-32" />
          </SwiperSlide>
        <SwiperSlide>
            <img src={c} className="w-32" />
          </SwiperSlide>
                    
        </Swiper>
      
        
      </div>
    </div>
  )
}

export default Crousel
