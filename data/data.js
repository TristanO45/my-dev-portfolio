import React from "react";

// react-icons

import { BsXDiamondFill, BsFillPersonVcardFill } from "react-icons/bs";
import { AiFillProject } from "react-icons/ai";
import { MdOutlineContactMail } from "react-icons/md";
import { GrLinkedin, GrGithub, GrInstagram } from "react-icons/gr";
import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiRedux,
  SiNextdotjs,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiGraphql,
  SiApollographql,
  SiMongodb,
  SiPostgresql,
  SiAmazonaws,
  SiDocker,
  SiJest,
  SiCypress,
  SiMocha,
  SiGithubactions,
  SiTravisci,
} from "react-icons/si";

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

const techStack = [
  {
    icon: <SiJavascript size="3rem" className="text-[#5fefd0]" />,
    text: "Javascript",
    url: "temp",
  },
  {
    icon: <SiTypescript size="3rem" className="text-[#5fefd0]" />,
    text: "Typescript",
    url: "temp",
  },
  {
    icon: <SiReact size="3rem" className="text-[#5fefd0]" />,
    text: "React",
    url: "temp",
  },
  {
    icon: <SiRedux size="3rem" className="text-[#5fefd0]" />,
    text: "Redux",
    url: "temp",
  },
  {
    icon: <SiNextdotjs size="3rem" className="text-[#5fefd0]" />,
    text: "NextJS",
    url: "temp",
  },
  {
    icon: <SiHtml5 size="3rem" className="text-[#5fefd0]" />,
    text: "HTML",
    url: "temp",
  },
  {
    icon: <SiCss3 size="3rem" className="text-[#5fefd0]" />,
    text: "CSS",
    url: "temp",
  },
  {
    icon: <SiTailwindcss size="3rem" className="text-[#5fefd0]" />,
    text: "Tailwind CSS7",
    url: "temp",
  },
  {
    icon: <SiNodedotjs size="3rem" className="text-[#5fefd0]" />,
    text: "Node",
    url: "temp",
  },
  {
    icon: <SiExpress size="3rem" className="text-[#5fefd0]" />,
    text: "Express JS",
    url: "temp",
  },
  {
    icon: <SiGraphql size="3rem" className="text-[#5fefd0]" />,
    text: "GraphQL",
    url: "temp",
  },
  {
    icon: <SiApollographql size="3rem" className="text-[#5fefd0]" />,
    text: "Apollo",
    url: "temp",
  },
  {
    icon: <SiMongodb size="3rem" className="text-[#5fefd0]" />,
    text: "MongoDB",
    url: "temp",
  },
  {
    icon: <SiPostgresql size="3rem" className="text-[#5fefd0]" />,
    text: "PostgreSQL",
    url: "temp",
  },
  {
    icon: <SiAmazonaws size="3rem" className="text-[#5fefd0]" />,
    text: "AWS",
    url: "temp",
  },
  {
    icon: <SiDocker size="3rem" className="text-[#5fefd0]" />,
    text: "Docker",
    url: "temp",
  },
  {
    icon: <SiJest size="3rem" className="text-[#5fefd0]" />,
    text: "Jest",
    url: "temp",
  },
  {
    icon: <SiCypress size="3rem" className="text-[#5fefd0]" />,
    text: "Cypress",
    url: "temp",
  },
  {
    icon: <SiGithubactions size="3rem" className="text-[#5fefd0]" />,
    text: "GitHub Actions",
    url: "temp",
  },
  {
    icon: <SiTravisci size="3rem" className="text-[#5fefd0]" />,
    text: "Travis CI",
    url: "temp",
  },
];

export { sidebarMenu, socialIcons, techStack };
