import React from "react";
import Image from "next/image";
import { techStack } from "../data/data";
import Fade from "react-reveal/Fade";

function About(props) {
  return (
    <section className="pt-[20vh] sm:pt-[30vh]" id={props.id}>
      <Image
        className="w-[80%] md:w-1/2  sm:absolute opacity-40 mix-blend-overlay sm:right-0 sm:-my-40 hidden md:block"
        src={"/About.png"}
        alt="logo"
        width={500}
        height={500}
      />
      <Fade left>
        <h1 className="text-3xl sm:text-4xl md:text-6xl text-[#57e0c3] font-serifFont ">
          About & Skills
        </h1>
        <p className="text-white text-lg sm:text-xl px-6 pt-8  md:w-[75%]">
          I've always been the self-proclaimed tech geek amongst my peers and
          family. Technology has always fascinated me, but my passion truly
          ignited when I joined forces with my gaming buddies to develop 8-bit
          games. My role? Using HTML and CSS to implement the Pokémon inspired
          backgrounds and layouts that brought our games to life.
          <br />
          <br />
          As I continued my journey to become a programming wizard, I had the
          privilege of working alongside some truly talented engineers.
          Together, we took on challenging projects that made me believe in my
          ability to make a meaningful impact on the world.
          <br />
          <br />
          When I'm not immersed in coding adventures, you'll find me exploring
          my artistic side. I have a deep love for photography, both film and
          digital, and I enjoy capturing awe-inspiring moments with my drone. If
          you're seeking a programmer with a touch of artistry, search no
          further! I'm thrilled to continue learning and growing in this field,
          crafting truly remarkable and practical tools along the way.
          <br />
          <br />
          Download my resume to learn more about my experience.
        </p>

        <div className="pt-8">
          <a href={"/myResume.pdf"} download="Tristan Onfroy Resume">
            <button className="relative overflow-hidden px-6 sm:px-12 py-2 sm:py-3 text-lg sm:text-2xl font-medium text-gray-600 bg-transparent border border-[#57e0c3] rounded-lg shadow-inner group">
              <span className="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-gray-600 group-hover:w-full ease"></span>
              <span className="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-gray-600 group-hover:w-full ease"></span>
              <span className="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
              <span className="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
              <span className="absolute inset-0 w-full h-full duration-300 delay-300 bg-[#57e0c3] opacity-0 group-hover:opacity-100"></span>
              <span className="relative transition-colors duration-300 delay-200 group-hover:text-white ease">
                Download Resume
              </span>
            </button>
          </a>
        </div>
        <dev className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 justify-items-center gap-y-4 mt-20 ">
          {techStack.map((link, index) => {
            const { icon, text, url } = link;
            return (
              <div
                className="shadow-2x justify-center items-center space-y-1 skillCardColor"
                key={index}
              >
                {icon}

                <p className="text-white z-10 font-semibold tracking-wide">
                  {text}
                </p>
              </div>
            );
          })}
        </dev>
      </Fade>
    </section>
  );
}

export default About;
