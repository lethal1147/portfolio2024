import React from "react";
import WindowsLayout from "./windowsLayout";

type HobbiesFolderProps = {
  onClose: () => void;
};

export default function HobbiesFolder({ onClose }: HobbiesFolderProps) {
  return (
    <WindowsLayout onClose={onClose}>
      <div className="bg-zinc-900">
        <p>test</p>
      </div>
    </WindowsLayout>
  );
}
