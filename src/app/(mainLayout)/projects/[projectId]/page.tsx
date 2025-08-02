import AboutProject from "@/components/project-details/AboutProject";
import FloorPlan from "@/components/project-details/FloorPlan";
import HeroImageSlider from "@/components/project-details/HeroImageSlider";
import Living from "@/components/project-details/Living";
import NearbyLiving from "@/components/project-details/NearbyLiving";
import ProjectLocation from "@/components/project-details/ProjectLocation";
import VisualSymphony from "@/components/project-details/VisualSymphony";

const ProjectDetails = async ({
  params,
}: {
  params: Promise<{ projectId: string }>;
}) => {
  const { projectId } = await params;
  console.log(projectId);

  return (
    <div className="">
      <HeroImageSlider />
      <AboutProject />
      <VisualSymphony />
      <FloorPlan />
      <Living />
      <ProjectLocation />
      <NearbyLiving />
    </div>
  );
};

export default ProjectDetails;
