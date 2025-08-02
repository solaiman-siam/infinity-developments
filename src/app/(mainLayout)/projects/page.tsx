import OurProject from '@/components/projects/OurProject';
import CommonOverview from '@/components/shared/CommonOverview';
import React from 'react';

const ProjectsPage = () => {
    return (
        <div className='py-10'>
            <OurProject/>
            <CommonOverview titleText={'Learn More About Zanzibar'}/>
        </div>
    );
};

export default ProjectsPage;