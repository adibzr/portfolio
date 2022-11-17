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
    <div className="grid grid-cols-[.5fr_2fr]">
      <div className="mt-20 mx-4 flex flex-col  gap-8">
        <h2>{project.name}</h2>
        <div className="flex p-2 ">
          {project.stack.map((stack: string) => {
            return (
              <p key={stack} className="mx-4 px-2 bg-green-400">
                {stack}
              </p>
            );
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
      <img
        src={project.img}
        alt={project.name}
        className="felx w-full  border-2 border-green-400 mt-20 justify-self-center"
      />
    </div>
  );
};
