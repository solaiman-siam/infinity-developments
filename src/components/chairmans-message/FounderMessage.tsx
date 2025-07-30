import Image from "next/image";
import Container from "../shared/Container";
import { localImages } from "@/utils/imageProvider";

const FounderMessage = () => {
  return (
    <div className="py-24">
      <Container>
        <div className="px-32">
          <h1 className="text-5xl font-semibold text-center pt-8 pb-28"><span className="border-b-3">Founders</span> Message</h1>

          <div className="flex items-center gap-20 ">
            <div className="w-1/2 ">
              <h4 className=" font-medium text-[18px] pb-4 text-[#637381]">Dear Friends and Partners,</h4>
              <div>
                <p className="text-[#637381] pb-2">
                  At Infinity Developments, East Africa is more than a region of
                  opportunity. It is a place where culture, beauty, and
                  potential converge. Our commitment here runs deep, driven by a
                  vision to create transformative developments that reflect the
                  richness of the land and the promise of its future.
                </p>
                <p className="text-[#637381] pb-2">
                  From luxury beachfront resorts to integrated residential and
                  commercial communities, our work spans some of East Africa’s
                  most dynamic landscapes. Within this portfolio, we are also
                  privileged to contribute to select projects in and around
                  UNESCO heritage zones — where thoughtful design meets cultural
                  preservation.
                </p>
                <p className="text-[#637381] pb-2">
                  As we expand our presence across the region, our focus remains
                  on delivering developments that are meaningful, sustainable,
                  and of the highest standard. This would not be possible
                  without the continued trust and support of our team, partners,
                  and stakeholders.
                </p>
                <p className="text-[#637381] pb-2">
                  Thank you for being part of our journey. Together, we are not
                  only shaping communities — we are helping to play our part in
                  shaping the future of East Africa.
                </p>
              </div>
              <h4 className="font-medium text-[#637381] pt-3">Warm regards,</h4>
              <h3 className="text-xl font-medium text-primaryBlack/70 pt-6">Samuel Saba</h3>
              <h4 className="text-[#637381] pt-1">Chairman, Infinity Developments</h4>
            </div>
            <div className="w-1/2">
                <div className="h-[720px]">
                    <Image className="w-full  h-full rounded-2xl" src={localImages.FounderImage} alt="president-image"/>
                </div>
                <h2 className="text-4xl font-medium text-primaryBlack/70 pt-5">Samuel Saba</h2>
                <h4 className="text-primaryBlack/80 pt-2">Chairman</h4>
                <h4 className="text-primaryBlack/80">Infinity Developments</h4>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default FounderMessage;
