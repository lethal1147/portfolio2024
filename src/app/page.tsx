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
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  BatteryFull,
  ClockArrowUp,
  Lock,
  LockKeyhole,
  Moon,
  Power,
  RotateCcw,
  Wifi,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const currentDate = dayjs().format("dddd, MMMM D");
const currentTime = dayjs().format("HH:MM");

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // const handleEvent = () => {
    //   setIsVisible(true);
    // };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsVisible(false);
      }
    };
    // window.addEventListener("keydown", handleEvent);
    // window.addEventListener("click", handleEvent);
    window.addEventListener("keydown", handleEscape);

    return () => {
      // window.removeEventListener("keydown", handleEvent);
      // window.removeEventListener("click", handleEvent);
      window.removeEventListener("keydown", handleEscape);
    };
  }, []);

  return (
    <div className="w-screen h-screen relative overflow-hidden">
      <div
        onClick={() => setIsVisible(true)}
        className="absolute inset-0 bg-lock-screen bg-center bg-cover bg-fixed brightness-50 z-10"
      />
      <div
        className={cn(
          "top-1/3 transition-all delay-5000 ease-out duration-500 flex items-center flex-col transform -translate-y-1/2 text-white z-20 relative mx-auto",
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
          "absolute inset-0 transition-all ease-out delay-5000 duration-500 translate-y-full size-full flex justify-center z-30 items-center text-white backdrop-blur-md bg-gray-50 bg-opacity-20",
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

      <div className="flex absolute bottom-10 right-10 w-52 z-50 text-white justify-between">
        <Button
          className=" p-3 duration-75 bg-transparent hover:border shadow-none hover:bg-white/20 transition-all"
          type="button"
        >
          <Wifi />
        </Button>
        <Button
          className=" p-3 duration-75 bg-transparent hover:border shadow-none hover:bg-white/20 transition-all"
          type="button"
        >
          <ClockArrowUp />
        </Button>
        <Button
          className=" p-3 duration-75 bg-transparent hover:border shadow-none hover:bg-white/20 transition-all"
          type="button"
        >
          <BatteryFull />
        </Button>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              className=" p-3 duration-75 bg-transparent hover:border shadow-none hover:bg-white/20 transition-all"
              type="button"
            >
              <Power />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="rounded-sm bg-neutral-900/90 w-20 text-white border-black">
            <DropdownMenuItem className="grid grid-cols-3 gap-3 font-bold py-1 focus:bg-neutral-500/50 focus:text-white">
              <LockKeyhole size={20} />
              <p className="col-span-2 text-xs">Lock</p>
            </DropdownMenuItem>
            <DropdownMenuItem className="grid grid-cols-3 gap-3 font-bold py-1 focus:bg-neutral-500/50 focus:text-white">
              <Moon size={20} />
              <p className="col-span-2 text-xs">Sleep</p>
            </DropdownMenuItem>
            <DropdownMenuItem className="grid grid-cols-3 gap-3 font-bold py-1 focus:bg-neutral-500/50 focus:text-white">
              <Power size={20} />
              <p className="col-span-2 text-xs">Shut down</p>
            </DropdownMenuItem>
            <DropdownMenuItem className="grid grid-cols-3 gap-3 font-bold py-1 focus:bg-neutral-500/50 focus:text-white">
              <RotateCcw size={20} />
              <p className="col-span-2 text-xs">Restart</p>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}
