import { localImages } from "@/utils/imageProvider";
import Image from "next/image";

const CareerHero = () => {
  return (
    <div className="h-[700px] relative">
      <Image
        className="w-full absolute top-0 left-0  z-4 h-full object-cover"
        src={localImages.OurProjects}
        alt="project-hero"
      />

      <div className="relative pt-50 pl-52 z-8 ">
        <h3 className="text-4xl text-white w-4/12 leading-[50px] font-semibold pb-6">
          CAREER OPPORTUNITIES AT INFINITY DEVELOPMENT
        </h3>
        <p className="text-white/80 w-4/12 font-thin">
          At Infinity Development, we bring The Art of Elevation to life in
          every aspect of what we do.
        </p>
        <p className="pt-4 text-white/80 w-4/12 font-thin">
          If you share our passion for envisioning the extraordinary and turning
          it into reality, we welcome you to explore opportunities to become
          part of the Infinity Development journey, where your talent can help
          redefine the landscape of tomorrow.
        </p>
      </div>
    </div>
  );
};

export default CareerHero;
