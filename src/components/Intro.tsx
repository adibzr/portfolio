import { Link } from "react-scroll";
import { useAppSelector } from "../hooks";
import {motion} from "framer-motion"

const Intro = () => {
  const { spanish } = useAppSelector((state) => state.lang);


  return (
    <section className="flex p-12 justify-center min-h-screen h-screen items-center font-bold text-6xl ">
        {spanish ? (
          <motion.div 
            variants={{
              hidden: {opacity:0, x:200},
              fadeIn: {opacity:1, x:0}
            }}
            initial="hidden"
            whileInView="fadeIn"
            transition={{duration:0.5}}
            className="lg:max-w-[1140px] md:max-w-[720px] w-full px-4 mx-auto ">
            <h1 className="mb-10">
              Hola, mi nombre es <p className="text-green-400 inline">Adib</p>
              <br />
              Soy desarrolador web fullstack
            </h1>

            <div className="flex md:flex-row flex-col gap-4 text-green-400 text-3xl ml-6">
              <Link
                to="skill"
                spy={true}
                smooth={true}
                duration={500}
                className="cursor-pointer p-2 border border-green-400 shadow-[inset_0_0_0_0_rgb(34,197,94)] ease-in duration-300 hover:shadow-[inset_400px_0_0_0_rgb(34,197,94)] hover:text-white "
              >
                Skills
              </Link>
              <Link
                to="project"
                spy={true}
                smooth={true}
                duration={500}
                className="cursor-pointer p-2 border border-green-500 shadow-[inset_0_0_0_0_rgb(34,197,94)] ease-in duration-300 hover:shadow-[inset_400px_0_0_0_rgb(34,197,94)] hover:text-white "
              >
                Proyectos
              </Link>
              <Link
                to="about"
                spy={true}
                smooth={true}
                duration={500}
                className="cursor-pointer p-2 border border-green-500 shadow-[inset_0_0_0_0_rgb(34,197,94)] ease-in duration-300 hover:shadow-[inset_400px_0_0_0_rgb(34,197,94)] hover:text-white "
              >
                Acerca de mi
              </Link>
              <Link
                to="contact"
                spy={true}
                smooth={true}
                duration={500}
                className="cursor-pointer p-2 border border-green-500 shadow-[inset_0_0_0_0_rgb(34,197,94)] ease-in duration-300 hover:shadow-[inset_400px_0_0_0_rgb(34,197,94)] hover:text-white "
              >
                Contacto
              </Link>
            </div>
          </motion.div>
        ) : (
          <motion.div 
            variants={{
              hidden: {opacity:0, x:200},
              fadeIn: {opacity:1, x:0}
            }}
            initial="hidden"
            whileInView="fadeIn"
            transition={{duration:0.5}}
            className="lg:max-w-[1140px] md:max-w-[720px] w-full px-4 mx-auto">
            <h1 className="mb-10">
              Hi, I'm <p className="text-green-400 inline">Adib</p> <br />
              I'm a fullstack web developer
            </h1>
            <div className="flex md:flex-row flex-col md:w-[inherit] w-[70%] gap-4 text-green-400 text-3xl ml-6">
              <Link
                to="skill"
                spy={true}
                smooth={true}
                duration={500}
                className="cursor-pointer p-2 border border-green-500 shadow-[inset_0_0_0_0_rgb(34,197,94)] ease-in duration-300 hover:shadow-[inset_400px_0_0_0_rgb(34,197,94)] hover:text-white "
              >
                Skills
              </Link>
              <Link
                to="project"
                spy={true}
                smooth={true}
                duration={500}
                className="cursor-pointer p-2 border border-green-500 shadow-[inset_0_0_0_0_rgb(34,197,94)] ease-in duration-300 hover:shadow-[inset_400px_0_0_0_rgb(34,197,94)] hover:text-white "
              >
                Projects
              </Link>
              <Link
                to="about"
                spy={true}
                smooth={true}
                duration={500}
                className="cursor-pointer p-2 border border-green-500 shadow-[inset_0_0_0_0_rgb(34,197,94)] ease-in duration-300 hover:shadow-[inset_400px_0_0_0_rgb(34,197,94)] hover:text-white "
              >
                About
              </Link>
              <Link
                to="contact"
                spy={true}
                smooth={true}
                duration={500}
                className="cursor-pointer p-2 border border-green-500 shadow-[inset_0_0_0_0_rgb(34,197,94)] ease-in duration-300 hover:shadow-[inset_400px_0_0_0_rgb(34,197,94)] hover:text-white "
              >
                Contact
              </Link>
            </div>
          </motion.div>
        )}
    </section>
  );
};

export default Intro;
