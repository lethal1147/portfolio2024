import React from "react";

export default function TaskMenuItem({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <li className="rounded-sm p-1.5 size-12 flex justify-center items-center hover:bg-gray-200/20 hover:backdrop-blur-md transition-all">
      {children}
    </li>
  );
}
