import React from "react";
import { NavLink } from "react-router-dom";
import Image from "next/image";
import { sidebarMenu } from "../data/data";

export default function SideNavbar() {
  return (
    <div className="flex">
      <div className="p-5 pt-8 w-52 h-screen bg-[#141515]">
        <div>
          <Image
            src={"/PortfolioHS.jpg"}
            alt="Headshot"
            width="150"
            height="150"
          />
        </div>
        <ul className="side-links">
          {sidebarMenu.map((link, index) => {
            const { text, url, icon } = link;
            return <li key={index}></li>;
          })}
        </ul>
        <ul>
          <li className="text-white flex">
            <BsXDiamondFill className="text-[#5fefd0]" />
            Home
          </li>
        </ul>
      </div>
    </div>
  );
}
