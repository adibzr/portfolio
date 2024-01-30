import { useEffect, useRef, useState } from "react";
import { backSkills, frontSkills } from "../assets/skills/skills";
import { motion } from "framer-motion";

const Skills = () => {
  const [front, setFrontVis] = useState(false);
  const [back, setBackVis] = useState(false);
  const [frontClicked, setFrontClicked] = useState(false);
  const [backClicked, setBackClicked] = useState(false);

  const width: any = useRef();
  useEffect(() => {}, [width.current]);

  const visibilityFront = () => {
    if (!backClicked && !frontClicked) {
      setFrontVis((prev) => !prev);
      setBackVis(false);
    }
  };

  const visibilityBack = () => {
    if (!backClicked && !frontClicked) {
      setBackVis((prev) => !prev);
      setFrontVis(false);
    }
  };

  const handleClickBack = () => {
    if (!backClicked) {
      setBackClicked(true);
      setFrontClicked(false);
      setBackVis(true);
      setFrontVis(false);
    } else {
      setBackClicked(false);
      if (width.current?.offsetWidth < 800) {
        setBackVis(false);
      }
    }
  };

  const handleClickFront = () => {
    if (!frontClicked) {
      setFrontClicked(true);
      setBackClicked(false);
      setFrontVis(true);
      setBackVis(false);
    } else {
      setFrontClicked(false);
      if (width.current.offsetWidth < 800) {
        setFrontVis(false);
      }
    }
  };

  return (
    <div
      id="skill"
      className="h-screen bg-green-400 relative text-[#D7FADB] px-1 overflow-hidden lg:bg-background bg-cover bg-center 
       "
    >
        <div className="lg:grid grid-cols-2 h-[inherit] items-center lg:mt-0 mt-16 justify-items-center">
          <motion.div 
          variants={{
            hidden: {opacity:0, x:-200},
            fadeIn: {opacity:1, x:0}
          }}
          initial="hidden"
          whileInView="fadeIn"
          transition={{duration:0.5}}
          className="font-bold lg:text-5xl text-4xl lg:m-8 m-4">
            <p>&lt;Skills&gt;</p>
            <p
              className={`ml-20 cursor-pointer m-8 hover:text-[#225f37] ${
                frontClicked ? "text-[#225f37]" : ""
              }`}
              onMouseEnter={() => visibilityFront()}
              onMouseLeave={() => visibilityFront()}
              onClick={() => {
                handleClickFront();
              }}
            >
              &lt;Frontend/&gt;
            </p>

            <p
              className={`ml-20 cursor-pointer m-8 hover:text-[#225f37] ${
                backClicked ? "text-[#225f37]" : ""
              }`}
              onMouseEnter={() => visibilityBack()}
              onMouseLeave={() => visibilityBack()}
              onClick={() => {
                handleClickBack();
              }}
            >
              &lt;Backend/&gt;
            </p>

            <p>&lt;/Skills&gt;</p>
          </motion.div>
          <div
            className={`w-full ${
              front || back ? "opacity-0" : "opacity-100"
            }`}
          >
            <motion.div variants={{
              hidden: {opacity:0, x:200},
              fadeIn: {opacity:1, x:0}
            }}
            initial="hidden"
            whileInView="fadeIn"
            transition={{duration:0.5}}>
              
              <p className="text-4xl p-2">
                " Talk is cheap. Show me the code "
              </p>
              <p className="text-xl pl-12 pt-2">-Linus Torvalds</p>
              <p className="p-20 text-[#225f37]">
                &lt; click tag to show stack
              </p>
            </motion.div>
          </div>
          <div
          
            className={`absolute lg:top-[30%] top-[40%] lg:right-[8rem] ease-in duration-300 lg:w-[inherit] w-full ${
              front
                ? "opacity-100 -translate-x- 0 "
                : "translate-x-full opacity-0"
            }`}
          >
            <h1 className="flex justify-center font-bold text-3xl">
              Front End
            </h1>
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
            className={`absolute lg:top-[30%] top-[40%] lg:right-[8rem] ease-in duration-300 lg:w-[inherit] w-full ${
              back
                ? "opacity-100 -translate-x-0"
                : " translate-x-full opacity-0"
            }`}
          >
            <h1 className="flex justify-center font-bold text-3xl">
              Back End
            </h1>
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
