import { INews } from "@/app/types/type";
import { MoveRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const NewsCard = ({newsData } : {newsData: INews}) => {
  const imageUrl = `${process.env.NEXT_API_URL}/${newsData?.avatar}`
const formatted = new Date(newsData?.created_at).toLocaleDateString("en-US", {
  year: "numeric",
  month: "long",
  day: "numeric",
});

  return (
    <Link href={`/news/${newsData?.id}`} className="group">
      <div className={`h-[500px] overflow-hidden rounded-lg`}>
        <Image
          className="w-full h-full object-cover group-hover:scale-110 transition-all duration-200"
          src={imageUrl}
          width={100}
          height={100}
          alt="news-image"
        />
      </div>
      <div className="flex pt-4 items-center gap-4">
        <h4 className="font-medium text-[17px]">{newsData?.category}</h4>
        <li className="text-primaryBlack/50">{formatted}</li>
        <li className="text-primaryBlack/50 uppercase">{newsData?.read_time} </li>
      </div>
        <h3 className="pt-4 text-3xl font-medium pb-4">{newsData?.title}</h3>
      <div>
        <button className="text-nowrap bg-black  flex cursor-pointer items-center gap-2 group text-white px-4 py-2 rounded-md">
          <span>Read Post</span>
          <MoveRight className="  transition-all group-hover:translate-x-1.5 duration-200" />
        </button>
      </div>
    </Link>
  );
};

export default NewsCard;

