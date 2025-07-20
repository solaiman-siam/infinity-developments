import OurProject from '@/components/projects/OurProject';
import ProjectHero from '@/components/projects/ProjectHero';
import CommonOverview from '@/components/shared/CommonOverview';
import React from 'react';

const ProjectsPage = () => {
    return (
        <div>
            <ProjectHero/>
            <OurProject/>
            <CommonOverview titleText={'Learn More About Zanzibar'}/>
        </div>
    );
};

export default ProjectsPage;