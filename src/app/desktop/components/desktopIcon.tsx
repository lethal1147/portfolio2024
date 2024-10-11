import React from "react";

type DesktopIconProps = {
  name: string;
  children: React.ReactNode;
};

export default function DesktopIcon({ name, children }: DesktopIconProps) {
  return (
    <div className="rounded-sm transition flex flex-col justify-center items-center p-1.5 size-24 hover:bg-white/10 hover:backdrop-blur-md">
      {children}
      <p className="text-sm text-white text-center">{name}</p>
    </div>
  );
}
