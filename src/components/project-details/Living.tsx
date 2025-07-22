import Image from "next/image";
import Container from "../shared/Container";
import { localImages } from "@/utils/imageProvider";

const Living = () => {
    return (
        <div className="py-24">
            <Container>
                <div>
                    <h3 className="text-3xl font-semibold pb-20 text-center">Curated Luxury Amenities, Crafted for Elevated Living</h3>

                    <div className="grid grid-cols-4 gap-6">
                        <div className="flex flex-col py-10 gap-10 justify-center items-center bg-[#E0E2DC] rounded-lg ">
                            <div>
                                <Image src={localImages.JungleTrain} alt="jungle-train-icon"/>
                            </div>
                            <h3 className="text-2xl font-medium">Jungle Train</h3>
                        </div>
                        <div className="flex flex-col py-10 gap-10 justify-center items-center bg-[#E0E2DC] rounded-lg ">
                            <div>
                                <Image src={localImages.JungleTrain} alt="jungle-train-icon"/>
                            </div>
                            <h3 className="text-2xl font-medium">Jungle Train</h3>
                        </div>
                        <div className="flex flex-col py-10 gap-10 justify-center items-center bg-[#E0E2DC] rounded-lg ">
                            <div>
                                <Image src={localImages.JungleTrain} alt="jungle-train-icon"/>
                            </div>
                            <h3 className="text-2xl font-medium">Jungle Train</h3>
                        </div>
                        <div className="flex flex-col py-10 gap-10 justify-center items-center bg-[#E0E2DC] rounded-lg ">
                            <div>
                                <Image src={localImages.JungleTrain} alt="jungle-train-icon"/>
                            </div>
                            <h3 className="text-2xl font-medium">Jungle Train</h3>
                        </div>
                        <div className="flex flex-col py-10 gap-10 justify-center items-center bg-[#E0E2DC] rounded-lg ">
                            <div>
                                <Image src={localImages.JungleTrain} alt="jungle-train-icon"/>
                            </div>
                            <h3 className="text-2xl font-medium">Jungle Train</h3>
                        </div>
                        <div className="flex flex-col py-10 gap-10 justify-center items-center bg-[#E0E2DC] rounded-lg ">
                            <div>
                                <Image src={localImages.JungleTrain} alt="jungle-train-icon"/>
                            </div>
                            <h3 className="text-2xl font-medium">Jungle Train</h3>
                        </div>
                        <div className="flex flex-col py-10 gap-10 justify-center items-center bg-[#E0E2DC] rounded-lg ">
                            <div>
                                <Image src={localImages.JungleTrain} alt="jungle-train-icon"/>
                            </div>
                            <h3 className="text-2xl font-medium">Jungle Train</h3>
                        </div>
                        <div className="flex flex-col py-10 gap-10 justify-center items-center bg-[#E0E2DC] rounded-lg ">
                            <div>
                                <Image src={localImages.JungleTrain} alt="jungle-train-icon"/>
                            </div>
                            <h3 className="text-2xl font-medium">Jungle Train</h3>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Living;