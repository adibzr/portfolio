import { backSkills, frontSkills } from "../assets/skills/skills";



const Skills = () => {


  return (
    <div id="skill" className="h-screen relative text-white">
      <svg
        className="absolute h-screen w-screen top-0 bottom-0 right-0 left-0 z-10"
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        width="1440"
        height="560"
        preserveAspectRatio="none"
        viewBox="0 0 1440 560"
      >
        <g mask='url("#SvgjsMask1069")' fill="none">
          <rect
            width="1440"
            height="560"
            x="0"
            y="0"
            fill="rgba(11, 162, 117, 1)"
          ></rect>
          <path
            d="M0,406.239C74.244,397.696,126.014,334.14,186.79,290.65C244.196,249.571,311.941,219.788,346.542,158.26C382.534,94.258,397.004,16.887,381.046,-54.786C365.575,-124.269,302.844,-168.564,260.956,-226.12C214.359,-290.148,193.667,-380.622,121.004,-412.101C47.24,-444.057,-36.879,-410.929,-114.104,-388.603C-191.616,-366.194,-275.572,-345.488,-326.336,-282.772C-376.584,-220.693,-380.641,-135.004,-383.963,-55.206C-387.023,18.289,-373.524,89.741,-344.661,157.401C-315.209,226.442,-277.479,293.132,-216.622,337.07C-153.896,382.357,-76.859,415.083,0,406.239"
            fill="#098a63"
          ></path>
          <path
            d="M1440 944.923C1514.708 950.26 1583.38 918.081 1653.888 892.816 1744.754 860.256 1865.217 859.9549999999999 1912.289 775.687 1958.865 692.308 1903.222 588.65 1874.712 497.498 1850.026 418.572 1803.368 353.483 1758.508 284.012 1705.758 202.32299999999998 1682.466 79.27699999999999 1588.498 54.26400000000001 1494.083 29.131999999999948 1411.713 123.45499999999998 1325.086 168.64 1255.727 204.81900000000002 1182.179 233.08999999999997 1131.468 292.656 1081.03 351.902 1051.064 425.476 1040.772 502.6 1030.549 579.206 1035.413 660.121 1073.452 727.3969999999999 1110.117 792.2429999999999 1180.825 825.582 1244.888 863.6 1306.734 900.302 1368.266 939.799 1440 944.923"
            fill="#0dba87"
          ></path>
        </g>
        <defs>
          <mask id="SvgjsMask1069">
            <rect width="1440" height="560" fill="#ffffff"></rect>
          </mask>
        </defs>
      </svg>
      <div className="absolute top-0 bottom-0 right-0 left-0 z-20">
        <h1 className="flex justify-center font-bold text-5xl pt-10 pb-20">
          Skills
        </h1>
        <div className="grid grid-cols-2 pb-20 items-center justify-items-center">
          <div className="grid grid-cols-3 gap-8 mx-8 p-16 items-center gap-y-20 bg-white/30 rounded-md">
            <h1 className="col-span-3 justify-self-center font-bold text-3xl">
              Front End
            </h1>
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
          <div className="grid grid-cols-3 gap-8 mx-8 p-16 items-center gap-y-20 bg-white/30 rounded-md">
            <h1 className="col-span-3 justify-self-center font-bold text-3xl">
              Back End
            </h1>
            {backSkills.map((skill) => {
              return (
                <div key={skill.name} className="">
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
