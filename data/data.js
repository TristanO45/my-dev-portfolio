import React from "react";

// react-icons

import { BsXDiamondFill, BsFillPersonVcardFill } from "react-icons/bs";
import { AiFillProject } from "react-icons/ai"
import { MdOutlineContactMail } from "react-icons/md"

// sidebar menu

const sidebarMenu = [
    {
        text: 'Home',
        icon: <BsXDiamondFill className="text-[#5fefd0]" />,
        url: '/'
    },
    {
        text: 'About',
        icon: <BsFillPersonVcardFill className="text-[#5fefd0]" />,
        url: '/about'
    },
    {
        text: 'Projects',
        icon: <AiFillProject className="text-[#5fefd0]" />,
        url: '/projects'
    },
    {
        text: 'Contact',
        icon: <MdOutlineContactMail className="text-[#5fefd0]" />,
        url: '/contact'
    }
]

export { sidebarMenu }
