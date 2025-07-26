import { localImages } from "@/utils/imageProvider";
import Image from "next/image";

const AboutHero = () => {
  return (
    <div className="h-[700px]">
      <Image
        className="w-full h-full object-cover"
        src={localImages.OurProjects}
        alt="project-hero"
      />
    </div>
  );
};

export default AboutHero;
