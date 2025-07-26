"use client";

import Image from "next/image";
import Container from "../shared/Container";
import { useState } from "react";
import { localImages } from "@/utils/imageProvider";

const OurJourney = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const slideArray = [
    {
      image: localImages.OurProjects,
      year: 2025,
      month: "April",
      title: "Royal Approved",
      description:
        "Through sheer perseverance and demonstrated excellence, the company went on to work for the royalty of Oman, Bahrain, Brunei, Qatar, and the president of Tajikistan in the next few years.",
    },
    {
      image: localImages.Featured2,
      year: 2024,
      month: "June",
      title: "Royal Approved",
      description:
        "Through sheer perseverance and demonstrated excellence, the company went on to work for the royalty of Oman, Bahrain, Brunei, Qatar, and the president of Tajikistan in the next few years.",
    },
    {
      image: localImages.CoverFlowImage,
      year: 2023,
      month: "May",
      title: "Royal Approved",
      description:
        "Through sheer perseverance and demonstrated excellence, the company went on to work for the royalty of Oman, Bahrain, Brunei, Qatar, and the president of Tajikistan in the next few years.",
    },
    {
      image: localImages.Investment1,
      year: 2026,
      month: "January",
      title: "Royal Approved",
      description:
        "Through sheer perseverance and demonstrated excellence, the company went on to work for the royalty of Oman, Bahrain, Brunei, Qatar, and the president of Tajikistan in the next few years.",
    },
  ];

  const handleMouseEnter = (index : number) => {
    setActiveSlide(index);
  };

  return (
    <div className="py-24">
      <Container>
        <div>
          <h3 className="text-3xl  pb-4">Our Journey</h3>
          <h2 className="text-4xl text-primaryBlack/80 font-semibold pb-6">
            A Journey Through the Times
          </h2>
        </div>

        <div className="flex h-[550px] relative pt-8 gap-4">
          {slideArray.map((slide, index) => (
            <div
              onMouseEnter={() => handleMouseEnter(index)}
              className={`rounded-xl overflow-hidden transition-all duration-500 ease-in-out ${
                activeSlide === index ? "flex-[3] " : "flex-[1] "
              }`}
              key={index}
            >
              <div className="relative h-[550px]">
                <Image
                  className={`w-full h-full object-cover transition-all duration-500 ${
                    activeSlide === index ? "opacity-100  " : "opacity-40  "
                  }`}
                  src={slide.image}
                  alt="slide-image"
                />
                <div
                  className={`absolute  top-1/2 text-white -translate-y-1/2  `}
                >
                  <div
                    className={`relative overflow-hidden transition-all  duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${
                      activeSlide === index ? "h-40" : "h-20"
                    }`}
                  >
                    {/* Year (always present but animated) */}

                    <div>
                      <h3
                        className={`absolute text-4xl  font-semibold text-primaryBlack left-1/2 -translate-x-1/2  transition-all duration-500 ${
                          activeSlide === index
                            ? "opacity-0 -translate-y-6"
                            : "opacity-100 translate-y-0"
                        }`}
                      >
                        {slide.year}
                      </h3>
                    </div>
                    {/* Details (only shown when active) */}
                    <div
                      className={`pt-4 ml-14 transition-all duration-500 ${
                        activeSlide === index
                          ? "opacity-100 delay-100 translate-y-0"
                          : "opacity-0 translate-y-6"
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <h3 className="text-4xl font-medium">
                          {slide.month} -
                        </h3>
                        <h4>{slide.title}</h4>
                      </div>
                      <p className="  pt-6 w-8/12">{slide.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default OurJourney;
