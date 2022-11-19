import { useAppDispatch, useAppSelector } from "../hooks";
import { Link } from "react-scroll";
import Fade from "react-reveal/Fade";

const Intro = () => {
  const { spanish } = useAppSelector((state) => state.lang);

  return (
    <section className="flex justify-center min-h-screen items-center font-bold text-6xl ">
      {spanish ? (
        <Fade left cascade>
          <div className="lg:max-w-[1140px] md:max-w-[720px] w-full px-4 mx-auto">
            <h1 className="mb-10">
              Hola, mi nombre es <p className="text-green-400 inline">Adib</p>
              <br />
              Soy desarrolador web fullstack
            </h1>

            <div className="flex gap-4 text-green-400 text-3xl ml-6">
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
          </div>
        </Fade>
      ) : (
        <Fade left cascade>
          <div className="lg:max-w-[1140px] md:max-w-[720px] w-full px-4 mx-auto">
            <h1 className="mb-10">
              Hi, I'm <p className="text-green-400 inline">Adib</p> <br />
              I'm a fullstack web developer
            </h1>
            <div className="flex gap-4 text-green-400 text-3xl ml-6">
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
          </div>
        </Fade>
      )}
    </section>
  );
};

export default Intro;
