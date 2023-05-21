import React from "react";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";
import { sidebarMenu, socialIcons } from "../data/data";

// Sidebar component
export default function SideNavbar() {
  // useRouter hook will be used for navigating each page
  const router = useRouter();

  // Using this to update the state of the sidebar link color state
  const [colorChange, setColorChange] = useState("Home");
  return (
    <div className="hidden md:block">
    <aside className="flex flex-col px-4 w-[175px] h-screen fixed  justify-between bg-[#141515]">
      <div className="w-auto">
        <Image
          src={"/PortfolioHS.jpg"}
          alt="Headshot"
          width="150"
          height="150"
        />
      </div>
      <nav>
        <div className="inline-block">
          <ul className="space-y-3 ml-2 ">
            {sidebarMenu.map((link, index) => {
              const { text, url, icon } = link;
              return (
                <li key={index}>
                  <label
                    // This is where we're updating the state of the link color based on clicks
                    className={`cursor-pointer ${
                      colorChange === text ? "text-[#5fefd0]" : "text-[#9d9d9d]"
                    }`}
                    // this on click is checking if one of the sidebar links has been clicked.
                    onClick={(e) => {
                      const target = document.querySelector(
                        `#${text.toLowerCase()}`
                      );
                      if (target) {
                        setColorChange(text);
                        target.scrollIntoView();
                      }
                    }}
                  >
                    {icon}
                    <p className="inline-block ml-4">{text}</p>
                  </label>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
      <div>
        <ul className="flex flex-row space-x-4 mb-14 ml-4">
          {socialIcons.map((icons, index) => {
            const { icon, url } = icons;
            return (
              <a href={url} target="_blank" key={index}>
                {icon}
              </a>
            );
          })}
        </ul>
      </div>
    </aside>
    </div>
  );
}
