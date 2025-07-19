import Hero from '@/components/home/Hero';
import OurProject from '@/components/projects/OurProject';
import { localImages } from '@/utils/imageProvider';
import React from 'react';

const ProjectsPage = () => {
    return (
        <div>
            <Hero heroImage={localImages.OurProjects} />
            <OurProject/>
        </div>
    );
};

export default ProjectsPage;