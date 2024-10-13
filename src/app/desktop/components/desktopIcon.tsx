"use client";

import React, { useState } from "react";
import { createPortal } from "react-dom";
import { DesktopAppType } from "../types";
import HobbiesFolder from "@/components/windowsApp/hoobiesFolder";

type DesktopIconProps = {
  app: DesktopAppType;
};

export default function DesktopIcon({ app }: DesktopIconProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleDoubleClick = () => {
    setIsOpen(true);
  };

  const handleCloseWindow = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div
        onDoubleClick={() => handleDoubleClick()}
        className="rounded-sm flex flex-col justify-center items-center p-1.5 size-24 hover:bg-gray-200/20 hover:backdrop-blur-md transition-all"
      >
        {app.children}
        <p className="text-sm text-white text-center">{app.name}</p>
      </div>
      {isOpen &&
        createPortal(
          <div
            className="fixed inset-0 top-0 flex items-center justify-center z-50"
            id="window-overlay"
          >
            <div className="relative">
              <HobbiesFolder onClose={handleCloseWindow} />
            </div>
          </div>,
          document.getElementById("desktop") as HTMLElement
        )}
    </>
  );
}
