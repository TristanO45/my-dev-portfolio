import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";
import { sidebarMenu } from "../data/data";

export default function SideNavbar() {
  const router = useRouter();
  return (
    <div className="p-5 pt-8 px-4 w-52 h-screen flex flex-col justify-between bg-[#141515]">
      <div>
        <Image
          src={"/PortfolioHS.jpg"}
          alt="Headshot"
          width="150"
          height="150"
        />
      </div>
      <ul className="flex flex-col  space-y-3">
        {sidebarMenu.map((link, index) => {
          const { text, url, icon } = link;
          return (
            <li key={text}>
              <Link
                key={text}
                href={url}
                className={`${
                  router.pathname === url ? "text-[#5fefd0]" : "text-[#9d9d9d]"
                }`}
              >
                {icon}
                {text}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
