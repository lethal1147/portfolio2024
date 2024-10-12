"use client";

import React from "react";
import Draggable from "react-draggable";
import DefaultWindowMenu from "./defaultWindowMenu";
import DefaultWindowNav from "./defaultWindowNav";

type WindowsLayoutProps = {
  customNav?: React.ReactNode;
  customMenubar?: React.ReactNode;
  children: React.ReactNode;
  onClose: () => void;
};

export default function WindowsLayout({
  children,
  onClose,
  customNav = <DefaultWindowNav onClose={onClose} />,
  customMenubar = <DefaultWindowMenu />,
}: WindowsLayoutProps) {
  return (
    <Draggable handle=".handle">
      <div className="size-[800px] absolute bg-zinc-900 !text-gray-300 border-gray-200 rounded-md">
        <nav className="handle">{customNav}</nav>
        {customMenubar}
        {children}
      </div>
    </Draggable>
  );
}
