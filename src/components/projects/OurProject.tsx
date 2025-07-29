import React from "react";
import Container from "../shared/Container";
import { MapPin, MoveDown } from "lucide-react";
import Image from "next/image";
import { localImages } from "@/utils/imageProvider";
import Link from "next/link";

const OurProject = () => {
  return (
    <div className="py-24">
      <Container>
        <div className="flex justify-center flex-col items-center">
          <h3 className="text-primaryBlack text-center text-5xl pb-4 font-semibold">
            Our Projects
          </h3>
          <p className="text-primaryBlack font-thin text-center w-7/12">
            We are committed to eco-friendly design, creating spaces that
            respect the environment and engage the community. Our sustainable
            practices benefit both nature and the neighborhoods we serve.
          </p>
        </div>
        <div className="pt-8 px-24 ">
          <div className="grid grid-cols-12">
            <div className="col-span-9 space-y-10">
              <Link href={"/projects/1"} className=" flex ">
                <div className="relative group w-full flex  h-[550px] overflow-hidden rounded-3xl justify-start items-end ">
                  <Image
                    className="absolute  z-2 top-0 h-full w-full   overflow-hidden left-0 "
                    src={localImages.Project1}
                    alt="project-image"
                  />
                  <div className="z-5 absolute pb-8 pl-8 **:text-white">
                    <h3 className="text-xl font-medium pb-2">
                      Anantara Zanzibar Resort and Residences
                    </h3>
                    <h4 className="flex items-center gap-2">
                      <MapPin className="size-6" /> <span>Malibu, CA</span>
                    </h4>
                  </div>
                </div>
              </Link>
              <Link href={"/projects/2"} className=" flex ">
                <div className="relative group w-full flex  h-[550px] overflow-hidden rounded-3xl justify-start items-end ">
                  <Image
                    className="absolute  z-2 top-0 h-full w-full   overflow-hidden left-0 "
                    src={localImages.Project1}
                    alt="project-image"
                  />
                  <div className="z-5 absolute pb-8 pl-8 **:text-white">
                    <h3 className="text-xl font-medium pb-2">
                      Anantara Zanzibar Resort and Residences
                    </h3>
                    <h4 className="flex items-center gap-2">
                      <MapPin className="size-6" /> <span>Malibu, CA</span>
                    </h4>
                  </div>
                </div>
              </Link>
              <Link href={"/projects/3"} className=" flex ">
                <div className="relative group w-full flex  h-[550px] overflow-hidden rounded-3xl justify-start items-end ">
                  <Image
                    className="absolute  z-2 top-0 h-full w-full   overflow-hidden left-0 "
                    src={localImages.Project1}
                    alt="project-image"
                  />
                  <div className="z-5 absolute pb-8 pl-8 **:text-white">
                    <h3 className="text-xl font-medium pb-2">
                      Anantara Zanzibar Resort and Residences
                    </h3>
                    <h4 className="flex items-center gap-2">
                      <MapPin className="size-6" /> <span>Malibu, CA</span>
                    </h4>
                  </div>
                </div>
              </Link>
              
            </div>
            <div className="col-span-3">
              <div className="sticky top-32  flex  h-[550px] overflow-hidden rounded-lg justify-start items-end ">
                <Image
                  className="absolute z-2 p-2 top-0 h-full w-full overflow-hidden left-0"
                  src={localImages.ProjectMap1}
                  alt="project-map1"
                />
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center pt-10">
            <button className="flex items-center bg-black cursor-pointer text-white px-8 py-3 group rounded-lg gap-3">
              View More <MoveDown className="size-4 group:hover" />
            </button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default OurProject;
