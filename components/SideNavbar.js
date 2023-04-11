import React from "react";
import Image from 'next/image'

export default function SideNavbar() {
  return (
    <div className="pt-6 w-52 h-screen flex bg-[#141515] ">
        <div>
        <Image src={"/PortfolioHS.jpg"} alt="Headshot" width="150" height="150" />
        </div>
        
        
        
      
    </div>
  );
}
