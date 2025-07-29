import Container from "../shared/Container";
import ApplyCareerModal from "./ApplyCareerModal";

const ApplyCard = ({designationName} : {designationName: string}) => {
  return (
    <div className="bg-[#F1F0E7]  py-6">
      <Container>
        <div className="flex px-40 justify-between items-center">
          <h3 className="text-lg font-medium text-primaryBlack">
            {designationName}
          </h3>
          <div>
            <ApplyCareerModal/>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ApplyCard;
