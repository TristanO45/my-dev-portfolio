import React from "react";
import SideNavbar from "./SideNavbar";
import Header from "../pages/header";
import About from "../pages/about";
import Projects from "../pages/projects";

function Layout({ children }) {
  return (
    <div className="relative">
      <SideNavbar />
      <div className="flex flex-col pl-[210px] bg-[#121212]">
        <Header />
        <About />
        {children}
      </div>
      
    </div>
  );
}

export default Layout;
