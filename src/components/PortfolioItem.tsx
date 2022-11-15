import React from "react";

export type portfolioItem = {
  img?: string;
  name?: string;
  stack?: any;
  description?: string;
  collaborators?: string;
};

export const PortfolioItem = ({ project }: { project: portfolioItem }) => {
  return (
    <div>
      <img src={project.img} alt={project.name} />
      <span>{project.name}</span>
      <div>
        {project.stack.map((stack: string) => {
          <span>{stack}</span>;
        })}
      </div>
      <p>{project.description}</p>
    </div>
  );
};
