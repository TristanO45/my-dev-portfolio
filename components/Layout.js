import React from "react";
import SideNavbar from "./SideNavbar";
import Header from "../pages/header";
import About from "../pages/about";
import Projects from "../pages/projects";

function Layout({ children }) {
  return (
    <div className="bg-[#121212]">
      <SideNavbar />
      <div className="flex flex-1 flex-col ml-[200px]">
        <Header />
        <About id="content"/>
        {children}
      </div>
    </div>
  );
}

export default Layout;
