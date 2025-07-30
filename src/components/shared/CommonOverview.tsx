import React from "react";
import Container from "./Container";
import { MoveRight } from "lucide-react";
import Image from "next/image";
import { localImages } from "@/utils/imageProvider";

const CommonOverview = ({titleText} : {titleText: string}) => {
  return (
    <div className="pb-24 flex justify-center items-center">
      <Container>
        <div className="rounded-xl w-1/2 mx-auto  relative flex justify-center items-center py-5 flex-col gap-2 bg-primaryBlack ">
          <h3 className="text-xl font-medium pb-2 text-white/90">{titleText}</h3>
          <div className="flex items-center pt-4 ">
            <button className="px-5 flex cursor-pointer text-[15px] items-center gap-3 group py-2 rounded-lg bg-white text-primaryBlack">
              Get In Touch
              <span>
                <MoveRight
                  className="group-hover:translate-x-2 transition-all duration-300"
                  strokeWidth={1.2}
                />
              </span>
            </button>
          </div>
          <Image className="absolute w-52 top-0 right-0" src={localImages.StatisticsVector} alt="statistics-vector"/>
        </div>
      </Container>
    </div>
  );
};

export default CommonOverview;
