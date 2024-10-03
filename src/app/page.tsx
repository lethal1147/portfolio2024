"use client";

import { useEffect, useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import dayjs from "dayjs";
import Image from "next/image";
import userLogo from "../../public/asset/image/Windows-10-user-icon-big.webp";
import joakimDahlstrom from "../../public/asset/image/joakimDahlstrom.webp";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const currentDate = dayjs().format("dddd, MMMM D");
const currentTime = dayjs().format("HH:MM");

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleEvent = () => {
      setIsVisible(true);
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsVisible(false);
      }
    };
    window.addEventListener("keydown", handleEvent);
    window.addEventListener("click", handleEvent);
    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("keydown", handleEvent);
      window.removeEventListener("click", handleEvent);
      window.removeEventListener("keydown", handleEscape);
    };
  }, []);

  return (
    <div className="w-screen h-screen relative overflow-hidden">
      <div className="absolute inset-0 bg-lock-screen bg-center bg-cover bg-fixed brightness-50 -z-10"></div>
      <div
        className={cn(
          "top-1/3 transition-all delay-5000 duration-500 flex items-center flex-col transform -translate-y-1/2 text-white z-10 relative mx-auto",
          {
            "-translate-y-[500%]": isVisible,
            "translate-y-0": !isVisible,
          }
        )}
      >
        <h1 className="text-8xl font-medium mb-3">{currentTime}</h1>
        <h2>{currentDate}</h2>
      </div>

      <div
        className={cn(
          "absolute inset-0 transition-all delay-5000 duration-500 translate-y-full size-full flex justify-center items-center text-white backdrop-blur-md bg-gray-50 bg-opacity-20",
          {
            "translate-y-0 ": isVisible,
          }
        )}
      >
        <Card className="bg-transparent text-white border-none shadow-none">
          <CardHeader>
            <Avatar className="size-48">
              <AvatarImage
                src="/asset/image/joakimDahlstrom.webp"
                alt="Joakim Dahlstrom"
              />
              <AvatarFallback>
                <Image
                  width="250"
                  height="250"
                  alt="User-icon"
                  src={userLogo}
                />
              </AvatarFallback>
            </Avatar>
          </CardHeader>
          <CardContent className="flex flex-col gap-5">
            <CardTitle className="text-center text-xl">
              JOAKIM DAHLSTROM
            </CardTitle>
            <CardDescription>
              <Input
                className="border-gray-500 transition-all duration-75 focus:border-b-2 focus:border-b-blue-500 bg-black/40 placeholder:text-gray-400"
                placeholder="PIN"
              />
            </CardDescription>
            <CardFooter className="flex justify-center">
              <Button>Sign-In</Button>
            </CardFooter>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
