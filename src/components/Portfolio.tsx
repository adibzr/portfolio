import { PortfolioItem } from "./PortfolioItem";
import { projectsEn, projectsEs } from "../assets/projects/projects";
import { useAppSelector } from "../hooks";

type project = {
  img: string;
  name: string;
  stack: any;
  collaborators: string;
  description: string;
};

const Portfolio = () => {
  const { spanish } = useAppSelector((state) => state.lang);

  const project: project[] = spanish ? projectsEs : projectsEn;
  return (
    <div id="project" className="min-h-screen">
      {project.map((pro) => {
        return <PortfolioItem project={pro} />;
      })}
    </div>
  );
};

export default Portfolio;
