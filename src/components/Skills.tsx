import { useState } from "react";
import { backSkills, frontSkills } from "../assets/skills/skills";

const Skills = () => {
  const [front, setFrontVis] = useState(false);
  const [back, setBackVis] = useState(false);

  const visibilityFront = () => {
    setBackVis(false);
    setFrontVis(true);
  };
  const visibilityBack = () => {
    setFrontVis(false);
    setBackVis(true);
  };

  return (
    <div
      id="skill"
      className="h-screen bg-green-500 relative text-white px-1 overflow-hidden
    after:w-full after:h-1/6 after:absolute after:left-0 after:bottom-0 after:border-r-[100vw] after:border-white after:border-t-[15vh] after:border-t-green-500"
    >
      <div className="grid grid-cols-2 h-[inherit] items-center justify-items-center">
        <p className="font-bold text-5xl leading-relaxed">
          <p>&lt;Skills&gt;</p>
          <p className="ml-20" onClick={() => visibilityFront()}>
            &lt;Frontend/&gt;
          </p>
          <p className="ml-20" onClick={() => visibilityBack()}>
            &lt;Backend/&gt;
          </p>
          <p>&lt;/Skills&gt;</p>
        </p>

        <div
          className={`absolute top-16 right-[8rem] ease-in duration-300 ${
            front
              ? "opacity-100 -translate-x- 0 "
              : "translate-x-full opacity-0"
          }`}
        >
          <h1 className="pl-28 my-10 pt-10 font-bold text-3xl">Front End</h1>
          <div className="grid grid-cols-3 gap-8 p-16">
            {frontSkills.map((skill) => {
              return (
                <div key={skill.name} className="">
                  <img
                    height="40px"
                    width="40px"
                    src={skill.img}
                    alt={skill.name}
                  />
                  {skill.name}
                </div>
              );
            })}
          </div>
        </div>
        <div
          className={`absolute top-16 right-[8.5rem] ease-in duration-300 ${
            back ? "opacity-100 -translate-x-0" : " translate-x-full opacity-0"
          }`}
        >
          <h1 className="pl-28 my-10 pt-10 font-bold text-3xl">Back End</h1>
          <div className="grid grid-cols-3 gap-8 p-16">
            {backSkills.map((skill) => {
              return (
                <div key={skill.name}>
                  <img
                    className="bg-none"
                    height="40px"
                    width="40px"
                    src={skill.img}
                    alt={skill.name}
                  />
                  {skill.name}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
