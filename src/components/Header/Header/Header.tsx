import React from "react";
import { TopBar } from "../TopBar/TopBar/TopBar";

export const Header: React.FC = () => {
  return (
    <header className="font-pixelify flex flex-col justify-between h-screen">
      <TopBar />

      <button className="bg-purple-200 w-fit shadow-pixel shadow-purple-400 rounded-none text-white cursor-pointer inline-block">
        записатися на курс
      </button>

      <h1 className="text-9xl">Header</h1>
    </header>
  );
};
