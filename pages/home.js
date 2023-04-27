import React from "react";
import Typewriter from "typewriter-effect";

function Home() {
  return (
    <div className="flex items-center">
      <header className=" ">
        <h1 className="text-white align-bottom  pt-10 text-8xl font-serifFont">
          Hi, <br /> I'm&nbsp;
          <span className="inline-block text-[#57e0c3]">
            <Typewriter
              options={{
                strings: ["Tristan"],
                autoStart: true,
                loop: true,
                delay: 350,
                cursorClassName: "white",
              }}
            />{" "}
          </span>
        </h1>
      </header>
    </div>
  );
}

export default Home;
