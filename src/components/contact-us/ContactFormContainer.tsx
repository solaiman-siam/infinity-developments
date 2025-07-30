import Image from "next/image";
import ContactInfo from "./ContactInfo";
import ContactForm from "./ContactForm";
import { localImages } from "@/utils/imageProvider";


const ContactFormContainer = () => {
    return (
        <div className="relative  overflow-hidden p-8 rounded-xl flex items-end">
            <div className="flex-1 relative z-8">
                <ContactInfo/>
            </div>
            <div className="flex-1 relative z-8">
                <ContactForm/>
            </div>
            <Image className="absolute z-4 top-0 left-0 w-full h-full object-cover " src={localImages.OurProjects} alt="form-image" />
        </div>
    );
};

export default ContactFormContainer;