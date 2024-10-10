import React from "react";
import { SiWindows } from "react-icons/si";
import "./taskbar.css";
import { MicrosoftEdgeIcon } from "@/components/icons";
import TaskMenuItem from "./taskMenuItem";
import Image from "next/image";
import ActionBar from "./actionBar";

export default function Taskbar() {
  return (
    <nav className="grid grid-cols-3 py-1 px-5 backdrop-blur-md w-full h-14 bg-gray-800/80 border-t border-gray-600">
      <div className="col-span-1" />
      <ul className="flex m-auto col-span-1 gap-2">
        <TaskMenuItem>
          <svg width="0" height="0">
            <linearGradient
              id="blue-gradient"
              x1="100%"
              y1="100%"
              x2="0%"
              y2="0%"
            >
              <stop stopColor="#0091ED" offset="0%" />
              <stop stopColor="#4EE1FE" offset="100%" />
            </linearGradient>
          </svg>
          <SiWindows
            className="size-6"
            style={{ fill: "url(#blue-gradient)" }}
          />
        </TaskMenuItem>
        <TaskMenuItem>
          <div className="size-7">
            <MicrosoftEdgeIcon />
          </div>
        </TaskMenuItem>
        <TaskMenuItem>
          <Image
            height={28}
            width={28}
            src="/asset/image/Windows-11-Explorer.png"
            alt="file explorer icon"
          />
        </TaskMenuItem>
        <TaskMenuItem>
          <Image
            height={32}
            width={32}
            src="/asset/image/outlook-icon.png"
            alt="outlook icon"
          />
        </TaskMenuItem>
        <TaskMenuItem>
          <Image
            height={28}
            width={28}
            src="/asset/image/google-chrome-icon.png"
            alt="google chrom icon"
          />
        </TaskMenuItem>
        <TaskMenuItem>
          <Image
            height={28}
            width={28}
            src="/asset/image/steam-icon.png"
            alt="visaul studio code icon"
          />
        </TaskMenuItem>
      </ul>
      <div className="col-span-1 flex justify-end items-center">
        <ActionBar />
      </div>
    </nav>
  );
}
