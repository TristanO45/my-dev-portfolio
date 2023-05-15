import React from "react";
import Image from "next/image";
import { projectCards } from "../data/data";

function Projects(props) {
  return (
    <section className="h-[75rem] pt-[10vh]" id={props.id}>
      <h1 className="text-6xl text-[#57e0c3] font-serifFont">Projects</h1>
      <div className="flex items-center justify-center pt-[150px]">
        <div className="grid grid-cols-2 gap-2">
          {projectCards.map((items, index) => {
            const { title, desc, stack, gitHubUrl, imgUrl } = items;
            return (
              <div key={index} className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30 ">
                <div className="object-cover transition-transform duration-500 group-hover:rotate-1 group-hover:scale-125">
                  <Image
                    src={imgUrl}
                    alt="screenshots"
                    width="500"
                    height="500"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                <div className="absolute inset-0 flex translate-y-[100%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                  <h1 className="text-2xl text-[#57e0c3] font-bold tracking-wider">
                    {title}
                  </h1>
                  <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    {desc}
                  </p>
                  <p className=" text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    {" "}
                    Built with: <br /> {stack}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Projects;
