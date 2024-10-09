"use client";

import { useEffect, useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
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
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import UserAvatar from "@/components/common/userAvatar";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "./store";
import { changeAccount } from "./features/account/accountSlice";
import { Account } from "@/types/account";
import useStatus from "@/hooks/useStatus";
import { API_STATUS } from "./constant/status";
import Loader from "@/components/common/loader";
import { useRouter } from "next/navigation";

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const [currentDate, setCurrentDate] = useState(
    dayjs().format("dddd, MMMM D")
  );
  const [currentTime, setCurrentTime] = useState(dayjs().format("HH:mm"));
  const { isPending, setStatus } = useStatus();
  const router = useRouter();
  const account = useSelector((state: RootState) => state.account);
  const dispatch = useDispatch<AppDispatch>();

  const handleChangeAccount = (acc: Account) => {
    dispatch(changeAccount(acc));
  };

  const onSignin = async () => {
    setTimeout(() => {
      router.push("/desktop");
    }, 2000);
  };

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsVisible(false);
      }
    };
    window.addEventListener("keydown", handleEscape);
    setIsClient(true);
    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(dayjs().format("HH:mm"));
      setCurrentDate(dayjs().format("dddd, MMMM D"));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      data-testid="lock-screen-page"
      className="w-screen h-screen relative overflow-hidden"
    >
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
        data-testid="sign-in-form"
        className={cn(
          "absolute inset-0 transition-all ease-out delay-5000 duration-500 translate-y-full size-full flex justify-center z-30 items-center text-white backdrop-blur-md bg-gray-50 bg-opacity-20",
          {
            "translate-y-0 opacity-100": isVisible,
            "opacity-0": !isVisible,
          }
        )}
      >
        <Card className="bg-transparent text-white border-none shadow-none">
          <CardHeader className="flex items-center">
            <UserAvatar account={account.currentAccount} />
          </CardHeader>
          <CardContent className="flex flex-col gap-5">
            <CardTitle className="text-center text-xl">
              {account.currentAccount.accountName}
            </CardTitle>
            <CardFooter className="flex justify-center">
              {isPending ? (
                <div className="flex gap-3 items-center">
                  <div className="size-3">
                    <Loader size={5} />
                  </div>
                  <p>Welcome</p>
                </div>
              ) : (
                <div className="flex flex-col gap-3">
                  <Input
                    className="border-gray-500 transition-all duration-75 focus:border-b-2 focus:border-b-blue-500 bg-black/40 placeholder:text-gray-400"
                    placeholder="PIN"
                  />
                  <Button
                    onClick={() => {
                      setStatus(API_STATUS.PENDING);
                      onSignin();
                    }}
                    type="button"
                  >
                    Sign-In
                  </Button>
                </div>
              )}
            </CardFooter>
          </CardContent>
        </Card>

        <div className="flex flex-col gap-1 absolute bottom-10 left-10 w-52 z-50 text-white justify-between">
          {account.accountsList.map((acc) => (
            <div
              role="button"
              onClick={() => handleChangeAccount(acc)}
              key={acc.accountName}
              className={cn(
                "flex gap-3 w-full p-1 rounded-sm items-center hover:bg-gray-300/20 transition-all cursor-pointer",
                {
                  "bg-gray-300/20":
                    acc.accountName === account.currentAccount.accountName,
                }
              )}
            >
              <Avatar>
                <AvatarImage src={acc.imgPath} alt={acc.accountName} />
                <AvatarFallback>
                  <Image
                    width="250"
                    height="250"
                    alt="User-icon"
                    src={userLogo}
                  />
                </AvatarFallback>
              </Avatar>
              <p>{acc.accountName}</p>
            </div>
          ))}
        </div>
      </div>

      {isClient ? (
        <div className="flex absolute bottom-10 right-10 w-44 z-50 text-white justify-between">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <Button
                  className=" p-3 duration-75 bg-transparent shadow-none hover:bg-white/20 transition-all"
                  type="button"
                >
                  <Wifi />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Wifi</p>
              </TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger>
                <Button
                  className=" p-3 duration-75 bg-transparent shadow-none hover:bg-white/20 transition-all"
                  type="button"
                >
                  <BatteryFull />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Battery 100%</p>
              </TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      className=" p-3 duration-75 bg-transparent shadow-none hover:bg-white/20 transition-all"
                      type="button"
                    >
                      <Power />
                    </Button>
                  </DropdownMenuTrigger>
                  <TooltipContent>
                    <p>Power</p>
                  </TooltipContent>
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
              </TooltipTrigger>
            </Tooltip>
          </TooltipProvider>
        </div>
      ) : (
        <p>Loading</p>
      )}
    </div>
  );
}
