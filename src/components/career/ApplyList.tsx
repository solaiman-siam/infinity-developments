import Container from "../shared/Container";
import ApplyCard from "./ApplyCard";

const ApplyList = () => {
  return (
    <div className="py-24 ">
        <div className="flex flex-col justify-center items-center" >
          <h3 className="text-3xl text-primaryBlack font-medium pb-3">APPLY NOW</h3>
          <h3 className="text-primaryBlack/50 text-2xl font-medium ">EXPLORE OPPURTUNITIES</h3>
        </div>
        <div className="divide-y  pt-14 divide-black/5">
            <ApplyCard designationName="Senior Project Manager"/>
            <ApplyCard designationName="Director - Technical Support"/>
            <ApplyCard designationName="Design Manager - Interior Design"/>
            <ApplyCard designationName="Quantity Surveyor"/>
            <ApplyCard designationName="Construction Manager"/>
            <ApplyCard designationName="Design Manager - Architecture"/>
            <ApplyCard designationName="Construction Manager"/>
            <ApplyCard designationName="Guest Relations Agent"/>
        </div>
    </div>
  );
};

export default ApplyList;
