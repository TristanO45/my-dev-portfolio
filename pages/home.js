import React from "react";
import Typewriter from "typewriter-effect";

function Home() {
  return (
    <section className="flex items-center">
      <header className="ml-10">
        <h1 className="text-white align-bottom text-8xl font-serifFont">
          Hi, <br /> I'm&nbsp;
          <span className="inline-block text-[#57e0c3]">
            <Typewriter
              options={{
                strings: ["Tristan Onfroy"],
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
      </header>
    </section>
  );
}

export default Home;
