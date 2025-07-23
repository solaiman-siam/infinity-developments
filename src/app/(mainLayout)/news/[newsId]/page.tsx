import NewsCard from "@/components/news/NewsCard";
import Container from "@/components/shared/Container";
import { localImages } from "@/utils/imageProvider";
import { MoveRight } from "lucide-react";
import Image from "next/image";
import React from "react";

const NewsDetails = () => {
  return (
    <div className="pt-40">
      <Container>
        <div>
          <h3 className="text-4xl font-medium pb-6 w-11/12">
            A Second Home in Dubai: Why Investors Are Turning to Luxury
            Properties
          </h3>

          <div className="h-[800px] ">
            <Image
              className="w-full h-full object-cover rounded-xl"
              src={localImages.NewsCardImage1}
              alt="news-card-image"
            />
          </div>
          <div className="flex pt-4 items-center gap-4">
            <h4 className="font-medium text-[17px]">ARTICLES</h4>
            <li className="text-primaryBlack/50">June 15, 2025</li>
            <li className="text-primaryBlack/50">8 MIN READ</li>
          </div>
          {/* description */}
          <div className="pt-4 pb-10">
            <p className="text-primaryBlack/60">
              Unguja. The Revolutionary Government of Zanzibar (SMZ) has secured
              Sh9 billion for the extensive renovation of dilapidated buildings
              within Stone Town for the fiscal year 2024/25. The funds have been
              sponsored by Infinity Group, a real Estate development firm that
              is also in charge of the renovation of the Old Fort
            </p>
            <div className="space-y-0">
              <div className="flex flex-col pt-10 gap-3">
                <h3 className="text-primaryBlack text-lg font-medium ">
                  1. Sustainability and Eco-Friendly Living
                </h3>
                <p className="text-primaryBlack/60 ">
                  In addition to this, the government is seeking further funding
                  from various stakeholders to ensure adequate resources to
                  assist citizens in improving these buildings which are
                  believed to be over 194 years old. President of Zanzibar, Dr.
                  Hussein Mwinyi, made the announcement on the evening of
                  December 2, 2024, during the Stone Town Day celebrations at
                  Forodhani, Unguja. “Despite the significant progress made by
                  the Stone Town Authority, the government is determined to step
                  up efforts to improve the condition of this town, which is not
                  only a world heritage site but also a mirror of the nation and
                  the heart of the tourism sector, which is the main pillar of
                  Zanzibar’s economy,” he stated. The President added that the
                  government is currently in the final stages of a feasibility
                  study for a project to underground all infrastructure related
                  to electricity, communications, and water within the town to
                  restore the appearance and character of its historic
                  buildings.
                </p>
              </div>
              <div className="flex flex-col pt-10 gap-3">
                <h3 className="text-primaryBlack text-lg font-medium ">
                 2. Sustainability and Eco-Friendly Living
                </h3>
                <p className="text-primaryBlack/60 ">
                  In addition to this, the government is seeking further funding
                  from various stakeholders to ensure adequate resources to
                  assist citizens in improving these buildings which are
                  believed to be over 194 years old. President of Zanzibar, Dr.
                  Hussein Mwinyi, made the announcement on the evening of
                  December 2, 2024, during the Stone Town Day celebrations at
                  Forodhani, Unguja. “Despite the significant progress made by
                  the Stone Town Authority, the government is determined to step
                  up efforts to improve the condition of this town, which is not
                  only a world heritage site but also a mirror of the nation and
                  the heart of the tourism sector, which is the main pillar of
                  Zanzibar’s economy,” he stated. The President added that the
                  government is currently in the final stages of a feasibility
                  study for a project to underground all infrastructure related
                  to electricity, communications, and water within the town to
                  restore the appearance and character of its historic
                  buildings.
                </p>
              </div>
              <div className="flex flex-col pt-10 gap-3">
                <h3 className="text-primaryBlack text-lg font-medium ">
                  3. Sustainability and Eco-Friendly Living
                </h3>
                <p className="text-primaryBlack/60 ">
                  In addition to this, the government is seeking further funding
                  from various stakeholders to ensure adequate resources to
                  assist citizens in improving these buildings which are
                  believed to be over 194 years old. President of Zanzibar, Dr.
                  Hussein Mwinyi, made the announcement on the evening of
                  December 2, 2024, during the Stone Town Day celebrations at
                  Forodhani, Unguja. “Despite the significant progress made by
                  the Stone Town Authority, the government is determined to step
                  up efforts to improve the condition of this town, which is not
                  only a world heritage site but also a mirror of the nation and
                  the heart of the tourism sector, which is the main pillar of
                  Zanzibar’s economy,” he stated. The President added that the
                  government is currently in the final stages of a feasibility
                  study for a project to underground all infrastructure related
                  to electricity, communications, and water within the town to
                  restore the appearance and character of its historic
                  buildings.
                </p>
              </div>
            </div>
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
            <NewsCard  />
            <NewsCard  />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default NewsDetails;
