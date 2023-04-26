import React from "react";
import SideNavbar from "./SideNavbar";
import Home from "../pages/home";
import About from "../pages/about";
import Projects from "../pages/projects";

function Layout({ children }) {
  return (
    <div className="flex  bg-[#121212]">
      <SideNavbar />
      <Home />

      {children}
    </div>
  );
}

export default Layout;
