import { frontSkills } from "../assets/skills/skills";
import { backSkills } from "../assets/skills/skills";

const Skills = () => {
  return (
    <div id="skill" className="h-screen">
      <div className="grid grid-cols-3 gap-4">
        <div className="grid grid-cols-3 gap-4">
          <h1>Front End</h1>
          {frontSkills.map((skill) => {
            return (
              <div className="flex gap-6">
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
        <div className="grid grid-cols-3 gap-4">
          <h1>Back End</h1>
          {backSkills.map((skill) => {
            return (
              <div className="flex gap-6">
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
    </div>
  );
};

export default Skills;
