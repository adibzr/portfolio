import { frontSkills } from "../assets/skills/skills";
import { backSkills } from "../assets/skills/skills";

const Skills = () => {
  return (
    <div>
      <div>
        {frontSkills.map((skill) => {
          return (
            <div className='flex gap-6'>
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
  );
};

export default Skills;
