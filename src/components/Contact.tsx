import { useAppSelector } from "../hooks";

const Contact = () => {
  const spanish = useAppSelector((state) => state.lang.spanish);

  return (
    <div id="contact" className="flex flex-col mb-10 mx-auto h-screen p-16">
      <div className="flex justify-center items-center">
        <form
          action="https://getform.io/f/7bea5f94-677b-4196-b9d2-2cd5eec45df4"
          method="POST"
          className="flex flex-col w-full md:w-7/12"
        >
          <h2 className="flex text-3xl font-bold pb-16 justify-center">
            {spanish ? "CONTACTO" : "CONTACT"}
          </h2>

          <input
            type="text"
            name="name"
            placeholder={spanish ? "Nombre" : "Name"}
            className="p-2 bg-transparent border-2 rounded-md focus:outline-none"
          />
          <input
            type="text"
            name="email"
            placeholder={"Email"}
            className="my-2 p-2 bg-transparent border-2 rounded-md focus:outline-none"
          />
          <textarea
            name="message"
            placeholder={spanish ? "Mensaje" : "Message"}
            rows={10}
            className="p-2 mb-4 bg-transparent border-2 rounded-md focus:outline-none"
          />
          <button
            type="submit"
            className="cursor-pointer font-semibold text-green-500 w-[10rem] p-2 border border-green-500 shadow-[inset_0_0_0_0_rgb(34,197,94)] ease-in duration-300 hover:shadow-[inset_400px_0_0_0_rgb(34,197,94)] hover:text-white "
          >
            {spanish ? "Cantactame" : "Get in touch"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
