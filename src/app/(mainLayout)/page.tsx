import CompanyStatistics from '@/components/home/CompanyStatistics';
import FeaturedWorks from '@/components/home/FeaturedWorks';
import GetIntouch from '@/components/shared/CommonOverview';
import Hero from '@/components/home/Hero';
import InvestOppurtunities from '@/components/home/InvestOppurtunities';
import OurValues from '@/components/home/OurValues';
import { localImages } from '@/utils/imageProvider';
import React from 'react';

const HomePage = () => {
    return (
        <div>
            <Hero heroImage={localImages.HeroImage}/>
            <FeaturedWorks/>
            <OurValues/>
            <InvestOppurtunities/>
            <CompanyStatistics/>
            <GetIntouch titleText={'Ready to create something extraordinary?'} />
        </div>
    );
};

export default HomePage;