import profile from "../assets/perfil linkedIn.jpg";
import { useAppSelector } from "../hooks";

const About = () => {
  const spanish = useAppSelector((state) => state.lang.spanish);

  return (
    <div>
      {spanish ? (
        <div
          id="about"
          className="h-screen bg-green-500 relative  px-1 overflow-hidden text-[#D7FADB]
  after:w-full after:h-1/6 after:absolute after:left-0 after:bottom-0 md:after:border-r-[100vw] after:border-white md:after:border-t-[15vh] after:border-t-green-500
  before:w-full before:h-1/6 before:absolute before:left-0 before:top-0 md:before:border-r-[100vw] before:border-white md:before:border-t-[15vh] before:border-r-green-500
  "
        >
          <h2 className="justify-start flex flex-col items-center  pb-8 pt-[8%] font-bold text-4xl ">
            ACERCA DE MI
          </h2>
          <div className=" md:grid grid-cols-2 h-full justify-items-center ">
            <img
              src={profile}
              alt="my profile"
              className="h-[280px] md:mx-0 mx-auto rounded-xl"
            />
            <div>
              <p className="p-8">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime
                quis harum sunt cupiditate, odit dolorem dicta deleniti
                excepturi minima magnam tempora illo perferendis ipsa molestiae
                delectus voluptatibus asperiores et? Repellat excepturi
                reprehenderit rerum architecto. Doloribus maiores similique
                necessitatibus placeat quasi, aspernatur accusantium fugit ipsum
                velit ex dolore impedit rerum soluta!
              </p>
              <a className="md:m-8 m-4 md:inline-block md:text-[inherit] text-green-500 bg-white md:bg-transparent flex justify-center font-bold px-12 cursor-pointer p-2 border-2 border-white-500 shadow-[inset_0_0_0_0_rgb(34,197,94)] ease-in duration-300 hover:shadow-[inset_400px_0_0_0_rgb(255,255,255)] hover:text-green-500 ">
                CV
              </a>
            </div>
          </div>
        </div>
      ) : (
        <div
          id="about"
          className="h-screen bg-green-500 relative  px-1 overflow-hidden text-[#D7FADB]
    after:w-full after:h-1/6 after:absolute after:left-0 after:bottom-0 md:after:border-r-[100vw] after:border-white md:after:border-t-[15vh] after:border-t-green-500
    before:w-full before:h-1/6 before:absolute before:left-0 before:top-0 md:before:border-r-[100vw] before:border-white md:before:border-t-[15vh] before:border-r-green-500
    "
        >
          <h2 className="justify-start flex flex-col items-center  pb-8 pt-[8%] font-bold text-4xl ">
            ABOUT
          </h2>
          <div className=" md:grid grid-cols-2 h-full justify-items-center ">
            <img
              src={profile}
              alt="my profile"
              className="h-[280px] md:mx-0 mx-auto rounded-xl"
            />
            <div>
              <p className="p-8">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime
                quis harum sunt cupiditate, odit dolorem dicta deleniti
                excepturi minima magnam tempora illo perferendis ipsa molestiae
                delectus voluptatibus asperiores et? Repellat excepturi
                reprehenderit rerum architecto. Doloribus maiores similique
                necessitatibus placeat quasi, aspernatur accusantium fugit ipsum
                velit ex dolore impedit rerum soluta!
              </p>
              <a className="md:m-8 m-4 md:inline-block md:text-[inherit] text-green-500 bg-white md:bg-transparent flex justify-center font-bold px-12 cursor-pointer p-2 border-2 border-white-500 shadow-[inset_0_0_0_0_rgb(34,197,94)] ease-in duration-300 hover:shadow-[inset_400px_0_0_0_rgb(255,255,255)] hover:text-green-500 ">
                CV
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default About;
