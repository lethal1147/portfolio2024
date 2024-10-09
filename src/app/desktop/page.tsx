import React from "react";
import Taskbar from "./components/taskbar";

export default function page() {
  return (
    <main className="w-screen h-screen relative bg-wall-paper bg-center bg-cover bg-fixed">
      <div className=" fixed left-0 w-full bottom-0">
        <Taskbar />
      </div>
    </main>
  );
}
