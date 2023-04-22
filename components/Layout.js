import React from "react";
import SideNavbar from "./SideNavbar";
import Home from "../pages/home";
import About from "../pages/about";
import Projects from "../pages/projects";

function Layout({ children }) {
  return (
    <div className="h-screen flex flex-row justify-start bg-[#121212]">
      <SideNavbar />

      <Home />
      <About />

      {children}
    </div>
  );
}

export default Layout;
