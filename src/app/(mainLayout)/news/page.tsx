import { INews } from "@/app/types/type";
import NewsCard from "@/components/news/NewsCard";
import CommonOverview from "@/components/shared/CommonOverview";
import Container from "@/components/shared/Container";
import { MoveRight } from "lucide-react";
import React from "react";

const NewsPage = async () => {
  const res = await fetch(`${process.env.NEXT_API_URL}/api/news/list` , {next: { revalidate: 30}});
  const newsList = await res.json();

  return (
    <div className="pt-40 pb-24">
      <Container>
        <div className="flex justify-between items-end">
          <div className="flex w-7/12 flex-col gap-2">
            <h3 className="text-5xl font-semibold pb-4">News</h3>
            <p className="text-primaryBlack/60 w-12/12">
              Tips for a Successful Blog: To thrive, focus on your niche and
              engage your audience with valuable content. Consistency matters,
              so stick to a posting schedule. Promote your posts on social media
              to expand your reach and boost interaction!
            </p>
          </div>
          <div className="w-5/12 flex justify-end">
            <button className="text-nowrap bg-black  flex cursor-pointer items-center gap-2 group text-white px-8 py-3 rounded-md">
              <span>View All Blogs</span>
              <MoveRight className=" transition-all group-hover:translate-x-2 duration-200" />
            </button>
          </div>
        </div>

        <div className="grid pt-14 grid-cols-2 gap-10">
          {newsList.data.map((news : INews) => (
            <NewsCard key={news.id} newsData={news} />
          ))}


        </div>
        <div className="pt-24">
          <CommonOverview titleText="Learn more about Zanzibar" />
        </div>
      </Container>
    </div>
  );
};

export default NewsPage;
