import Fade from "react-reveal/Fade";
import { useAppSelector } from "../hooks";

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
  const { spanish } = useAppSelector((state) => state.lang);

  return (
    <div className="">
      <div className="flex gap-8 justify-between mb-20">
        <Fade left>
          <div className="flex flex-col gap-6">
            <h3 className="font-bold text-2xl">{project.name}</h3>
            <div className="flex flex-wrap gap-4">
              {project.stack.map((stack: string) => {
                return (
                  <p key={stack} className="bg-green-400 inline-block p-2">
                    {stack}
                  </p>
                );
              })}
            </div>
            <p>
              {spanish ? (
                <p className="text-lg font-semibold">Colaboradores: </p>
              ) : (
                <p className="text-lg font-semibold">Collaborators: </p>
              )}
              {project.collaborators}
            </p>
            <p>
              {spanish ? (
                <p className="text-lg font-semibold">Acerta del proyecto: </p>
              ) : (
                <p className="text-lg font-semibold">About the project: </p>
              )}
              {project.description}
            </p>
            <div>
              <a
                className="bg-black/50 m-2 rounded-md text-white font-semibold p-2"
                href={project.site}
                target="_blank"
              >
                Site
              </a>
              <a
                className="bg-black/50 m-2 rounded-md text-white font-semibold p-2"
                href={project.repoFront}
                target="_blank"
              >
                Front code
              </a>
              <a
                className="bg-black/50 m-2 rounded-md text-white font-semibold p-2"
                href={project.repoBack}
                target="_blank"
              >
                Back code
              </a>
            </div>
          </div>
        </Fade>
        <Fade right cascade>
          <img
            src={project.img}
            alt={project.name}
            className=" border-2 border-green-400 max-w-[60%]"
          />
        </Fade>
      </div>
    </div>
  );
};
