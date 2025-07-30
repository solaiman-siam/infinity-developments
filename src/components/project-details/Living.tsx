import Image from "next/image";
import Container from "../shared/Container";
import { localImages } from "@/utils/imageProvider";

const Living = () => {
  const livingAmenitiesArray = [
    {
      id: 1,
      icon: localImages.JungleTrainIcon,
      title: "JUNGLE TRAIL",
    },
    {
      id: 2,
      icon: localImages.OutCinemaIcon,
      title: "OUTSIDE CINEMA",
    },
    {
      id: 3,
      icon: localImages.OutsideGymIcon,
      title: "OUTDOOR GYM",
    },
    {
      id: 4,
      icon: localImages.OutsideGymIcon,
      title: "OUTDOOR GYM",
    },
    {
      id: 5,
      icon: localImages.SwimmingPoolIcon,
      title: "SWIMMING POOL",
    },
    {
      id: 6,
      icon: localImages.KidsPlayIcon,
      title: "KIDS PLAY AREA",
    },
    {
      id: 7,
      icon: localImages.BarbecueIcon,
      title: "BARBECUE AREA",
    },
    {
      id: 8,
      icon: localImages.PicnicIcon,
      title: "PICNIC LAWN",
    },
  ];

  return (
    <div className="py-24">
      <Container>
        <div>
          <h3 className="text-3xl font-semibold pb-20 text-center">
            Curated Luxury Amenities, Crafted for Elevated Living
          </h3>

          <div className="grid grid-cols-4 gap-6">
            {livingAmenitiesArray.map((living) => (
              <div key={living.id} className="flex flex-col py-10 gap-6 justify-center items-center bg-[#E0E2DC] rounded-lg ">
                <div>
                  <Image
                    src={living.icon}
                    alt="jungle-train-icon"
                  />
                </div>
                <h3 className="text-xl font-medium">{living.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Living;
