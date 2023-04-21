import React from "react";
import SideNavbar from "./SideNavbar";
import Home from "./Home";

function Layout({ children }) {
  return (
    
    <div className="h-screen flex flex-row justify-start">
      <SideNavbar />
      <div className="flex-1 bg-[#121212]">
      <Home />
      </div>
      
      
      

      {children}
    </div>
    
  );
}

export default Layout;
