import { INews } from "@/app/types/type";
import NewsCard from "@/components/news/NewsCard";
import Container from "@/components/shared/Container";
import { MoveRight } from "lucide-react";
import Image from "next/image";
import React from "react";
import parse from 'html-react-parser';
const NewsDetails = async({params} ) => {

  const {newsId} = await params;

async function fetchNewsList() {
  const res = await fetch(`${process.env.NEXT_API_URL}/api/news/list` , {next: {revalidate: 30}});
  return await res.json();
}

async function fetchNewsDetails(newsId) {
  const res = await fetch(`${process.env.NEXT_API_URL}/api/news/details/${newsId}`);
  return await res.json();
}

// Usage
const newsList = await fetchNewsList();
const newsDetails = await fetchNewsDetails(newsId);

  const imageUrl = `${process.env.NEXT_API_URL}/${newsDetails?.data?.avatar}`
const formatted = new Date(newsDetails?.data?.created_at).toLocaleDateString("en-US", {
  year: "numeric",
  month: "long",
  day: "numeric",
});


console.log(newsDetails);


  return (
    <div className="pt-40">
      <Container>
        <div>
          <h3 className="text-4xl font-medium pb-6 w-11/12">
          {newsDetails?.data?.title}
          </h3>
          <div className="h-[800px] ">
            <Image
              className="w-full h-full object-cover rounded-xl"
              src={imageUrl}
              width={100}
              height={100}
              alt="news-image"
            />
          </div>
          <div className="flex pt-4 items-center gap-4">
            <h4 className="font-medium text-[17px]">ARTICLES</h4>
            <li className="text-primaryBlack/50">{formatted}</li>
            <li className="text-primaryBlack/50 uppercase">{newsDetails?.data?.read_time}</li>
          </div>
          {/* description */}
          <div className="pt-4 pb-10">
           {parse(newsDetails?.data?.description)}
          </div>
          <div className="flex gap-1">
            <h4 className="text-primaryBlack font-medium">Source:</h4>
            <p className="text-primaryBlack/70">The Citizen</p>
          </div>
          {/* related articles */}
          <div className="flex pt-14 pb-10 justify-between items-center">
            <div className="flex w-7/12 flex-col gap-2">
              <h3 className="text-3xl font-semibold pb-4">Related Articles</h3>
            </div>
            <div className="w-5/12 flex justify-end">
              <button className="text-nowrap bg-black  flex cursor-pointer items-center gap-2 group text-white px-8 py-3 rounded-md">
                <span>View All Blogs</span>
                <MoveRight className="  transition-all group-hover:translate-x-2 duration-200" />
              </button>
            </div>
          </div>
          <div className="grid pb-24 grid-cols-2 gap-10">
             {newsList.data.slice(2).map((news : INews) => (
            <NewsCard key={news.id} newsData={news} />
          ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default NewsDetails;
