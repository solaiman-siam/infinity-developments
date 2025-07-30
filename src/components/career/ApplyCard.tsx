import ApplyCareerModal from "./ApplyCareerModal";

const ApplyCard = ({ designationName }: { designationName: string }) => {
  return (
    <div className="  py-6">
      <div className="flex  ">
        <div className="bg-white flex border-black/10 justify-between items-center w-full p-6 rounded-md border">
          <div className="flex flex-col gap-1">
            <h3 className="text-lg font-medium text-primaryBlack">
              {designationName}
            </h3>
            <h4 className="text-black/50">Full Time</h4>
          </div>
          <div>
            <ApplyCareerModal />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplyCard;
