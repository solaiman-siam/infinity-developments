import ContactFormContainer from '@/components/contact-us/ContactFormContainer';
import OurOfficeLocation from '@/components/contact-us/OurOfficeLocation';
import Container from '@/components/shared/Container';
import React from 'react';

const ContactUsPage = () => {
    return (
        <div className='py-40'>
            <Container>
                <div>
                    <div className='flex flex-col '>
                        <h3 className='text-5xl w-6/12 text-primaryBlack font-semibold pb-4'>Let’s Build Something Extraordinary</h3>
                        <p className='text-primaryBlack/60 w-6/12'>Whether you are interested in investment, collaboration, or just learning more — our team is here to support your journey.</p>
                    </div>
                </div>
                <div className='pt-8'>
                    <ContactFormContainer/>
                </div>
                <OurOfficeLocation/>
            </Container>
        </div>
    );
};

export default ContactUsPage;