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

  const [colorChange, setColorChange] = useState("Home");
  return (
    <aside className="px-4 w-[175px] h-screen fixed flex flex-col justify-between bg-[#141515]">
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
                    className={`cursor-pointer ${
                      colorChange === text ? "text-[#5fefd0]" : "text-[#9d9d9d]"
                    }`}
                    onClick={(e) => {
                      const target = document.querySelector(
                        `#${text.toLowerCase()}`
                      );
                      console.log(target);
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
  );
}
