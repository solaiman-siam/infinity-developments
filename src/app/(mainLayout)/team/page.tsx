import Container from '@/components/shared/Container';
import TeamCard from '@/components/team/TeamCard';
import React from 'react';
import { FaArrowRightLong } from 'react-icons/fa6';

const Team = () => {
    return (
        <div className='py-40'>
            <Container>
                <div className='flex flex-col justify-center items-center'>
                    <h3 className='text-4xl font-semibold pb-4'>Our Leadership Team</h3>
                    <p className='text-primaryBlack/60 text-center'>Meet the experienced professionals who lead Infinity Development to new heights.</p>
                </div>
                <div className='grid-cols-4 gap-6 py-14 grid'>
                    <TeamCard/>
                    <TeamCard/>
                    <TeamCard/>
                    <TeamCard/>
                    <TeamCard/>
                    <TeamCard/>
                    <TeamCard/>
                    <TeamCard/>
                </div>
                <div className='flex justify-center'>
                    <button className='flex items-center group gap-2 px-8 py-2.5 cursor-pointer rounded-md bg-primaryBlack text-white '>Get in touch with Our Team <FaArrowRightLong className='group-hover:translate-x-2 transition-all duration-200 ' /> </button>
                </div>
            </Container>
        </div>
    );
};

export default Team;