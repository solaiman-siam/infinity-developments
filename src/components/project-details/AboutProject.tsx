import Image from "next/image";
import Container from "../shared/Container";
import { localImages } from "@/utils/imageProvider";

const AboutProject = () => {
  return (
    <div className="py-24">
      <Container>
        <div className="flex items-center gap-20">
          <div className="flex w-1/2 flex-col gap-4">
            <h3 className="text-5xl font-semibold pb-6">About the Project</h3>
            <p className="text-black/60">
              <p className="pb-2">
              Infinity Aquamont by Infinity Development redefines coastal luxury
              in the heart of Downtown Umm Al Quwain. Nestled along an
              impressive 11-kilometer stretch of shoreline featuring 7
              kilometers of untouched beaches and thoughtfully designed beach
              parks—this exclusive waterfront community offers a rare blend of
              tranquility, spaciousness, and refined living.
              </p>
              <p>
              Discover
              beautifully designed 1- and 2-bedroom seaside residences, as well
              as spacious 3-bedroom duplexes, each crafted to reflect the
              essence of oceanfront life. From the gentle rhythm of the waves to
              the ever-changing play of natural light, every home invites a deep
              connection to the sea.
              </p>
            </p>
          </div>
          <div className="w-1/2">
            <Image src={localImages.ProjectDeatailsAbout} alt="" />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default AboutProject;
