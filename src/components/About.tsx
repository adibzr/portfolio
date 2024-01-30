import { useAppSelector } from "../hooks";
import { motion } from "framer-motion";

const About = () => {
  const spanish = useAppSelector((state) => state.lang.spanish);

  return (
    <motion.div variants={{
          hidden: {opacity:0, x:200},
          fadeIn: {opacity:1, x:0}
        }}
        initial="hidden"
        whileInView="fadeIn"
        transition={{duration:0.5}}>
      {spanish ? (
        <div
        
          id="about"
          className="grid items-end p-20 h-screen bg-green-500 overflow-hidden text-[#6c6c6c]
          lg:bg-background bg-cover bg-center"
        >
          <h2 className="justify-start flex flex-col items-center  pb-8 pt-[8%] font-bold text-4xl ">
            ACERCA DE MI
          </h2>
          <div className=" m-4 text-lg leading-8 h-full justify-items-center ">
              <div>
                <p className="m-6">
                  Comencé a programar cuando era pequeño, haciendo pequeños cambios en juegos que me gustaban. Después de la escuela secundaria, me inscribí en ciencias de la computación. Después de unos años, me di cuenta de que no estaba haciendo lo que me gustaba. Eventualmente, comencé un bootcamp de un año donde finalmente pude encontrar mi vocación en el desarrollo web. Ahora estoy súper emocionado de empezar a trabajar en tecnología.
                </p>
                <a
                  href="https://drive.google.com/file/d/1Sb0O26QPfC-5WsaPGcGUCVxHRiA5xM05/view?usp=drive_link"
                  target={"_blank"}
                  className=" md:inline-block md:text-[inherit] text-green-500 bg-white md:bg-transparent mx-8 flex justify-center font-bold px-12 cursor-pointer p-2 border-2 border-white-500 hover:shadow-[inset_400px_0_0_0_rgb(255,255,255)] hover:text-green-500 "
                >
                  CV
                </a>
              </div>
          </div>
        </div>
      ) : (
        <div
          id="about"
          className="grid items-end p-20 h-screen bg-green-500 overflow-hidden text-[#6c6c6c]
          lg:bg-background bg-cover bg-center"
        >
          <h2 className="justify-start flex flex-col items-center  pb-8 pt-[8%] font-bold text-4xl ">
            ABOUT
          </h2>
          <div className=" m-4 text-lg leading-8 h-full justify-items-center ">
              <div>
                <p className="m-6">
                I started programming when I was little, making small changes to games that I liked. After high school, I enrolled in computer science. After a few years, I realized that I wasn't doing what I liked. Eventually, I started a 1-year bootcamp where I was finally able to find my vocation in web development. Now I'm super excited to start working in technology.
                </p>
                <a
                  href={
                    "https://drive.google.com/file/d/1nPabCZ0Skj-dRM6Qxz5u5bWSIilKELcD/view?usp=drive_link"
                  }
                  target={"_blank"}
                  className="md:inline-block md:text-[inherit] text-green-500 bg-white md:bg-transparent mx-8 flex justify-center font-bold px-12 cursor-pointer p-2 border-2 border-white-500 hover:shadow-[inset_400px_0_0_0_rgb(255,255,255)] hover:text-green-500 "
                >
                  CV
                </a>
              </div>
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default About;
