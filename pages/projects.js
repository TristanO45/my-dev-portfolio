import React from "react";
import Image from "next/image";
import { projectCards } from "../data/data";
import Fade from "react-reveal/Fade";

function Projects(props) {
  return (
    <section className="pt-[10vh] sm:pt-[20vh]" id={props.id}>
      <Image
        className="absolute md:w-1/2 hidden md:block opacity-40 mix-blend-overlay right-0 -my-28 "
        src={"/Projects.png"}
        alt="logo"
        width={500}
        height={500}
      />
      <Fade left>
        <h1 className=" text-3xl sm:text-4xl md:text-6xl text-[#57e0c3] font-serifFont">
          Projects
        </h1>
        <div className="flex items-center justify-center px-4 pt-[50px] sm:pt-[130px]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-6 ">
            {projectCards.map((items, index) => {
              const { title, desc, stack, gitHubUrl, website, imgUrl } = items;
              return (
                <div
                  key={index}
                  className="group relative items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30 rounded-lg"
                >
                  <div className="object-cover transition-transform duration-500 group-hover:rotate-1 group-hover:scale-125">
                    <Image
                      src={imgUrl}
                      alt="screenshots"
                      width={500}
                      height={500}
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20 group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70 overflow-hidden"></div>
                  <div className="absolute inset-0 translate-y-full flex flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                    <div className="absolute">
                      <h1 className="text-xl sm:text-3xl md:text-3xl lg:text-4xl text-[#57e0c3] font-bold tracking-wider mt-8 sm:mt- pb-2">
                        {title}
                      </h1>
                      <div className="text-[#57e0c3] pl-3 flex flex-col  space-y-3 absolute cursor-pointer">
                        <a
                          href={gitHubUrl.url}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {gitHubUrl.icon}
                        </a>
                        <a
                          href="https://surfql.com/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {website.icon}
                        </a>
                      </div>
                      <p className="mb-3 inline-block w-[75%] text-sm md:text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                        {desc}
                      </p>

                      <p className="text-lg lg:text-2xl font-semibold text-[#57e0c3] opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                        {" "}
                        Built with: <br />
                      </p>
                      <p className="text-sm inline-block w-[85%] md:text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                        {" "}
                        {stack}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Fade>
    </section>
  );
}

export default Projects;
