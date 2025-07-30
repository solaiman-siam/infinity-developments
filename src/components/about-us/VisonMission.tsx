import Image from "next/image";
import Container from "../shared/Container";
import { localImages } from "@/utils/imageProvider";

const VisonMission = () => {
  return (
    <div className="py-24">
      <Container>
        <div className="flex items-center gap-20">
          <div className="flex-1 flex flex-col gap-14">
            <div >
              <h3 className="text-3xl text-primaryBlack font-semibold pb-4">Our Vision</h3>
              <p className="text-primaryBlack/60 w-10/12">
                To be the most trusted and innovative real estate developer in
                the UAE, creating sustainable and iconic developments that
                enhance communities and set new standards in the industry.
              </p>
            </div>
            <div >
              <h3 className="text-primaryBlack text-3xl pb-4 font-semibold ">Our Mission</h3>
              <p className="text-primaryBlack/60 w-10/12">
                To deliver exceptional value to our customers, shareholders, and
                communities through innovative design, quality construction, and
                sustainable development practices. We strive to exceed
                expectations in every project we undertake, fostering long-term
                relationships built on trust and excellence.
              </p>
            </div>
          </div>
          <div className="flex-1">
            <div className="h-[400px] relative">
                <Image className="w-full rounded-xl h-full object-cover" src={localImages.MissionVision} alt="mission-vision-image"/>
                <div className="bg-primaryBlack absolute -bottom-10 -right-10 text-white p-8 rounded-xl ">
                    <h3 className="text-4xl font-semibold pb-2">#1</h3>
                    <p className="">Developer in Zanzibar</p>
                </div>
            </div>
            
          </div>
        </div>
      </Container>
    </div>
  );
};

export default VisonMission;
