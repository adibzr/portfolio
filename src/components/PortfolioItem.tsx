export type portfolioItem = {
  img?: string;
  name?: string;
  stack?: any;
  description?: string;
  collaborators?: string;
  repoFront?: string;
  repoBack?: string;
  site?: string;
};

export const PortfolioItem = ({ project }: { project: portfolioItem }) => {
  return (
    <div className="grid grid-cols-[1fr_1.5fr]">
      <img
        src={project.img}
        alt={project.name}
        className="w-[300px] h-[200px] border-2 border-green-400"
      />
      <div>
        <h2>{project.name}</h2>
        <div>
          {project.stack.map((stack: string) => {
            return <p>{stack}</p>;
          })}
        </div>
        <p>{project.collaborators}</p>
        <p>{project.description}</p>
        <div>
          <a href={project.site} target="_blank">
            Site
          </a>
          <a href={project.repoFront} target="_blank">
            Front code
          </a>
          <a href={project.repoBack} target="_blank">
            Back code
          </a>
        </div>
      </div>
    </div>
  );
};
