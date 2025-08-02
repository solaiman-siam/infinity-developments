import React from 'react';
import { BarLoader } from 'react-spinners';

const TeamLoader = () => {
    return (
        <div className='h-screen flex justify-center items-center'>
            <BarLoader width={100} height={5} />
        </div>
    );
};

export default TeamLoader;