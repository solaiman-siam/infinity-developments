import AboutHero from '@/components/about-us/AboutHero';
import OurJourney from '@/components/about-us/OurJourney';
import VisonMission from '@/components/about-us/VisonMission';
import React from 'react';

const AboutUsPage = () => {
    return (
        <div>
            <AboutHero/>
            <VisonMission/>
            <OurJourney/>
        </div>
    );
};

export default AboutUsPage;