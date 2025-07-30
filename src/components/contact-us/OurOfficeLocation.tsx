import Image from "next/image";
import Container from "../shared/Container";
import { FaArrowRightLong } from "react-icons/fa6";
import { localImages } from "@/utils/imageProvider";

const OurOfficeLocation = () => {
    return (
        <div className="pt-24">
            <Container>
                <div>
                    <h3 className="text-center text-4xl font-semibold pb-14">Our Office</h3>
                </div>
                <div className="flex items-center gap-8">
                    <div className="flex-1 border border-primaryBlack/20 rounded-xl p-8">
                        <h3 className="text-2xl font-medium pb-3">Dubai Office</h3>
                        <p className="text-primaryBlack/60 pb-6 ">Office 2008, 20th Floor, Infinity Tower, Dubai, UAE</p>
                        <div className="w-full h-[400px] rounded-xl overflow-hidden ">
                            <Image className="w-full h-full object-cover " src={localImages.MapImage} alt="location-map"/>
                        </div>
                        <div className="pt-6">
                            <button className="flex items-center gap-3 group rounded-lg cursor-pointer justify-center bg-primaryBlack text-white px-8 h-10"> Get Dirrect Location <FaArrowRightLong className="group-hover:translate-x-2 transition-all duration-300" /></button>
                        </div>
                    </div>
                    <div className="flex-1 border border-primaryBlack/20 rounded-xl p-8">
                        <h3 className="text-2xl font-medium pb-3">Zanzibar Office</h3>
                        <p className="text-primaryBlack/60 pb-6 ">Building No 869, Malindi Funguni Street, Stone Town, Zanzibar</p>
                        <div className="w-full h-[400px] rounded-xl overflow-hidden ">
                            <Image className="w-full h-full object-cover " src={localImages.MapImage} alt="location-map"/>
                        </div>
                        <div className="pt-6">
                            <button className="flex items-center gap-3 group rounded-lg cursor-pointer justify-center bg-primaryBlack text-white px-8 h-10"> Get Dirrect Location <FaArrowRightLong className="group-hover:translate-x-2 transition-all duration-300" /></button>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default OurOfficeLocation;