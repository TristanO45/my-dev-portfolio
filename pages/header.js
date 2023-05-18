import React from "react";
import Link from "next/link";
import Image from "next/image";
import Typewriter from "typewriter-effect";

function Header(props) {
  return (
    <section className="flex h-screen items-center" id={props.id}>
      <Image
        className="absolute right-3 object-cover opacity-40"
        src={"/logoShape.png"}
        alt="logo"
        width={750}
        height={750}
      />
      <header>
        <h1 className="text-white align-bottom text-8xl font-serifFont">
          Hi, <br /> I'm&nbsp;
          <span className="inline-flex text-[#57e0c3]">
            <Typewriter
              options={{
                strings: ["Tristan Onfroy", "Glad You're Here!"],
                autoStart: true,
                loop: true,
                delay: 300,
                cursorClassName: "white",
              }}
            />{" "}
          </span>
        </h1>
        <p className="text-white text-2xl tracking-wider font-serifFont">
          Full Stack Software Engineer
        </p>
        <div className="pt-10">
          <Link href={"/contact"}>
            <button className="relative px-12 py-3 overflow-hidden text-2xl font-medium text-gray-600 bg-transparent border border-[#57e0c3] rounded-lg shadow-inner group">
              <span className="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-gray-600 group-hover:w-full ease"></span>
              <span className="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-gray-600 group-hover:w-full ease"></span>
              <span className="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
              <span className="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
              <span className="absolute inset-0 w-full h-full duration-300 delay-300 bg-[#57e0c3] opacity-0 group-hover:opacity-100"></span>
              <span className="relative transition-colors duration-300 delay-200 group-hover:text-white ease">
                Contact Me
              </span>
            </button>
          </Link>
        </div>
      </header>
    </section>
  );
}

export default Header;
