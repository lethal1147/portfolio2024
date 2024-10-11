import React from "react";
import Taskbar from "./components/taskbar";
import DesktopIcon from "./components/desktopIcon";
import Image from "next/image";
import { MicrosoftEdgeIcon } from "@/components/icons";

export default function page() {
  return (
    <main className="min-w-screen min-h-screen max-w-screen max-h-screen relative bg-wall-paper bg-center bg-cover bg-fixed">
      <div className="grid grid-flow-col auto-cols-[100px] grid-rows-[repeat(auto-fill,minmax(100px,1fr))] gap-4 rounded-lg h-[calc(100vh-60px)] overflow-hidden">
        <DesktopIcon name="Recycle Bin">
          <Image
            height={64}
            width={64}
            src="/asset/image/recycle-bin-icon.webp"
            alt="recycle-bin"
          />
        </DesktopIcon>
        <DesktopIcon name="Microsoft Edge">
          <div className="size-14">
            <MicrosoftEdgeIcon />
          </div>
        </DesktopIcon>
        <DesktopIcon name="Google Chrome">
          <Image
            height={64}
            width={64}
            src="/asset/image/google-chrome-icon.png"
            alt="google chrom icon"
          />
        </DesktopIcon>
        <DesktopIcon name="Projects">
          <Image
            height={64}
            width={64}
            src="/asset/image/desktop-folder-icon.png"
            alt="folder"
          />
        </DesktopIcon>
        <DesktopIcon name="Hobbies">
          <Image
            height={64}
            width={64}
            src="/asset/image/desktop-folder-icon.png"
            alt="folder"
          />
        </DesktopIcon>
      </div>
      <div className=" fixed left-0 w-full z-50 bottom-0">
        <Taskbar />
      </div>
    </main>
  );
}
