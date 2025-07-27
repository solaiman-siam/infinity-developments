import Image from "next/image";
import ContactInfo from "./ContactInfo";
import ContactForm from "./ContactForm";


const ContactFormContainer = () => {
    return (
        <div className=" bg-black/60 p-8 rounded-xl flex items-end">
            <div className="flex-1">
                <ContactInfo/>
            </div>
            <div className="flex-1">
                <ContactForm/>
            </div>
            {/* <Image /> */}
        </div>
    );
};

export default ContactFormContainer;