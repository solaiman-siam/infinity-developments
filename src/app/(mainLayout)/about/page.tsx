import AboutHero from '@/components/about-us/AboutHero';
import CoreValues from '@/components/about-us/CoreValues';
import OurJourney from '@/components/about-us/OurJourney';
import VisonMission from '@/components/about-us/VisonMission';
import React from 'react';

const AboutUsPage = () => {
    return (
        <div>
            <AboutHero/>
            <VisonMission/>
            <OurJourney/>
            <CoreValues/>
        </div>
    );
};

export default AboutUsPage;