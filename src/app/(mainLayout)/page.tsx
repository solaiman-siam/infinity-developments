import FeaturedWorks from '@/components/home/FeaturedWorks';
import Hero from '@/components/home/Hero';
import InvestOppurtunities from '@/components/home/InvestOppurtunities';
import OurValues from '@/components/home/OurValues';
import React from 'react';

const HomePage = () => {
    return (
        <div>
            <Hero/>
            <FeaturedWorks/>
            <OurValues/>
            <InvestOppurtunities/>
        </div>
    );
};

export default HomePage;