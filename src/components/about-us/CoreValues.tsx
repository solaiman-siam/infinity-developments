import { localImages } from "@/utils/imageProvider";
import Container from "../shared/Container";
import Image from "next/image";

const CoreValues = () => {
  const coreValuesArray = [
    {
      icon: localImages.DesignIcon,
      title: "Design",
      description: 'We strive for excellence in everything we do, from design and construction to customer service.'
    },
    {
      icon: localImages.InnovationIcon,
      title: "Innovation",
      description: 'We embrace new ideas, technologies, and approaches to create cutting-edge developments.'
    },
    {
      icon: localImages.CultureIcon,
      title: "Culture",
      description: 'We conduct business with the highest ethical standards, transparency, and honesty.'
    },
    {
      icon: localImages.EnvironmentIcon,
      title: "Environment",
      description: 'We are committed to environmentally responsible development practices and community well-being.'
    },
  ];

  return (
    <div className="py-24  bg-[#F1F0E6]">
      <Container>
        <div className="flex flex-col items-center justify-center">
          <h3 className="text-4xl font-semibold pb-4">Our Core Values</h3>
          <p className="text-primaryBlack/70">
            The principles that guide every decision we make and every project
            we undertake.
          </p>
        </div>
        <div className="grid grid-cols-4 gap-6 pt-20">
            {
                coreValuesArray.map((value, index) => (
                    <div key={index} className="flex bg-white rounded-xl p-8 flex-col justify-center items-center ">
                        <Image src={value.icon} alt="core-values-icons"/>
                        <div className="flex flex-col justify-center items-center" >
                            <h3 className="text-2xl font-medium pb-4 pt-6">{value.title}</h3>
                            <p className="text-primaryBlack/50 text-center font-medium">{value.description}</p>
                        </div>
                    </div>
                ))
            }
        </div>
      </Container>
    </div>
  );
};

export default CoreValues;
