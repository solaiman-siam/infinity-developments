"use client"
import React from "react";
import Container from "../shared/Container";
import { MoveRight } from "lucide-react";
import Image from "next/image";
import { localImages } from "@/utils/imageProvider";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import AnimateTextWrapper from "../shared/AnimateTextWrapper";

const FeaturedWorks = () => {

  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const cards = gsap.utils.toArray('.card') as HTMLElement[];

    cards.forEach((card, index) => {
      // Set initial state
      gsap.set(card, {
        y: 80,
        opacity: 1,
        filter: 'blur(2px)',
        scale: 0.7
      });

      // Create smooth animation with parallax effect
      const animation = gsap.to(card, {
        y: 0,
        opacity: 1,
        filter: 'blur(0px)',
        duration: 2,
        scale: 1,
        ease: 'expo.out',
        delay: index * 0.1, // Subtle stagger
      });

      // Scroll trigger with custom easing
      ScrollTrigger.create({
        trigger: card,
        animation: animation,
        start: 'top 60%',
        toggleActions: 'play none none none'
      });

    });

    return () => ScrollTrigger.getAll().forEach(t => t.kill());
  }, { scope: containerRef });



  return (
    <div ref={containerRef} className="bg-white pt-52 py-24">
      <Container>
        <div className="flex justify-between items-end">
          <div>
            <AnimateTextWrapper><h3 className="text-5xl font-semibold pb-3">Featured Works</h3></AnimateTextWrapper>
            <AnimateTextWrapper>
              <p className="font-thin w-10/12">
              We are committed to eco-friendly design, creating spaces that
              respect the environment and engage the community. Our sustainable
              practices benefit both nature and the neighborhoods we serve.
            </p>
            </AnimateTextWrapper>
          </div>
          <div>
            <button className="flex font-thin text-nowrap  group px-5 text-white py-3 w-fit cursor-pointer rounded-md bg-primaryBlack items-center gap-3">
              View Our Work{" "}
              <span>
                {" "}
                <MoveRight
                  className="group-hover:translate-x-2 transition-all duration-300"
                  strokeWidth={1.2}
                />{" "}
              </span>
            </button>
          </div>
        </div>

        {/* featured cards */}
        <div className="grid grid-cols-12 pt-8 gap-10">
            <div className=" rounded-xl  group col-span-7">
                <div className="h-[500px] card rounded-xl  overflow-hidden">
                    <Image className="  group-hover:scale-110 transition-all duration-300   w-full h-full" src={localImages.Featured1} alt="featured-image"/>
                </div>
                <div className="flex flex-col pt-5 gap-2">
                    <h4 className="text-primaryBlack/60 font-thin text-sm  uppercase ">Custom Build</h4>
                    <h3 className="text-2xl font-medium">Anantara Zanzibar Resort and Residences</h3>
                    <h4 className="text-primaryBlack/60 font-thin ">Malibu, CA</h4>
                </div>
            </div>
            <div className="h-[450px] group  col-span-5">
                <div className="h-[400px] card rounded-xl  overflow-hidden">
                    <Image className="  group-hover:scale-110 transition-all duration-300   w-full h-full" src={localImages.Featured1} alt="featured-image"/>
                </div>
                <div className="flex flex-col pt-5 gap-2">
                    <h4 className="text-primaryBlack/60 font-thin text-sm  uppercase ">Renovation</h4>
                    <h3 className="text-2xl font-medium">Anantara Zanzibar Resort and Residences</h3>
                    <h4 className="text-primaryBlack/60 font-thin ">Beverly Hills, CA</h4>
                </div>
            </div>
            <div className=" translate-y-0  group col-span-7">
                <div className="h-[500px] card rounded-xl  overflow-hidden">
                    <Image className="  group-hover:scale-110 transition-all duration-300   w-full h-full" src={localImages.Featured3} alt="featured-image"/>
                </div>
                <div className="flex flex-col pt-5 gap-2">
                    <h4 className="text-primaryBlack/60 font-thin text-sm  uppercase ">Renovation</h4>
                    <h3 className="text-2xl font-medium">Anantara Zanzibar Resort and Residences</h3>
                    <h4 className="text-primaryBlack/60 font-thin ">Beverly Hills, CA</h4>
                </div>
            </div>
            <div className="h-[450px]  group -translate-y-24 col-span-5">
                <div className="h-[400px] card rounded-xl  overflow-hidden">
                    <Image className="  group-hover:scale-110 transition-all duration-300   w-full h-full" src={localImages.Featured4} alt="featured-image"/>
                </div>
                <div className="flex flex-col pt-5 gap-2">
                    <h4 className="text-primaryBlack/60 text-sm font-thin uppercase ">Residential</h4>
                    <h3 className="text-2xl font-medium">Anantara Zanzibar Resort and Residences</h3>
                    <h4 className="text-primaryBlack/60 font-thin ">Manhattan Beach, CA</h4>
                </div>
            </div>
            

        </div>
      </Container>
    </div>
  );
};

export default FeaturedWorks;
