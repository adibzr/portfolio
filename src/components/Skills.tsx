import { useEffect, useRef, useState } from "react";
import { backSkills, frontSkills } from "../assets/skills/skills";

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
      ref={width}
      id="skill"
      className="h-screen bg-green-500 relative text-[#D7FADB] px-1 overflow-hidden
    after:w-full after:h-1/6 after:absolute after:left-0 after:bottom-0 lg:after:border-r-[100vw] after:border-white lg:after:border-t-[15vh] after:border-t-green-500
    before:w-full before:h-1/6 before:absolute before:left-0 before:top-0 lg:before:border-r-[100vw] before:border-white lg:before:border-t-[15vh] before:border-r-green-500"
    >
        <div className="lg:grid grid-cols-2 h-[inherit] items-center lg:mt-0 mt-16 justify-items-center">
          <div className="font-bold lg:text-5xl text-4xl lg:m-8 m-4">
            <p>&lt;Skills&gt;</p>
            <p
              className={`ml-20 cursor-pointer m-8 hover:text-blue-900 ${
                frontClicked ? "text-blue-900" : ""
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
              className={`ml-20 cursor-pointer m-8 hover:text-blue-900 ${
                backClicked ? "text-blue-900" : ""
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
          </div>
          <div
            className={`absolute md:top-[20%] bottom-[30%] lg:right-[8rem] ease-in-out duration-200 lg:w-[inherit] w-full ${
              front || back ? "opacity-0" : "opacity-100"
            }`}
          >
            <div>
              {width.current?.offsetWidth < 800 ? (
                <p className="p-16 text-blue-900">
                  press on a tag to show stack
                </p>
              ) : (
                <p className="pt-16 p-20 text-blue-900">
                  &lt; click or hover on a tag to show stack
                </p>
              )}
              <p className="text-4xl p-2">
                " Talk is cheap. Show me the code "
              </p>
              <p className="text-xl pl-12 pt-2">-Linus Torvalds</p>
            </div>
          </div>
          <div
            className={`absolute lg:top-16 top-[40%] lg:right-[8rem] ease-in duration-300 lg:w-[inherit] w-full ${
              front
                ? "opacity-100 -translate-x- 0 "
                : "translate-x-full opacity-0"
            }`}
          >
            <h1 className="lg:pl-28 pl-16 lg:my-10 lg:pt-10 font-bold text-3xl">
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
            className={`absolute lg:top-16 top-[40%] lg:right-[8rem] ease-in duration-300 lg:w-[inherit] w-full ${
              back
                ? "opacity-100 -translate-x-0"
                : " translate-x-full opacity-0"
            }`}
          >
            <h1 className="lg:pl-28 pl-16 lg:my-10 lg:pt-10 font-bold text-3xl">
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
