import React from "react";

// react-icons

import { BsXDiamondFill, BsFillPersonVcardFill } from "react-icons/bs";
import { AiFillProject } from "react-icons/ai";
import { MdOutlineContactMail } from "react-icons/md";
import { GrLinkedin, GrGithub, GrInstagram } from "react-icons/gr";

// sidebar menu

const sidebarMenu = [
  {
    text: "Home",
    icon: <BsXDiamondFill className="text-[#5fefd0] inline-block" />,
    url: "/",
  },
  {
    text: "About",
    icon: <BsFillPersonVcardFill className="text-[#5fefd0] inline-block" />,
    url: "/about",
  },
  {
    text: "Projects",
    icon: <AiFillProject className="text-[#5fefd0]  inline-block" />,
    url: "/projects",
  },
  {
    text: "Contact",
    icon: <MdOutlineContactMail className="text-[#5fefd0] inline-block" />,
    url: "/contact",
  },
];

// Social Media Icons

const socialIcons = [
  {
    icon: <GrLinkedin className="text-[#5fefd0]" />,
    url: "https://www.linkedin.com/in/tristan-onfroy/",
  },
  {
    icon: <GrGithub className="text-[#5fefd0]" />,
    url: "https://github.com/TristanO45",
  },
  {
    icon: <GrInstagram className="text-[#5fefd0]" />,
    url: "https://www.instagram.com/tristan.vision/",
  },
];

// Tech Stack icons

const techStack = {};

export { sidebarMenu, socialIcons };
