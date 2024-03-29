import { AiFillFilePdf } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { useAppDispatch, useAppSelector } from "../hooks";
import { changeLenguaje, changeProjectLan } from "../slice";

const Nav = () => {
  const spanish = useAppSelector((state) => state.lang.spanish);
  const dispatch = useAppDispatch();

  const handleChangeLan = (e: any) => {
    e.preventDefault();
    dispatch(changeLenguaje());
    dispatch(changeProjectLan());
  };

  return (
    <nav className="fixed flex justify-between w-full lg:px-16 md:px-10 px-2 z-20 top-0 p-2 bg-white/80 ">
      {!spanish ? (
        <button
          className="cursor-pointer z-30 font-bold text-green-400 text-xl px-2"
          onClick={(e) => {
            handleChangeLan(e);
          }}
        >
          Es
        </button>
      ) : (
        <button
          className="cursor-pointer font-bold text-green-400 text-xl px-2"
          onClick={(e) => {
            handleChangeLan(e);
          }}
        >
          En
        </button>
      )}
      <div className="flex px-4 gap-4">
        <a
          rel="noopener noreferrer" href="https://www.linkedin.com/in/adib-raed-a9376823a/"
          target="black"
        >
          <FaLinkedinIn size={25} fill="#4ade80" />
        </a>
        <a rel="noopener noreferrer" href=" https://github.com/adibzr" target="_black">
          <FiGithub size={25} color="#4ade80" />
        </a>
        {spanish ? (
          <a
            rel="noopener noreferrer"
            href="https://drive.google.com/file/d/1Sb0O26QPfC-5WsaPGcGUCVxHRiA5xM05/view?usp=drive_link"
            target="black"
          >
            <AiFillFilePdf size={25} color="#4ade80" />
          </a>
        ) : (
          <a
            rel="noopener noreferrer"
            href="https://drive.google.com/file/d/1nPabCZ0Skj-dRM6Qxz5u5bWSIilKELcD/view?usp=drive_link"
            target="black"
          >
            <AiFillFilePdf size={25} color="#4ade80" />
          </a>
        )}
      </div>
    </nav>
  );
};

export default Nav;
