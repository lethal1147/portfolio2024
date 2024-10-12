import React from "react";
import Taskbar from "./components/taskbar";
import DesktopIcon from "./components/desktopIcon";
import { DESKTOP_APPS } from "./constants";

export default function Desktop() {
  return (
    <main
      id="desktop"
      className="min-w-screen min-h-screen max-w-screen max-h-screen relative bg-wall-paper bg-center bg-cover bg-fixed"
    >
      <div className="grid grid-flow-col auto-cols-[100px] grid-rows-[repeat(auto-fill,minmax(100px,1fr))] gap-4 rounded-lg h-[calc(100vh-60px)] overflow-hidden">
        {DESKTOP_APPS.map((app) => (
          <DesktopIcon key={app.id} app={app} />
        ))}
      </div>
      <div className=" fixed left-0 w-full z-50 bottom-0">
        <Taskbar />
      </div>
    </main>
  );
}
