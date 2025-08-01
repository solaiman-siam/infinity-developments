"use client";
import { localImages } from "@/utils/imageProvider";
import Image from "next/image";
import { Popover, Segmented } from "antd";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
// gsap.registerPlugin(ScrollTrigger)
const Navbar = () => {
  const pathname = usePathname();


  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const animation =  gsap.to('.navbar', {
      opacity: 1,
      duration: 2,
      background: 'black',
      ease: 'power2.out',
    })

    ScrollTrigger.create({
      animation: animation,
      trigger: '.navbar',
      start: "top -30%",
      toggleActions: 'play none none none'
    })

    return () => { 
      animation.kill(); 
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      }
  }, [])



  const content = (
    <div className="flex flex-col gap-2">
      <Link href={"/contact"}>
        <h4
          className={` ${
            pathname === "/contact" ? "bg-gray-100" : "white"
          } text-primaryBlack text-nowrap px-4 text-sm  py-px `}
        >
          Get in touch
        </h4>
      </Link>
      <Link href={"/career"}>
        <h4
          className={`text-primaryBlack text-nowrap px-4 text-sm  py-px ${
            pathname === "/career" ? "bg-gray-100" : "white"
          }`}
        >
          Career
        </h4>
      </Link>
    </div>
  );

  return (
    <div
      className={`flex  **:text-white backdrop:blur-2xl backdrop-blur-md bg-white/30 ${
        pathname === "/founders-message" ||
        pathname === "/news" ||
        pathname === "/team" ||
        pathname === "/contact" ||
        pathname === "/projects" 

          ? "!bg-primaryBlack"
          : ""
      } top-0 w-full z-50 justify-center navbar  fixed left-0 right-0 py-4 items-center gap-10`}
    >
      <div className="flex items-center gap-2">
        <Link href={"/"}>
          <h4
            className={`${
              pathname === "/"
                ? "border-b border-white "
                : "border-b border-transparent"
            } text-nowrap mx-4 text-sm  py-1.5 `}
          >
            Home
          </h4>
        </Link>
        <Link href={"/projects"}>
          <h4
            className={`${
              pathname === "/projects"
                ? "border-b border-white "
                : "border-b border-transparent"
            } text-nowrap mx-4 text-sm  py-1.5 `}
          >
            Our Projects
          </h4>
        </Link>
        <Link href={"/founders-message"}>
          <h4
            className={`${
              pathname === "/founders-message"
                ? "border-b border-white "
                : "border-b border-transparent"
            } text-nowrap mx-4 text-sm  py-1.5 `}
          >
            Founders Message
          </h4>
        </Link>
      </div>
      <div>
        <Link href={"/"}>
          {" "}
          <Image
            className="w-52"
            src={localImages.InfinityDevelopmentsLogo}
            alt="nav-logo"
          />
        </Link>
      </div>
      <div className="flex items-center gap-2">
        <Link href={"/news"}>
          <h4
            className={`${
              pathname === "/news"
                ? "border-b border-white "
                : "border-b border-transparent"
            } text-nowrap mx-4 text-sm  py-1.5 `}
          >
            News
          </h4>
        </Link>
        <Link href={"/about"}>
          <h4
            className={`${
              pathname === "/about"
                ? "border-b border-white "
                : "border-b border-transparent"
            } text-nowrap mx-4 text-sm  py-1.5 `}
          >
            Abouts Us
          </h4>
        </Link>
        <Link href={"/team"}>
          <h4
            className={`${
              pathname === "/team"
                ? "border-b border-white "
                : "border-b border-transparent"
            } text-nowrap mx-4 text-sm  py-1.5 `}
          >
            Our Team
          </h4>
        </Link>
        <div>
          <Popover content={content} trigger="hover">
            <button
              className={`${
                pathname === "/contact" || pathname === "/career"
                  ? "border-b border-white "
                  : "border-b border-transparent"
              } text-nowrap cursor-pointer mx-4 text-sm  py-1.5 `}
            >
              Contact Us
            </button>
          </Popover>
        </div>
      </div>
      <div className="custom-segments">
        <Segmented<string>
          options={["Eng", "العربية"]}
          onChange={(value) => {
            console.log(value); // string
          }}
        />
      </div>
    </div>
  );
};

export default Navbar;
