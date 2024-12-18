import React from "react";
import { TopBar } from "../TopBar/TopBar/TopBar";
import { Button } from "../../ui/Button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../ui/card";
import headerImage from "../../../../public/img/header.png";

export const Header: React.FC = () => {
  return (
    <header className="font-pixelify flex flex-col h-screen relative overflow-hidden">
      <TopBar />

      <div className="flex justify-between items-center flex-1">
        <Card className="w-fit relative">
          <CardHeader>
            <CardTitle className="relative w-full after:content-[''] after:absolute after:left-0 after:bottom-[-10px] after:w-full after:h-[2px] after:bg-current">
              Lingo Fox
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="relative w-full after:content-[''] after:absolute after:left-0 after:bottom-[-10px] after:w-full after:h-[2px] after:bg-current">
              IT-школа для дітей
              <br />
              та підлітків
            </p>
          </CardContent>
          <CardFooter>
            <Button>записатися на курс</Button>
          </CardFooter>
        </Card>

        <img
          src={headerImage}
          alt="Header illustration"
          className="w-full max-w-[400px] relative z-10"
        />
      </div>
    </header>
  );
};
