import { localImages } from "@/utils/imageProvider";
import Image from "next/image";


const TeamCard = () => {
    return (
        <div className="group flex flex-col  ">
            <div className="h-[300px] rounded-t-xl overflow-hidden">
                <Image className="w-full h-full object-cover group-hover:scale-110 transition-all duration-300" src={localImages.TeamCardImage} alt="member-image"/>
            </div>
            <div className="flex flex-col bg-white shadow-xl p-6 rounded-b-xl">
                <h3 className="text-primaryBlack text-xl font-medium pb-2">Ahmed Al Mansouri</h3>
                <h4 className="text-primaryBlack/60 pb-4 text-[15px] font-medium">Founder & Chairman</h4>
                <p className="text-primaryBlack/40 text-[15px]">With over 25 years of experience in real estate development, Ahmed has led the company from its inception to become one of the UAEs premier developers.</p>
            </div>
        </div>
    );
};

export default TeamCard;