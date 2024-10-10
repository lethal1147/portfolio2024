import React from "react";

export default function TaskMenuItem({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <li className="rounded-sm transition p-1.5 size-12 flex justify-center items-center hover:bg-white/10 hover:backdrop-blur-md">
      {children}
    </li>
  );
}
