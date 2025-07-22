import React from "react";
import Container from "../shared/Container";
import Image from "next/image";
import { localImages } from "@/utils/imageProvider";

const NearbyLiving = () => {
  return (
    <div className="py-24">
      <Container>
        <div>
          <h3 className="text-4xl font-semibold text-center pb-12">
            Island Living , Nearby Essentials
          </h3>
          <div className="bg-[#F4F6F8] flex items-center justify-between px-32 rounded-md py-10">
            <div className="flex flex-col gap-4 justify-center items-center">
              <div>
                <Image src={localImages.DubaiIcon} alt="nearby-icon" />
              </div>
              <h3 className="text-lg font-medium text-primaryBlack/80">Dubai</h3>
              <h3 className="text-lg font-medium text-primaryBlack/50">40 Mins</h3>
            </div>
            <div className="flex flex-col gap-4 justify-center items-center">
              <div>
                <Image src={localImages.DubaiIcon} alt="nearby-icon" />
              </div>
              <h3 className="text-lg font-medium text-primaryBlack/80">Dubai</h3>
              <h3 className="text-lg font-medium text-primaryBlack/50">40 Mins</h3>
            </div>
            <div className="flex flex-col gap-4 justify-center items-center">
              <div>
                <Image src={localImages.DubaiIcon} alt="nearby-icon" />
              </div>
              <h3 className="text-lg font-medium text-primaryBlack/80">Dubai</h3>
              <h3 className="text-lg font-medium text-primaryBlack/50">40 Mins</h3>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default NearbyLiving;
