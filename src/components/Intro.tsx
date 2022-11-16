import { AiFillFilePdf } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { useAppDispatch, useAppSelector } from "../hooks";
import { changeLenguaje } from "../slice";
import { Link } from "react-scroll";

//<Link to="test1" spy={true} smooth={true} offset={50} duration={500}
const Intro = () => {
  const { spanish } = useAppSelector((state) => state.lang);
  const dispatch = useAppDispatch();

  const handleChangeLan = () => {
    dispatch(changeLenguaje());
  };
  return (
    <section className="flex justify-center min-h-screen items-center font-bold text-6xl ">
      <nav className=" flex justify-between w-full px-4 absolute top-0 p-2 ">
        {spanish ? (
          <button
            className="cursor-pointer font-bold text-green-400 text-xl px-2"
            onClick={() => {
              handleChangeLan();
            }}
          >
            Es
          </button>
        ) : (
          <button
            className="cursor-pointer font-bold text-green-400 text-xl px-2"
            onClick={() => {
              handleChangeLan();
            }}
          >
            En
          </button>
        )}
        <div className="flex px-4 gap-4">
          <a
            href="https://www.linkedin.com/in/adib-raed-a9376823a/"
            target="_black"
          >
            <FaLinkedinIn size={25} fill="#15EE0A" />
          </a>
          <a href=" https://github.com/adibzr" target="_black">
            <FiGithub size={25} color="#15EE0A" />
          </a>
          <a href="#" target="_black">
            <AiFillFilePdf size={25} color="#15EE0A" />
          </a>
        </div>
      </nav>
      {spanish ? (
        <div className="lg:max-w-[1140px] md:max-w-[720px] w-full px-4 mx-auto">
          <h1 className="mb-10">
            Hola, mi nombre es <p className="text-green-400 inline">Adib</p>
            <br />
            Soy Desarrolador web fullstack
          </h1>
          <div className="flex gap-4 text-green-400 text-3xl ml-6">
            <Link
              to="skills"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              className="cursor-pointer p-2 border border-green-500shadow-[inset_0_0_0_0_rgb(34,197,94)] ease-in duration-500 hover:shadow-[inset_400px_0_0_0_rgb(34,197,94)]  hover:text-white"
            >
              Skills
            </Link>
            <Link
              to="project"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              className="cursor-pointer p-2 border border-green-500shadow-[inset_0_0_0_0_rgb(34,197,94)] ease-in duration-500 hover:shadow-[inset_400px_0_0_0_rgb(34,197,94)] hover:text-white "
            >
              proyectos
            </Link>
            <Link
              to="acerca"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              className="cursor-pointer p-2 border border-green-500shadow-[inset_0_0_0_0_rgb(34,197,94)] ease-in duration-500 hover:shadow-[inset_400px_0_0_0_rgb(34,197,94)] hover:text-white "
            >
              Acerca de mi
            </Link>
            <Link
              to="contacto"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              className="cursor-pointer p-2 border border-green-500shadow-[inset_0_0_0_0_rgb(34,197,94)] ease-in duration-500 hover:shadow-[inset_400px_0_0_0_rgb(34,197,94)] hover:text-white "
            >
              Contacto
            </Link>
          </div>
        </div>
      ) : (
        <div>
          <h1 className="mb-10">
            Hi, I'm <p className="text-green-400 inline">Adib</p> <br />
            I'm a fullstack web developer
          </h1>
          <div className="flex gap-4 text-green-400 text-3xl ml-6">
            <Link
              to="skillsEn"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              className="cursor-pointer p-2 border border-green-500shadow-[inset_0_0_0_0_rgb(34,197,94)] ease-in duration-500 hover:shadow-[inset_400px_0_0_0_rgb(34,197,94)] hover:text-white "
            >
              Skills
            </Link>
            <Link
              to="project"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              className="cursor-pointer p-2 border border-green-500shadow-[inset_0_0_0_0_rgb(34,197,94)] ease-in duration-500 hover:shadow-[inset_400px_0_0_0_rgb(34,197,94)] hover:text-white "
            >
              Projects
            </Link>
            <Link
              to="about"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              className="cursor-pointer p-2 border border-green-500shadow-[inset_0_0_0_0_rgb(34,197,94)] ease-in duration-500 hover:shadow-[inset_400px_0_0_0_rgb(34,197,94)] hover:text-white "
            >
              About
            </Link>
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              className="cursor-pointer p-2 border border-green-500shadow-[inset_0_0_0_0_rgb(34,197,94)] ease-in duration-500 hover:shadow-[inset_400px_0_0_0_rgb(34,197,94)] hover:text-white "
            >
              Contact
            </Link>
          </div>
        </div>
      )}

      {/* <p className="flex items-center justify-center py-10">
        con formación como Diseñador Web. Experiencia trabajando en NodeJS,
        React, Redux, SQL entre otras tecnologías del sector.
        <br />
        Forme parte de un equipo para la creación de un pagina de barberia que
        incluye, manejo de turnos y compra de productos.
        <br />
        Con pensamiento creativo, resolución de problemas, trabajo en equipo,
        comunicación y autonomía.
      </p> */}
    </section>
  );
};

export default Intro;
