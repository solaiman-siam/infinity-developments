import React from 'react';
import { BarLoader } from 'react-spinners';

const AboutLoading = () => {
    return (
        <div className='h-screen flex justify-center items-center'>
            <BarLoader width={200} height={5} />
        </div>
    );
};

export default AboutLoading;