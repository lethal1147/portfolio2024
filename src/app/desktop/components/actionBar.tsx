"use client";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import React, { useState } from "react";
import { LANGUAGES } from "../constants";
import DateAndTime from "./dateAndTime";

export default function ActionBar() {
  const [currentLanguage, setCurrentLanguage] = useState("ENG");
  return (
    <div className="flex items-center gap-2">
      <Popover>
        <PopoverTrigger className="text-xs flex p-2 transition-all hover:bg-white/10 hover:backdrop-blur-md rounded-sm text-gray-100">
          <p>{currentLanguage}</p>
        </PopoverTrigger>
        <PopoverContent className="p-3 text-sm flex flex-col gap-1.5 bg-zinc-700 border-gray-900 text-gray-100">
          <p className="pb-1">Keyboard layout</p>
          {LANGUAGES.map((lang) => (
            <div
              key={lang.id}
              onClick={() => setCurrentLanguage(lang.id)}
              className={cn(
                "flex gap-3 p-3 rounded-md relative hover:backdrop-blur-md hover:bg-white/10",
                {
                  "backdrop-blur-md bg-white/10": currentLanguage === lang.id,
                }
              )}
            >
              <h3>{lang.id}</h3>
              <div>
                <p>{lang.name}</p>
                <p className="text-xs">{lang.short}</p>
              </div>
              {currentLanguage === lang.id && (
                <div className="w-1 h-7 rounded-lg bg-sky-300 absolute -left-0.5 top-4" />
              )}
            </div>
          ))}
        </PopoverContent>
      </Popover>
      <DateAndTime />
    </div>
  );
}
