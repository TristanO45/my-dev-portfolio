import React from "react";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { socialIcons } from "../data/data";
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

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    let isValidForm = handleValidation();

    if (isValidForm) {
      setButtonText("Sending");

      const serviceID = process.env.SERVICE_ID;
      const templateID = process.env.TEMPLATE_ID;
      const publicKey = process.env.PUBLIC_KEY;

      emailjs.sendForm(serviceID, templateID, form.current, publicKey).then(
        (result) => {
          console.log(result.text);
          console.log("email sent successfully");
          setShowSuccessMessage(true);
          setShowFailureMessage(false);
          setButtonText("Send");
          setFullname("");
          setEmail("");
          setMessage("");
          setSubject("");
        },
        (error) => {
          console.log(error.text);
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
        }
      );
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
    console.log("valid form errors", errors);
    return isValid;
  };

  return (
    <section className="pt-[10vh] pb-10" id={props.id}>
      <Fade left>
        <h1 className="pb-[2rem] text-3xl sm:text-4xl md:text-6xl text-[#57e0c3] font-serifFont">
          Contact Me
        </h1>
        <p>Lets connect!</p>
        <div className="flex flex-col px-5 md:px-0 md:flex-row space-x-0 md:space-x-36">
          <form ref={form} onSubmit={sendEmail}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pb-5">
              <input
                type="text"
                name="from_name"
                placeholder="Full Name"
                value={fullname}
                onChange={(e) => {
                  setFullname(e.target.value);
                }}
                className="border-2 rounded-lg bg-transparent border-b py-2 px-4 focus:outline-none focus:rounded-lg focus:ring-1 ring-[#57e0c3] font-normal text-gray-500 text-lg"
              />
              {errors?.fullname && (
                <p className="text-red-500">Fullname cannot be empty.</p>
              )}
              <input
                type="text"
                name="user_email"
                placeholder="Email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                required
                className="border-2 rounded-lg bg-transparent border-b py-2 px-4 focus:outline-none focus:rounded-lg focus:ring-1 ring-[#57e0c3] font-normal text-gray-500 text-lg"
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
                className="border-2 rounded-lg bg-transparent border-b py-2  focus:outline-none focus:rounded-lg focus:ring-1 ring-[#57e0c3] font-normal text-gray-500 text-lg indent-3"
              />
              {errors?.subject && (
                <p className="text-red-500">Subject cannot be empty.</p>
              )}
              <input
                type="text"
                name="message"
                placeholder="Message"
                size="50"
                value={message}
                onChange={(e) => {
                  setMessage(e.target.value);
                }}
                required
                className=" border-2 rounded-lg bg-transparent border-b pb-36  focus:outline-none focus:rounded-lg focus:ring-1 ring-[#57e0c3] font-normal text-gray-500 text-lg   indent-3"
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
          <div className="flex justify-center md:block ml-2 md:justify-end pt-8 md:pt-0 ">
            <img
              src="/ContactMePic.png"
              alt="contact pic"
              width={500}
              height={600}
              className="rounded-xl relative"
            />
          </div>
        </div>

        <div>
          <ul className="flex flex-row justify-center text-2xl lg:text-sm space-x-4 pt-7 ml-4 lg:hidden">
            {socialIcons.map((icons, index) => {
              const { icon, url } = icons;
              return (
                <a href={url} target="_blank" key={index}>
                  {icon}
                </a>
              );
            })}
          </ul>
        </div>
      </Fade>
    </section>
  );
}

export default Contact;
