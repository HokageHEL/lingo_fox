import React from "react";

type Props = {
  link: {
    title: string;
    href: string;
  };
};

export const NavLink: React.FC<Props> = ({ link }) => {
  return (
    <li className="p-4 border-2 border-transparent hover:border-brand-primary hover:text-brand-secondary">
      <a href={link.href}>{link.title}</a>
    </li>
  );
};
