import { AiFillFilePdf } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";

//<Link to="test1" spy={true} smooth={true} offset={50} duration={500}
const Intro = ({
  spanish,
  setSpanish,
}: {
  spanish: boolean;
  setSpanish: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <div className=" ">
      <div className=" flex p-2 justify-between">
        {spanish ? (
          <button
            className="cursor-pointer bg-[#006A85] font-bold text-[#15ee0a] px-2"
            onClick={() => {
              setSpanish(!spanish);
            }}
          >
            Es
          </button>
        ) : (
          <button
            className="cursor-pointer bg-[#006A85] font-bold text-[#15ee0a] px-2"
            onClick={() => {
              setSpanish(!spanish);
            }}
          >
            En
          </button>
        )}
        <div className="flex px-4 gap-4">
          <FaLinkedinIn size={25} fill="#15EE0A" />
          <FiGithub size={25} color="#15EE0A" />
          <AiFillFilePdf size={25} color="#15EE0A" />
        </div>
      </div>
      {spanish ? (
        <p>
          <h1>Hola, mi nombre es Adib </h1>
          <h1>Soy Desarrolador web fullstack</h1>
        </p>
      ) : (
        <p>
          <h1>Hi, I'm Adib </h1>
          <h1>I'm a fullstack web developer</h1>
        </p>
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
    </div>
  );
};

export default Intro;
