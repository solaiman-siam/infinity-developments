import React from "react";
import Container from "../shared/Container";
import { MoveRight } from "lucide-react";
import SlotCounter from 'react-slot-counter';
import AnimateTextWrapper from "../shared/AnimateTextWrapper";
const CompanyStatistics = () => {
  return (
    <div className="pb-24">
      <Container>
        <div className="flex  py-10 bg-primaryBlack rounded-xl  flex-col gap-8">
          <div className="flex **:text-white/90 items-center justify-between px-40">
            <div className="flex flex-col items-center gap-2">
              <h2 className="text-5xl font-semibold">$<SlotCounter duration={2} animateOnVisible={true} value={450} />M+</h2>
              <p className="text-white/90 font-thin">Gross Development Value</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <h2 className="text-5xl font-semibold"><SlotCounter duration={2} animateOnVisible={true} value={14} />+</h2>
              <p className="text-white/90 font-thin">Active Projects</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <h2 className="text-5xl font-semibold"><SlotCounter duration={2} animateOnVisible={true} value={98} />%</h2>
              <p className="text-white/90 font-thin">Client Satisfaction</p>
            </div>
          </div>
          <div className="flex flex-col items-center gap-2">
            <AnimateTextWrapper><p className="text-white/90">
              Join us on the path to prosperity. Contact us today to explore
              these unique opportunities.
            </p></AnimateTextWrapper>
            <div className="flex items-center pt-4 translate-x-6">
              <button className="px-5 flex  cursor-pointer items-center gap-3 group py-3 rounded-lg bg-white text-primaryBlack">
                Contact Us
                <span>
                  <MoveRight
                    className="group-hover:translate-x-2 transition-all duration-300"
                    strokeWidth={1.2}
                  />
                </span>
              </button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default CompanyStatistics;
