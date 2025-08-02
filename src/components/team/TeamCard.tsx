import { ITeam } from "@/app/types/type";
import { localImages } from "@/utils/imageProvider";
import Image from "next/image";

const TeamCard = ({ memberData }: { memberData: ITeam }) => {
  const imageUrl = `${process.env.NEXT_API_URL}/${memberData?.avatar}`;

  return (
    <div className="group flex flex-col  ">
      <div className="h-[300px] rounded-t-xl overflow-hidden">
        <Image
          className="w-full h-full object-cover group-hover:scale-110 transition-all duration-300"
          src={memberData && imageUrl}
          alt="member-image"
          width={800}
          height={800}
        />
      </div>
      <div className="flex flex-col bg-white shadow-xl p-6 rounded-b-xl">
        <h3 className="text-primaryBlack text-xl font-medium pb-2">
          {memberData?.name}
        </h3>
        <h4 className="text-primaryBlack/60 pb-4 text-[15px] font-medium">
          {memberData?.designation}
        </h4>
        <p className="text-primaryBlack/40 text-[15px]">
          {memberData?.description}
        </p>
      </div>
    </div>
  );
};

export default TeamCard;
