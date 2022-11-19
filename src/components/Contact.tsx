function Contact() {
  return (
    <div id="contact" className="flex flex-col mb-10 mx-auto h-screen p-16">
      <div className="flex justify-center items-center">
        <form
          action="https://getform.io/f/7bea5f94-677b-4196-b9d2-2cd5eec45df4"
          method="POST"
          className="flex flex-col w-full md:w-7/12"
        >
          <h2 className="flex text-3xl font-bold pb-16 justify-center">
            CONTACT
          </h2>
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="p-2 bg-transparent border-2 rounded-md focus:outline-none"
          />
          <input
            type="text"
            name="email"
            placeholder="Email"
            className="my-2 p-2 bg-transparent border-2 rounded-md focus:outline-none"
          />
          <textarea
            name="message"
            placeholder="Message"
            rows={10}
            className="p-2 mb-4 bg-transparent border-2 rounded-md focus:outline-none"
          />
          <button
            type="button"
            className="text-center inline-block px-8 py-3 w-max text-base font-medium rounded-md text-white bg-gradient-to-r from-yellow-500 to-pink-500 drop-shadow-md hover:stroke-white"
          >
            Get in touch
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
