import React from "react";
import Image from "next/image";
import { techStack } from "../data/data";
import Fade from "react-reveal/Fade";

function About(props) {
  return (
    <section className="h-[1400px]  pt-[10vh]" id={props.id}>
      
      <img
          className="absolute opacity-40 mix-blend-overlay right-0 -my-40 "
          src={"/About.png"}
          alt="logo"
          width={1000}
          height={1000}
        />
        <Fade left>
      <h1 className="text-6xl text-[#57e0c3] font-serifFont ">About & Skills</h1>      
      <p className="text-white text-xl pt-8 w-[900px]">
        I've always been the self-proclaimed tech geek amongst my peers and
        family. My love for technology really took root when I teamed up with
        some gaming buddies to create 8-bit games. My contribution? The
        stunningly beautiful backgrounds and layouts that really made our games
        pop.
        <br />
        <br />
        As I continued my journey to become a programming wizard, I had the
        privilege of working alongside some of the most talented engineers in
        the business. Together, we tackled challenging projects that have left
        me feeling like I'm capable of making a real difference in the world.
        <br />
        <br />
        When I'm not busy coding up a storm, you can find me exploring my
        artistic side. I love to take photos (both film and digital) and
        capturing stunning imagery with my drone. So, if you're looking for a
        programmer with a side of artistry, look no further! I'm excited to keep
        learning and growing in this field, and creating some truly amazing and
        useful tools along the way.
        <br />
        <br />
        Here's my resume for more details about my experience.
      </p>
      
      <div className="pt-8">
        <a href={"/myResume.pdf"} download="Tristan Onfroy Resume">
          <button className="relative overflow-hidden px-12 py-3 text-2xl font-medium text-gray-600 bg-transparent border border-[#57e0c3] rounded-lg shadow-inner group">
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
      <dev className="grid grid-cols-5 gap-y-4 mt-20 ">
        {techStack.map((link, index) => {
          const { icon, text, url } = link;
          return (
            <div
              className="shadow-2x   justify-center items-center space-y-1 skillCardColor"
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
