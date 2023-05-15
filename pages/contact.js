import React from "react";

function Contact(props) {
  return (
    <section className="h-[1400px] pt-[10vh]" id={props.id}>
      <h1 className=" text-6xl text-[#57e0c3] font-serifFont">Contact Me</h1>
      <form className="">
        <div className="pb-6 space-x-4">
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
        <div className="flex flex-col absolute">
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
            className="border-2 rounded-sm bg-transparent border-b py-20  focus:outline-none focus:rounded-md focus:ring-1 ring-[#57e0c3] font-normal text-gray-500 text-lg indent-3"
          />
        </div>
      </form>
    </section>
  );
}

export default Contact;
