import { ITeam } from "@/app/types/type";
import Container from "@/components/shared/Container";
import TeamCard from "@/components/team/TeamCard";
import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const Team = async () => {
  const res = await fetch(`${process.env.NEXT_API_URL}/api/team/list`, {
    next: { revalidate: 30 },
  });

  const teamList = await res.json();


  return (
    <div className="py-40">
      <Container>
        <div className="flex flex-col justify-center items-center">
          <h3 className="text-4xl font-semibold pb-4">Our Leadership Team</h3>
          <p className="text-primaryBlack/60 text-center">
            Meet the experienced professionals who lead Infinity Development to
            new heights.
          </p>
        </div>
        <div className="grid-cols-4 gap-6 py-14 grid">
          {teamList?.data?.map((member : ITeam) => (
            <TeamCard key={member.id} memberData={member} />
          ))}

         
        </div>
        <div className="flex justify-center">
          <button className="flex items-center group gap-2 px-8 py-2.5 cursor-pointer rounded-md bg-primaryBlack text-white ">
            Get in touch with Our Team{" "}
            <FaArrowRightLong className="group-hover:translate-x-2 transition-all duration-200 " />{" "}
          </button>
        </div>
      </Container>
    </div>
  );
};

export default Team;
