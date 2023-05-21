import React from "react";
import { useState } from "react";
import Image from "next/image";
import Fade from "react-reveal/Fade";

function Contact(props) {
  // States for contact form fields
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  // Form validation state
  const [errors, setErrors] = useState({});

  // Setting button text
  const [buttonText, setButtonText] = useState("Send Message");

  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showFailureMessage, setShowFailureMessage] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    let isValidForm = handleValidation();

    if (isValidForm) {
      setButtonText("Sending");

      const res = await fetch("/api/sendgrid", {
        body: JSON.stringify({
          email: email,
          fullname: fullname,
          subject: subject,
          message: message,
        }),
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
      });
      console.log(email, fullname, subject, message);
      const { error } = await res.json();
      if (error) {
        console.log("This is the error I get =>", error);
        setShowSuccessMessage(false);
        setShowFailureMessage(true);
        setButtonText("Send Message");

        setFullname("");
        setEmail("");
        setMessage("");
        setSubject("");
        return;
      }
      setShowSuccessMessage(true);
      setShowFailureMessage(false);
      setButtonText("Send");
      // Reset form fields
      setFullname("");
      setEmail("");
      setMessage("");
      setSubject("");
    }
  };

  const handleValidation = () => {
    let tempErrors = {};
    let isValid = true;

    if (fullname.length <= 0) {
      tempErrors["fullname"] = true;
      isValid = false;
    }
    if (email.length <= 0) {
      tempErrors["email"] = true;
      isValid = false;
    }
    if (subject.length <= 0) {
      tempErrors["subject"] = true;
      isValid = false;
    }
    if (message.length <= 0) {
      tempErrors["message"] = true;
      isValid = false;
    }

    setErrors({ ...tempErrors });
    console.log("errors", errors);
    return isValid;
  };

  return (
    <section className="md:h-[1000px] pt-[10vh]" id={props.id}>
      <Fade left>
        <h1 className="pb-[2rem] text-6xl text-[#57e0c3] font-serifFont">
          Contact Me
        </h1>
        <div className="flex flex-col md:flex-row space-x-0 md:space-x-36">
          <form onSubmit={handleSubmit} className="flex-1">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pb-5">
              <input
                type="text"
                name="fullname"
                placeholder="Full Name"
                value={fullname}
                onChange={(e) => {
                  setFullname(e.target.value);
                }}
                required
                className="border-2 rounded-sm bg-transparent border-b py-2 px-4 focus:outline-none focus:rounded-md focus:ring-1 ring-[#57e0c3] font-normal text-gray-500 text-lg"
              />
              {errors?.fullname && (
                <p className="text-red-500">Fullname cannot be empty.</p>
              )}
              <input
                type="text"
                name="email"
                placeholder="Email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                required
                className="border-2 rounded-sm bg-transparent border-b py-2 px-4 focus:outline-none focus:rounded-md focus:ring-1 ring-[#57e0c3] font-normal text-gray-500 text-lg"
              />
              {errors?.email && (
                <p className="text-red-500">Email cannot be empty.</p>
              )}
            </div>
            <div className="flex flex-col relative space-y-5">
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={subject}
                onChange={(e) => {
                  setSubject(e.target.value);
                }}
                size="50"
                required
                className="border-2 rounded-sm bg-transparent border-b py-2  focus:outline-none focus:rounded-md focus:ring-1 ring-[#57e0c3] font-normal text-gray-500 text-lg indent-3"
              />
              {errors?.subject && (
                <p className="text-red-500">Subject cannot be empty.</p>
              )}
              <input
                type="text"
                name="message"
                placeholder="Message"
                value={message}
                onChange={(e) => {
                  setMessage(e.target.value);
                }}
                size="50"
                required
                className=" border-2 rounded-sm bg-transparent border-b pb-36  focus:outline-none focus:rounded-md focus:ring-1 ring-[#57e0c3] font-normal text-gray-500 text-lg   indent-3"
              />
            </div>
            <div className="mt-5">
              <button
                type="submit"
                className="relative overflow-hidden px-12 py-3 text-2xl font-medium text-gray-600 bg-transparent border border-[#57e0c3] rounded-lg shadow-inner group "
              >
                <span className="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-gray-600 group-hover:w-full ease"></span>
                <span className="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-gray-600 group-hover:w-full ease"></span>
                <span className="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
                <span className="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
                <span className="absolute inset-0 w-full h-full duration-300 delay-300 bg-[#57e0c3] opacity-0 group-hover:opacity-100"></span>
                <span className="relative transition-colors duration-300 delay-200 group-hover:text-white ease">
                  {buttonText}
                </span>
              </button>
            </div>
            <div className="text-left">
              {showSuccessMessage && (
                <p className="text-green-500 font-semibold text-sm md:text-base my-2">
                  Thankyou! Your Message has been delivered.
                </p>
              )}
              {showFailureMessage && (
                <p className="text-red-500 md:text-base">
                  Oops! Something went wrong, please try again.
                </p>
              )}
            </div>
          </form>
<div className="mt-8 md:mt-0">
          <Image
            src="/ContactMePic.png"
            alt="contact pic"
            width={500}
            height={500}
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
          />
          </div>
        </div>
      </Fade>
    </section>
  );
}

export default Contact;
