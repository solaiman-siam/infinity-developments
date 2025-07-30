"use client";
import { Segmented } from "antd";
import Container from "../shared/Container";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation, Autoplay } from "swiper/modules";
import { localImages } from "@/utils/imageProvider";
import { useState } from "react";

const FloorPlan = () => {

    


    const room1 = [
        {
            id: 1,
            title: '1 Bedroom Apartment  (Type D)',
            unit: '1 BEDROOM + 1 POWDER ROOM + BALCONY',
            suite: '494.49 SQ.FT',
            balcony: '90.22 SQ.FT',
            total: '580.22 SQ.FT'
        },
        {
            id: 2,
            title: '1 Bedroom Apartment  (Type D)',
            unit: '1 BEDROOM + 1 POWDER ROOM + BALCONY',
            suite: '494.49 SQ.FT',
            balcony: '90.22 SQ.FT',
            total: '580.22 SQ.FT'
        },
        {
            id: 3,
            title: '1 Bedroom Apartment  (Type D)',
            unit: '1 BEDROOM + 1 POWDER ROOM + BALCONY',
            suite: '494.49 SQ.FT',
            balcony: '90.22 SQ.FT',
            total: '580.22 SQ.FT'
        }
    ]

    const room2 = [
        {
            id: 1,
            title: '2 Bedroom Apartment  (Type D)',
            unit: '2 BEDROOM + 1 POWDER ROOM + BALCONY',
            suite: '494.49 SQ.FT',
            balcony: '90.22 SQ.FT',
            total: '580.22 SQ.FT'
        },
        {
            id: 2,
            title: '2 Bedroom Apartment  (Type D)',
            unit: '2 BEDROOM + 1 POWDER ROOM + BALCONY',
            suite: '494.49 SQ.FT',
            balcony: '90.22 SQ.FT',
            total: '580.22 SQ.FT'
        },
        {
            id: 3,
            title: '2 Bedroom Apartment  (Type D)',
            unit: '2 BEDROOM + 1 POWDER ROOM + BALCONY',
            suite: '494.49 SQ.FT',
            balcony: '90.22 SQ.FT',
            total: '580.22 SQ.FT'
        }]
    
    const room3 = [
        {
            id: 1,
            title: '3 Bedroom Apartment  (Type D)',
            unit: '3 BEDROOM + 1 POWDER ROOM + BALCONY',
            suite: '494.49 SQ.FT',
            balcony: '90.22 SQ.FT',
            total: '580.22 SQ.FT'
        },
        {
            id: 2,
            title: '3 Bedroom Apartment  (Type D)',
            unit: '3 BEDROOM + 1 POWDER ROOM + BALCONY',
            suite: '494.49 SQ.FT',
            balcony: '90.22 SQ.FT',
            total: '580.22 SQ.FT'
        },
        {
            id: 3,
            title: '3 Bedroom Apartment  (Type D)',
            unit: '3 BEDROOM + 1 POWDER ROOM + BALCONY',
            suite: '494.49 SQ.FT',
            balcony: '90.22 SQ.FT',
            total: '580.22 SQ.FT'
        }
    ]

    const [floorPlan, setFloorPlan] = useState(room1)

    const handleFloorPlanChange = (value : string) => {
        if(value === '1 Bed Room') {
            setFloorPlan(room1)
        }
        if(value === '2 Bed Room') {
            setFloorPlan(room2)
        }
        if(value === '3 Bed Room') {
            setFloorPlan(room3)
        }
    }


  return (
    <div className="py-24 bg-[#B8B8B833]">
      <Container>
        <div>
          <h3 className="text-primaryBlack pb-10 text-5xl font-semibold text-center">
            Floor Plan
          </h3>
          <div className="floor-plan-segmented">
            <Segmented<string>
              options={["1 Bed Room", "2 Bed Room", "3 Bed Room"]}
              onChange={handleFloorPlanChange}
            />
          </div>
          <div className="pt-10 px-24">
            <Swiper
              pagination={true}
              navigation={{
                nextEl: ".custom-next",
                prevEl: ".custom-prev",
              }}
              speed={800}
              loop={true}
            //   autoplay={{
            //     delay: 3000,
            //     disableOnInteraction: false,
            //     pauseOnMouseEnter: true,
            //   }}
              modules={[Navigation, Autoplay]}
              className="mySwiper"
            >
              {
                floorPlan.map((plan) => (
                    <SwiperSlide key={plan.id}>
                  <div className="flex gap-4 py-10 px-24">
                    <div className="flex flex-1 flex-col gap-10">
                        <h3 className="text-2xl font-medium">{plan.title} </h3>
                        <div className="flex flex-col gap-3">
                            <h4 className="text-primaryBlack/70"><span className="font-medium text-primaryBlack">Unit:</span> {plan.unit}</h4>
                            <h4 className="text-primaryBlack/70"><span className="font-medium text-primaryBlack">SUITE:</span> {plan.suite}</h4>
                            <h4 className="text-primaryBlack/70"><span className="font-medium text-primaryBlack">BALCONY:</span> {plan.balcony}</h4>
                            <h4 className="text-primaryBlack/70"><span className="font-medium text-primaryBlack">TOTAL:</span>{plan.total}</h4>
                        </div>
                    </div>
                   <div className="flex-1 h-[400px]">
                     <Image
                    className="w-full h-full"
                    src={localImages.FloorplanDemo}
                    alt="projects-image"
                  />
                   </div>
                  </div>
              </SwiperSlide>
                ))
              }
              <SwiperSlide>
                  <div className="flex gap-4 py-10 px-24">
                    <div className="flex flex-1 flex-col gap-10">
                        <h3 className="text-2xl font-medium">  1 Bedroom Apartment (Type D) </h3>
                        <div className="flex flex-col gap-3">
                            <h4 className="text-primaryBlack/70"><span className="font-medium text-primaryBlack">Unit:</span> 1 BEDROOM + 1 POWDER ROOM + BALCONY</h4>
                            <h4 className="text-primaryBlack/70"><span className="font-medium text-primaryBlack">SUITE:</span> 494.49 SQ.FT</h4>
                            <h4 className="text-primaryBlack/70"><span className="font-medium text-primaryBlack">BALCONY:</span> 90.22 SQ.FT</h4>
                            <h4 className="text-primaryBlack/70"><span className="font-medium text-primaryBlack">TOTAL:</span> 90.22 SQ.FT</h4>
                        </div>
                    </div>
                   <div className="flex-1 h-[400px]">
                     <Image
                    className="w-full h-full"
                    src={localImages.FloorplanDemo}
                    alt="projects-image"
                  />
                   </div>
                  </div>
              </SwiperSlide>
              <SwiperSlide>
                  <div className="flex gap-4 py-10 px-24">
                    <div className="flex flex-1 flex-col gap-10">
                        <h3 className="text-2xl font-medium">  1 Bedroom Apartment (Type D) </h3>
                        <div className="flex flex-col gap-3">
                            <h4 className="text-primaryBlack/70"><span className="font-medium text-primaryBlack">Unit:</span> 1 BEDROOM + 1 POWDER ROOM + BALCONY</h4>
                            <h4 className="text-primaryBlack/70"><span className="font-medium text-primaryBlack">SUITE:</span> 494.49 SQ.FT</h4>
                            <h4 className="text-primaryBlack/70"><span className="font-medium text-primaryBlack">BALCONY:</span> 90.22 SQ.FT</h4>
                            <h4 className="text-primaryBlack/70"><span className="font-medium text-primaryBlack">TOTAL:</span> 90.22 SQ.FT</h4>
                        </div>
                    </div>
                   <div className="flex-1 h-[400px]">
                     <Image
                    className="w-full h-full"
                    src={localImages.FloorplanDemo}
                    alt="projects-image"
                  />
                   </div>
                  </div>
              </SwiperSlide>
              <SwiperSlide>
                  <div className="flex gap-4 py-10 px-24">
                    <div className="flex flex-1 flex-col gap-10">
                        <h3 className="text-2xl font-medium">  1 Bedroom Apartment (Type D) </h3>
                        <div className="flex flex-col gap-3">
                            <h4 className="text-primaryBlack/70"><span className="font-medium text-primaryBlack">Unit:</span> 1 BEDROOM + 1 POWDER ROOM + BALCONY</h4>
                            <h4 className="text-primaryBlack/70"><span className="font-medium text-primaryBlack">SUITE:</span> 494.49 SQ.FT</h4>
                            <h4 className="text-primaryBlack/70"><span className="font-medium text-primaryBlack">BALCONY:</span> 90.22 SQ.FT</h4>
                            <h4 className="text-primaryBlack/70"><span className="font-medium text-primaryBlack">TOTAL:</span> 90.22 SQ.FT</h4>
                        </div>
                    </div>
                   <div className="flex-1 h-[400px]">
                     <Image
                    className="w-full h-full"
                    src={localImages.FloorplanDemo}
                    alt="projects-image"
                  />
                   </div>
                  </div>
              </SwiperSlide>
             

              <div>
                <button className="custom-prev cursor-pointer absolute left-10 top-1/2 z-10 -translate-y-1/2 rounded-full bg-black/80 p-1 text-white/80">
                  <ChevronLeft size={20} />
                </button>
                <button className="custom-next cursor-pointer absolute right-10 top-1/2 z-10 -translate-y-1/2 rounded-full bg-black/80 p-1 text-white/80">
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

export default FloorPlan;
