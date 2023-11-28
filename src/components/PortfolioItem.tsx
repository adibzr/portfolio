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
      <div className="flex md:flex-row flex-col gap-8 justify-between mb-10">
          <div className="flex flex-col gap-6">
            <h3 className="font-bold text-2xl">{project.name}</h3>
            <div className="flex flex-wrap gap-4">
              {project.stack.map((stack: string) => {
                return (
                  <p
                    key={project.name + stack}
                    className="bg-green-400 inline-block p-2 "
                  >
                    {stack}
                  </p>
                );
              })}
            </div>
            <div>
              {spanish ? (
                <p className="text-lg font-semibold">Colaboradores: </p>
              ) : (
                <p className="text-lg font-semibold">Collaborators: </p>
              )}
              {project.collaborators}
            </div>
            <div>
              {spanish ? (
                <p className="text-lg font-semibold">Acerta del proyecto: </p>
              ) : (
                <p className="text-lg font-semibold">About the project: </p>
              )}
              {project.description}
            </div>
            <div className="text-[#D7FADB]">
              <a
                className="bg-black/50 m-2 rounded-md font-semibold p-2"
                href={project.site}
                target="_blank"
              >
                Site
              </a>
              <a
                className="bg-black/50 m-2 rounded-md font-semibold p-2"
                href={project.repoFront}
                target="_blank"
              >
                Front code
              </a>
              <a
                className="bg-black/50 m-2 rounded-md font-semibold p-2"
                href={project.repoBack}
                target="_blank"
              >
                Back code
              </a>
            </div>
          </div>
          <img
            src={project.img}
            alt={project.name}
            className=" border-2 border-green-400 md:max-w-[60%] max-w-full"
          />
      </div>
      <hr className=" w-3/4 mx-auto border border-black/20 my-8" />
    </div>
  );
};
