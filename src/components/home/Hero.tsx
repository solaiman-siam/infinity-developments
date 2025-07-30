import Image, { StaticImageData } from "next/image";
import Container from "../shared/Container";
import { MoveRight } from "lucide-react";
import AnimateTextWrapper from "../shared/AnimateTextWrapper";

const Hero = ({ heroImage }: { heroImage: StaticImageData }) => {
  return (
    <div className="w-full relative flex  items-end h-screen">
      <Image
        className="absolute object-top z-2 top-0 left-0"
        src={heroImage}
        alt="hero_image"
      />
      <Container>
        <div className=" relative flex items-end justify-between pb-32 z-8">
          <AnimateTextWrapper>
            <h1 className="text-7xl font-abzee w-4/12  text-white  font-medium leading-[70px]">
              DESIGNING SPACES WITH
            </h1>
          </AnimateTextWrapper>
          <div className="bg-white/30 **:text-white w-[500px] flex flex-col gap-2 rounded-xl p-8 backdrop:blur-2xl backdrop-blur-3xl">
            <AnimateTextWrapper>
              <h3 className="text-3xl w-4/12 ">INTENT + IMPACT</h3>
            </AnimateTextWrapper>
            <AnimateTextWrapper>
              <p className="text-sm pt-2 pb-4 font-thin">
                We create architectural experiences that transcend the ordinary.
                Each project is a careful balance of form, function, and the
                human experience.
              </p>
            </AnimateTextWrapper>

            <button className="flex font-thin text-sm group px-5 py-3 w-fit cursor-pointer rounded-md bg-primaryBlack items-center gap-3">
              View Our Work{" "}
              <span>
                {" "}
                <MoveRight
                  className="group-hover:translate-x-2 transition-all duration-300"
                  strokeWidth={1.2}
                />{" "}
              </span>
            </button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Hero;
