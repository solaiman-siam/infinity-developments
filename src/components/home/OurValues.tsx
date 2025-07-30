"use client";

import Image from "next/image";
import Container from "../shared/Container";
import { localImages } from "@/utils/imageProvider";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import AnimateTextWrapper from "../shared/AnimateTextWrapper";

const OurValues = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    const images = gsap.utils.toArray(".image") as HTMLElement[];

    images.forEach((image, index) => {
      // Set initial state (off-screen or scaled down)
      gsap.set(image, {
        scale: 0.6,
        opacity: 0.7,
        y: 50,
      });

      // Create individual animation for each image
      const animation = gsap.to(image, {
        scale: 1,
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        delay: index * 0.1, // Stagger delay between animations
      });

      // Create individual ScrollTrigger for each image
      ScrollTrigger.create({
        trigger: image,
        animation: animation,
        start: "top 80%", // When top of image hits 70% of viewport
        toggleActions: "play none none none",
        markers: false, // Remove in production
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div ref={containerRef} className="bg-primaryBlack py-24">
      <Container>
        <div className="flex  mx-auto justify-center items-center flex-col">
          <AnimateTextWrapper>
            <h2 className="text-6xl  pb-3 text-center text-white">
              Our Values Drive Excellence
            </h2>
          </AnimateTextWrapper>
          <AnimateTextWrapper>
            <p className="text-white/70 text-center  font-thin w-6/12">
              Three fundamental values shape every project we undertake. From
              cultural preservation to community building, these principles
              guide our approach to creating meaningful spaces.
            </p>
          </AnimateTextWrapper>
        </div>
        <div className="px-32 pt-20 space-y-10">
          <div className="flex gap-10 justify-start items-start">
            <AnimateTextWrapper>
              <h3 className="text-[8rem] pr-8 h-fit leading-[100px] text-white/80">
                01
              </h3>
            </AnimateTextWrapper>
            <div className="h-[300px] w-5/12">
              <Image
                className="rounded-lg image scale-50 w-full h-full"
                src={localImages.OurValues3}
                alt="values-image"
              />
            </div>
            <div className="flex flex-col gap-2">
              <AnimateTextWrapper>
                <h3 className="text-3xl text-white w-4/12 font-medium pb-4">
                  Cultural Preservation
                </h3>
              </AnimateTextWrapper>
              <AnimateTextWrapper>
                <p className="text-white/70 font-thin ">
                  Where history breathes, Infinity builds with care. In
                  Zanzibars Stone Town, a UNESCO World Heritage Site, weve
                  learned that true progress honors the past. We preserve the
                  soul of a place—its culture, artistry, and rhythm.
                </p>
              </AnimateTextWrapper>
            </div>
          </div>
          <div className="flex gap-10 justify-start items-start">
            <AnimateTextWrapper><h3 className="text-[8rem] pr-8 h-fit leading-[100px] text-white/80">
              02
            </h3></AnimateTextWrapper>
            <div className="flex flex-col gap-2">
              <AnimateTextWrapper><h3 className="text-3xl text-white w-4/12 font-medium pb-4">
                Innovation Forward
              </h3></AnimateTextWrapper>
              <AnimateTextWrapper>
                <p className="text-white/70 font-thin ">
                Innovation serves as Infinitys beating heart—our core. We
                pioneer by introducing a blend of global brands and innovative
                ideas to existing landscapes, empowering local people and their
                economies.
              </p>
              </AnimateTextWrapper>
            </div>
            <div className="h-[300px] w-5/12">
              <Image
                className="rounded-lg image scale-50 w-full h-full"
                src={localImages.OurValues2}
                alt="values-image"
              />
            </div>
          </div>
          <div className="flex gap-10 justify-start items-start">
            <AnimateTextWrapper><h3 className="text-[8rem] pr-8 h-fit leading-[100px] text-white/80">
              03
            </h3></AnimateTextWrapper>
            <div className="h-[300px] w-5/12">
              <Image
                className="rounded-lg image scale-50 w-full h-full"
                src={localImages.OurValues1}
                alt="values-image"
              />
            </div>
            <div className="flex flex-col gap-2">
              <AnimateTextWrapper><h3 className="text-3xl text-white w-4/12 font-medium pb-4">
                Community First
              </h3></AnimateTextWrapper>
             <AnimateTextWrapper> 
              <p className="text-white/70 font-thin ">
                Unity is the foundation of Infinity. We consciously plan,
                design, and build to facilitate experiences that forge a deep
                sense of place. Whether on remote islands or in grand cities,
                our ultimate mission is to ensure thriving communities for all.
              </p></AnimateTextWrapper>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default OurValues;
