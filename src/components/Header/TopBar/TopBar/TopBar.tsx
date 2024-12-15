import React from "react";
import { NavBar } from "../NavBar/NavBar/NavBar";

export const TopBar: React.FC = () => {
  return (
    <div className="flex justify-between items-center">
      <h1 className="p-2">LingoFox</h1>
      <NavBar />
    </div>
  );
};
