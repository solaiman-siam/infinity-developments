import Image from "next/image";
import Container from "./Container";
import { localImages } from "@/utils/imageProvider";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="bg-primaryBlack py-24">
      <Container>
        <div className="flex justify-between gap-10 items-start">
          <div className="w-3/12">
            <Image
              className="w-52"
              src={localImages.InfinityDevelopmentsLogo}
              alt="logo"
            />
            <p className="text-white/90 text-[15px] pt-4 font-thin">
              Crafting unparalleled luxury experiences through innovative design
              and meticulous attention to detail, setting new standards in
              hospitality and real estate development.
            </p>
            <div className="flex flex-col gap-1 pt-6">
              <h3 className=" text-lg pb-2 text-white/90">Follow us</h3>
              <div className="flex items-center gap-4">
                <FaInstagram className="size-7 text-white/90 cursor-pointer" />
                <Mail strokeWidth={1.8} className="size-7 text-white/90 cursor-pointer" />
                <FaWhatsapp className="size-7 text-white/90 cursor-pointer" />
              </div>
            </div>
          </div>
          <div className="">
            <h3 className=" text-lg  text-white/90 text-nowrap">Quick Links</h3>
            <div className="flex flex-col **:text-white/80 pt-4 items-start gap-2">
              <Link href={"/projects"}>
                <h4 className="text-[15px] font-thin hover:text-white/100">Projects</h4>
              </Link>
              <Link href={"/about"}>
                <h4 className="text-[15px] font-thin hover:text-white/100">About Us</h4>
              </Link>
              <Link href={"/news"}>
                <h4 className="text-[15px] font-thin hover:text-white/100">News </h4>
              </Link>
              <Link href={"/contact"}>
                <h4 className="text-[15px] font-thin hover:text-white/100">Contact Us</h4>
              </Link>
            </div>
          </div>
          <div className="w-3/12">
            <h3 className=" text-lg  text-white/90 text-nowrap">Contact Us</h3>
            <div className="flex flex-col **:text-white/80 pt-4 items-start gap-3">
              <Link href={"/projects"}>
                <h4 className="text-[15px] font-thin flex gap-2  hover:text-white/100">
                  <MapPin strokeWidth={1.5}
                    className="size-6 text-white/90" /> Office 2008, 20th Floor, Infinity Tower, Dubai, UAE
                </h4>
              </Link>
              <Link href={"/about"}>
                <h4 className="text-[15px] font-thin flex gap-2  hover:text-white/100">
                  <MapPin strokeWidth={1.5}
                    className="size-7 text-white/90" /> Building No 869, Malindi Funguni Street, Stone Town, Zanzibar
                </h4>
              </Link>
              <Link href={"/news"}>
                <h4 className="text-[15px] font-thin flex gap-2  hover:text-white/100">
                  <Phone strokeWidth={1.5}
                    className="size-5 text-white/90" /> +971 4 578 8088
                </h4>
              </Link>
              <Link href={"/contact"}>
                <h4 className="text-[15px] font-thin  flex gap-2  hover:text-white/100">
                  <Mail
                    strokeWidth={1.5}
                    className="size-5 text-white/90"
                  />
                  info@infinitydevelopment.ae
                </h4>
              </Link>
            </div>
          </div>

          <div>
            <h3 className=" text-lg  text-white/90 text-nowrap">Newsletter</h3>
            <p className="text-white/80 pt-3 text-[15px] font-thin w-8/12"  >Stay updated with our latest projects and news</p>
            <div className="pt-4">
                <div className="bg-white py-1 rounded-lg flex items-center w-fit px-2 ">
                    <input className="focus:outline-none text-sm px-2" type="email" name="" id="" />
                    <button className="text-white text-sm cursor-pointer bg-black px-4 py-2 rounded-lg" >Send</button>
                </div>
            </div>
          </div>
        </div>
      </Container>
      <div className="border-[.5px] w-full border-white/5 mt-10">

      </div>
      <h4 className="text-center text-white/60 pt-4 text-sm font-thin">© 2021-2025, infinity development. All Rights Reserved.</h4>
    </div>
  );
};

export default Footer;
