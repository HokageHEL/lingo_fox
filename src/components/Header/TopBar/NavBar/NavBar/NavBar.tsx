import React from "react";
import { NavLink } from "../NavLink";

const NAV_ITEMS = [
  {
    title: "Про нас",
    href: "/",
  },
  {
    title: "Курс",
    href: "/",
  },
  {
    title: "Контакти",
    href: "/",
  },
  {
    title: "Залишити заявку",
    href: "/",
  },
];

export const NavBar: React.FC = () => {
  return (
    <nav className="p-2">
      <ul className="flex flex-row justify-between items-center [&>li>a]:text-inherit [&>li>a]:no-underline">
        {NAV_ITEMS.map((link, index) => (
          <NavLink key={index} link={link} />
        ))}
      </ul>
    </nav>
  );
};
