import React from 'react';
import { BarLoader } from 'react-spinners';

const NewsDetailsLoading = () => {
    return (
        <div className='h-screen flex justify-center items-center'>
            <BarLoader width={200} height={10} />
        </div>
    );
};

export default NewsDetailsLoading;