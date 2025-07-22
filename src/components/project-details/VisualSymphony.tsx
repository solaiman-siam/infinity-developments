"use client";
import Image from "next/image";
import Container from "../shared/Container";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { localImages } from "@/utils/imageProvider";
import { ChevronLeft, ChevronRight } from "lucide-react";

const VisualSymphony = () => {
  return (
    <div className="py-24">
      <Container>
        <div>
          <h3 className="text-5xl font-semibold text-primaryBlack pb-20 text-center">
            A Visual Symphony
          </h3>
          <div className="">
            <Swiper
              effect={"coverflow"}
              grabCursor={true}
              centeredSlides={true}
              slidesPerView={3} // Dynamic slide width
              initialSlide={1} // Start with the middle slide
              navigation={{
                nextEl: ".custom-next",
                prevEl: ".custom-prev",
              }}
              coverflowEffect={{
                rotate: 0, 
                stretch: -40, 
                depth: 120, // Depth offset (higher = more 3D effect)
                modifier: 2, // Scale effect multiplier
                slideShadows: false, // Disable shadows for cleaner look
              }}
              pagination={{ clickable: true }}
              modules={[EffectCoverflow, Pagination, Navigation]}
              className="coverflow-swiper"
            >
              <SwiperSlide>
                <div className="h-80">
                  <Image
                    className="w-full h-full"
                    src={localImages.CoverFlowImage}
                    alt="coverflow-image"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="h-80">
                  <Image
                    className="w-full h-full"
                    src={localImages.CoverFlowImage}
                    alt="coverflow-image"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="h-80">
                  <Image
                    className="w-full h-full"
                    src={localImages.CoverFlowImage}
                    alt="coverflow-image"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="h-80">
                  <Image
                    className="w-full h-full"
                    src={localImages.CoverFlowImage}
                    alt="coverflow-image"
                  />
                </div>
              </SwiperSlide>
              <div>
                <button className="custom-prev cursor-pointer absolute left-20 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/100 p-1 text-black/80">
                  <ChevronLeft size={20} />
                </button>
                <button className="custom-next cursor-pointer absolute right-20 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/100 p-1 text-black/80">
                  <ChevronRight size={20} />
                </button>
              </div>
            </Swiper>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default VisualSymphony;
