"use client"

import AboutProject from "@/components/project-details/AboutProject";
import HeroImageSlider from "@/components/project-details/HeroImageSlider";

const ProjectDetails =  ({params} :  { params : Promise<{projectId: string}>}) => {

    const {projectId} = params;

    return (
        <div className=''>
            <HeroImageSlider/>
            <AboutProject/>
        </div>
    );
};

export default ProjectDetails;