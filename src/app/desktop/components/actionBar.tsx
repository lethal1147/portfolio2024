"use client";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import React, { useState } from "react";

export default function ActionBar() {
  const [currentLanguage, setCurrentLanguage] = useState("ENG");
  return (
    <div className="flex">
      <Popover>
        <PopoverTrigger className="text-xs p-2 transition-all hover:bg-white/10 hover:backdrop-blur-md rounded-sm text-gray-100">
          {currentLanguage}
        </PopoverTrigger>
        <PopoverContent className="p-3 text-sm bg-zinc-700 border-gray-900 text-gray-100">
          <p className="pb-3">Keyboard layout</p>
          <div
            onClick={() => setCurrentLanguage("ENG")}
            className={cn("flex items-center gap-3 p-3 rounded-md relative", {
              "backdrop-blur-md bg-white/10": currentLanguage === "ENG",
            })}
          >
            <h3>ENG</h3>
            <div>
              <p>English (United States)</p>
              <p className="text-xs">US</p>
            </div>
            <div className="w-1 h-5 rounded-lg bg-sky-300 absolute -left-0.5" />
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
}
