import { localImages } from "@/utils/imageProvider";
import { MoveRight } from "lucide-react";
import Image from "next/image";

const NewsCard = () => {
  return (
    <div className="group">
      <div className={`h-[500px] overflow-hidden rounded-lg`}>
        <Image
          className="w-full h-full object-cover group-hover:scale-110 transition-all duration-200"
          src={localImages.NewsCardImage1}
          alt="news-card-image"
        />
      </div>
      <div className="flex pt-4 items-center gap-4">
        <h4 className="font-medium text-[17px]">Blog</h4>
        <li className="text-primaryBlack/50">June 15, 2025</li>
        <li className="text-primaryBlack/50">8 MIN READ</li>
      </div>
        <h3 className="pt-4 text-3xl font-medium pb-4">New green energy policies boost investment in solar power</h3>
      <div>
        <button className="text-nowrap bg-black  flex cursor-pointer items-center gap-2 group text-white px-4 py-2 rounded-md">
          <span>Read Post</span>
          <MoveRight className="  transition-all group-hover:translate-x-1.5 duration-200" />
        </button>
      </div>
    </div>
  );
};

export default NewsCard;
