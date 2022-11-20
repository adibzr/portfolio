import { useEffect } from "react";
import { useAppSelector } from "../hooks";
import { changeProjectLan } from "../slice";
import { PortfolioItem } from "./PortfolioItem";

const Portfolio = () => {
  const { projects } = useAppSelector((state) => state.lang);
  useEffect(() => {
    changeProjectLan();
  }, []);
  const { spanish } = useAppSelector((state) => state.lang);

  return (
    <div
      id="project"
      className="min-h-screen xl:max-w-[1200px] lg:max-w-[960px] md:max-w-[720px] max-w-[540px] md:mx-auto pt-6 mx-6"
    >
      <h2 className="my-[4.5rem] text-center font-bold text-4xl">
        {spanish ? "PROYECTOS" : "PROJECTS"}
      </h2>
      {projects.map((pro) => {
        return <PortfolioItem project={pro} />;
      })}
    </div>
  );
};

export default Portfolio;
