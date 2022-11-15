import React, { useState } from "react";
import { portfolioItem, PortfolioItem } from "./PortfolioItem";
import { projectsEn, projectsEs } from "../assets/projects";

type project = {
  img: string;
  name: string;
  stack: any;
  collaborators: string;
  description: string;
};

const Portfolio = (spanish: { spanish: boolean }) => {
  const project: project[] = spanish ? projectsEs : projectsEn;
  return (
    <div>
      {project.map((pro) => {
        return <PortfolioItem project={pro} />;
      })}
    </div>
  );
};

export default Portfolio;
