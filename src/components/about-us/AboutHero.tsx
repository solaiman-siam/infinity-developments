import { localImages } from "@/utils/imageProvider";
import Image from "next/image";

const AboutHero = async () => {


  const res = await fetch(`${process.env.NEXT_API_URL}/api/banner/images/get`);
  const imageUrlData = await res.json();

  const imageUrl = `${process.env.NEXT_API_URL}/${imageUrlData?.data?.about_image}`

  return (
    <div className="h-[400px] relative flex justify-center items-center">
      <Image
        className="w-full absolute z-4 top-0 let-0  h-full object-cover"
        src={imageUrlData && imageUrl}
        alt="project-hero"
        width={1200}
        height={400}
      />
      <div className="absolute z-8 bg-black/50 top-0 left-0 w-full h-full">

      </div>
      <h3 className=" relative z-10 font-semibold text-white pt-10 text-5xl text-center">About Us</h3>
    </div>
  );
};

export default AboutHero;
