import Image from "next/image";
import Container from "../shared/Container";
import { localImages } from "@/utils/imageProvider";


const ProjectLocation = () => {
    return (
        <div className="py-24 bg-[#B8B8B833]">
            <Container>
                <div>
                    <h3 className="text-4xl font-semibold pb-20 text-center">Project Locations</h3>
                    <div className="w-full h-[600px]" >
                        <Image className="w-full h-full" src={localImages.MapImage} alt="location-img"/>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default ProjectLocation;