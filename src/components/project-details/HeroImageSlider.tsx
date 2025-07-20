import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import Image from "next/image";
import { localImages } from "@/utils/imageProvider";
import { ChevronLeft, ChevronRight } from "lucide-react";

const HeroImageSlider = () => {
  return (
    <div>
      <Swiper
        pagination={true}
        navigation={{
          nextEl: '.custom-next',
          prevEl: '.custom-prev',
        }}
        speed={1000}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false, 
          pauseOnMouseEnter: true, 
        }}
        modules={[Pagination,Navigation,Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="h-[500px]">
            <Image
              className="w-full h-full"
              src={localImages.OurProjects}
              alt="projects-image"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-[500px]">
            <Image
              className="w-full h-full"
              src={localImages.OurProjects}
              alt="projects-image"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-[500px]">
            <Image
              className="w-full h-full"
              src={localImages.OurProjects}
              alt="projects-image"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-[500px]">
            <Image
              className="w-full h-full"
              src={localImages.OurProjects}
              alt="projects-image"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-[500px]">
            <Image
              className="w-full h-full"
              src={localImages.OurProjects}
              alt="projects-image"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-[500px]">
            <Image
              className="w-full h-full"
              src={localImages.OurProjects}
              alt="projects-image"
            />
          </div>
        </SwiperSlide>

        <div>
          <button className="custom-prev cursor-pointer absolute left-20 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/80 p-1 text-black/80">
            <ChevronLeft size={20} />
          </button>
          <button className="custom-next cursor-pointer absolute right-20 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/80 p-1 text-black/80">
            <ChevronRight size={20} />
          </button>
        </div>
      </Swiper>
    </div>
  );
};

export default HeroImageSlider;
