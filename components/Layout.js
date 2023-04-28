import React from "react";
import SideNavbar from "./SideNavbar";
import Header from "../pages/header";
import About from "../pages/about";
import Projects from "../pages/projects";

function Layout({ children }) {
  return (
    <div className="flex">
      <SideNavbar />
      <section className="flex flex-col flex-1">
        <Header />
        <About />
        {children}
      </section>
    </div>
  );
}

export default Layout;
