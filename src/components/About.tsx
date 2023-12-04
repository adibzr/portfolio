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
          className="h-screen bg-green-500 relative  px-1 overflow-hidden text-[#6c6c6c]
          lg:bg-background bg-cover bg-center"
        >
          <h2 className="justify-start flex flex-col items-center  pb-8 pt-[8%] font-bold text-4xl ">
            ACERCA DE MI
          </h2>
          <div className=" m-4 text-sm h-full justify-items-center ">
              <div>
                <p className="my-6">
                  Comencé mis estudios de ingeniería de software en la
                  Universidad de Buenos Aires, continué en UADE por un par de
                  años y terminé estudios como desarrollador web Fullstack en
                  Henry bootcamp. <br />A través de mis estudios aprendí los
                  conceptos básicos del software que me dieron una comprensión
                  más profunda de la programación.
                  <br /> En Henry bootcamp pude desarrolar mis habilidad de
                  programador y mis habilidades de trabajo en equipo a travez de
                  dos proyectos (Videojuegos y barberia).
                  <br />
                  Finalmente encontré mi vocación en la programación. <br />
                  Estoy muy emocionado de comenzar este nuevo capítulo en mi
                  vida donde puedo, finalmente, hacer lo que he amado durante
                  tantos años.
                </p>
                <a
                  href="https://drive.google.com/file/d/1oe5sDaUGdoDZQc1DHEK5fBW9Ef5_fI-_/view?usp=sharing"
                  target={"_blank"}
                  className=" md:inline-block md:text-[inherit] text-green-500 bg-white md:bg-transparent flex justify-center font-bold px-12 cursor-pointer p-2 border-2 border-white-500 hover:shadow-[inset_400px_0_0_0_rgb(255,255,255)] hover:text-green-500 "
                >
                  CV
                </a>
              </div>
          </div>
        </div>
      ) : (
        <div
          id="about"
          className="h-screen bg-green-500 relative  px-1 overflow-hidden text-[#6c6c6c]
          lg:bg-background bg-cover bg-center
    "
        >
          <h2 className="justify-start flex flex-col items-center  pb-8 pt-[8%] font-bold text-4xl ">
            ABOUT
          </h2>
          <div className=" m-4 text-sm h-full justify-items-center ">
              <div>
                <p className="my-6">
                  I began studies in software engineering in Universidad de
                  Buenos Aires, continued in UADE for a couple of years and
                  finished studies as Fullstack web developer in Henry bootcamp.
                  <br />
                  Through my studies i learned the basics of software that gave
                  me a deeper understanding of programming.
                  <br />
                  In Henry bootcamp I built a web app using a videogame API
                  where different videogames are shown and can be filtered,
                  ordered and searched. <br />
                  I was, also, part of a group of six that was tasked to build a
                  barbershop website that included login, product cart with
                  purchase system, appointments and admin management.
                  <br />I finally found my vocation in programming. I’m very
                  excited to begin this new chapter in my life where i can,
                  finally, dedicate myself to doing what i love.
                </p>
                <a
                  href={
                    "https://drive.google.com/file/d/1fkuGGAtaz5i0fO6kokma0_AyOUv1Gcq-/view?usp=sharing"
                  }
                  target={"_blank"}
                  className="md:inline-block md:text-[inherit] text-green-500 bg-white md:bg-transparent flex justify-center font-bold px-12 cursor-pointer p-2 border-2 border-white-500 hover:shadow-[inset_400px_0_0_0_rgb(255,255,255)] hover:text-green-500"
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
