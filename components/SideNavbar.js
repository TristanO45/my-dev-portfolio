import React from "react";
import Image from "next/image";
import { BsXDiamondFill } from "react-icons/bs";
import { IconContext } from "react-icons";

export default function SideNavbar() {
  // let iconStyles = { color: }
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
