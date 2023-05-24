import React from "react";
import SideNavbar from "./SideNavbar";
import Header from "../pages/header";
import About from "../pages/about";
import Projects from "../pages/projects";
import Contact from "../pages/contact";


function Layout({ children }) {
  return (
    <div className="bg-[#121212]">
      <SideNavbar />
      <div className="flex justify-center text-center flex-1 flex-col  md:text-justify md:ml-[25px] lg:ml-[200px]  ">
        
        <Header id="home" />
        <About id="about" />
        <Projects id="projects" />
        <Contact id="contact" />
        {children}
      </div>
    </div>
  );
}

export default Layout;
