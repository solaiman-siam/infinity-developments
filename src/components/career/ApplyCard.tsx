import Container from "../shared/Container";

const ApplyCard = ({designationName} : {designationName: string}) => {
  return (
    <div className="bg-[#F1F0E7]  py-6">
      <Container>
        <div className="flex px-40 justify-between items-center">
          <h3 className="text-lg font-medium text-primaryBlack">
            {designationName}
          </h3>
          <div>
            <button className="px-6 cursor-pointer py-2.5 rounded-md bg-primaryBlack text-white">
              Apply Now
            </button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ApplyCard;
