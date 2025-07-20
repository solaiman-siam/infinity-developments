import React from "react";
import Container from "./Container";
import { MoveRight } from "lucide-react";
import Image from "next/image";
import { localImages } from "@/utils/imageProvider";

const CommonOverview = ({titleText} : {titleText: string}) => {
  return (
    <div className="pb-24">
      <Container>
        <div className="rounded-xl relative flex justify-center items-center py-10 flex-col gap-2 bg-primaryBlack ">
          <h3 className="text-3xl font-medium pb-2 text-white/90">{titleText}</h3>
          <div className="flex items-center pt-4 translate-x-6">
            <button className="px-5 flex cursor-pointer items-center gap-3 group py-3 rounded-lg bg-white text-primaryBlack">
              Get In Touch
              <span>
                <MoveRight
                  className="group-hover:translate-x-2 transition-all duration-300"
                  strokeWidth={1.2}
                />
              </span>
            </button>
          </div>
          <Image className="absolute w-96 top-0 right-0" src={localImages.StatisticsVector} alt="statistics-vector"/>
        </div>
      </Container>
    </div>
  );
};

export default CommonOverview;
