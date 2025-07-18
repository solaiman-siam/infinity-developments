import React from "react";
import Container from "../shared/Container";
import Image from "next/image";
import { localImages } from "@/utils/imageProvider";

const InvestOppurtunities = () => {
  return (
    <div className="py-24">
      <Container>
        <div>
          <h3 className="text-5xl font-semibold pb-3">
            Investment Opportunities
          </h3>
          <p className="font-thin w-6/12">
            Unlock unparalleled potential with Infinitys prime investment
            opportunities. From exquisite resort developments to dynamic
            residential projects, we offer ventures designed with significant
            returns and lasting impact.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-10 pt-14">
          <div className="relative flex pb-10 items-end h-[500px] rounded-xl overflow-hidden grpup">
            <Image
              className="w-full absolute h-full z-4 top-0 left-0 object-cover group-hover:scale-110"
              src={localImages.Investment2}
              alt="investments-image"
            />
            <div className="relative z-8 text-white/90  rounded-xl w-11/12 mx-auto p-4 flex flex-col gap-2 bg-white/20 backdrop-blur-xl backdrop:blur-2xl ">
              <h4 className="uppercase text-sm">Luxury Hospitality</h4>
              <h3 className="text-2xl w-5/12">
                Anantara Zanzibar Resort & Residences
              </h3>
              <p className="font-thin text-sm">
                Redefining luxury hospitality in Africa with world-class
                amenities, pristine beachfront location, and exceptional
                investment potential.
              </p>
            </div>
            
          </div>
          <div className="relative flex pb-10 items-end h-[500px] rounded-xl overflow-hidden grpup">
              <Image
                className="w-full absolute h-full z-4 top-0 left-0 object-cover group-hover:scale-110"
                src={localImages.Investment1}
                alt="investments-image"
              />
              <div className="relative z-8 text-white/90  rounded-xl w-11/12 mx-auto p-4 flex flex-col gap-2 bg-white/20 backdrop-blur-xl backdrop:blur-2xl ">
                <h4 className="uppercase text-sm">Mixed-Use Development</h4>
                <h3 className="text-2xl w-5/12">
                  Infinity Hills Residential & Commercial
                </h3>
                <p className="font-thin text-sm">
                  A dynamic development combining premium residential living
                  with commercial spaces, designed for modern lifestyles and
                  strong returns.
                </p>
              </div>
            </div>
        </div>
      </Container>
    </div>
  );
};

export default InvestOppurtunities;
