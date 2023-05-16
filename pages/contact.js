import React from "react";

function Contact(props) {
  return (
    <section className="h-[1400px] pt-[10vh]" id={props.id}>
      <h1 className=" text-6xl text-[#57e0c3] font-serifFont">Contact Me</h1>
      <form className="absolute">
        <div className="pb-5 space-x-4 relative">
          <input
            type="text"
            name="fullname"
            placeholder="Full Name"
            required
            className="border-2 rounded-sm bg-transparent border-b py-2 px-4 focus:outline-none focus:rounded-md focus:ring-1 ring-[#57e0c3] font-normal text-gray-500 text-lg"
          />
          <input
            type="text"
            name="email"
            placeholder="Email"
            required
            className="border-2 rounded-sm bg-transparent border-b py-2 px-4 focus:outline-none focus:rounded-md focus:ring-1 ring-[#57e0c3] font-normal text-gray-500 text-lg"
          />
        </div>
        <div className="flex flex-col relative space-y-5">
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            size="50"
            required
            className="border-2 rounded-sm bg-transparent border-b py-2  focus:outline-none focus:rounded-md focus:ring-1 ring-[#57e0c3] font-normal text-gray-500 text-lg indent-3"
          />
          <input
            type="text"
            name="message"
            placeholder="Message"
            size="50"
            required
            className=" border-2 rounded-sm bg-transparent border-b pb-36  focus:outline-none focus:rounded-md focus:ring-1 ring-[#57e0c3] font-normal text-gray-500 text-lg   indent-3"
          />
        </div>
        <div className="mt-5">
          <button className="relative overflow-hidden px-12 py-3 text-2xl font-medium text-gray-600 bg-transparent border border-[#57e0c3] rounded-lg shadow-inner group">
          <span className="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-gray-600 group-hover:w-full ease"></span>
            <span className="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-gray-600 group-hover:w-full ease"></span>
            <span className="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
            <span className="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
            <span className="absolute inset-0 w-full h-full duration-300 delay-300 bg-[#57e0c3] opacity-0 group-hover:opacity-100"></span>
            <span className="relative transition-colors duration-300 delay-200 group-hover:text-white ease">
              Send Message
            </span>
          </button>
        </div>
      </form>
    </section>
  );
}

export default Contact;
