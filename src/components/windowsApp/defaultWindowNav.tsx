import { Home, Minus, Plus, Square, X } from "lucide-react";
import React from "react";
import { Button } from "../ui/button";

type DefaultWindowNavProps = {
  onClose: () => void;
};

export default function DefaultWindowNav({ onClose }: DefaultWindowNavProps) {
  return (
    <div className="flex p-2 pb-0 gap-3 w-full relative">
      <div className="flex px-4 w-52 h-10 justify-between bg-zinc-800 items-center rounded-t-xl border-b border-zinc-900 gap-2">
        <div className="flex items-center gap-3">
          <Home size={20} />
          <p className="text-sm">Home</p>
        </div>
        <Button className="bg-transparent p-1 size-6 shadow-none" type="button">
          <X size={16} />
        </Button>
      </div>
      <Button className="bg-transparent hover:bg-gray-200/20 hover:backdrop-blur-md transition-all shadow-none size-8 p-1 self-center">
        <Plus size={16} />
      </Button>
      <div className="flex absolute top-0 right-0">
        <Button
          className="bg-transparent p-5 hover:bg-gray-200/20 hover:backdrop-blur-md transition-all hover:text-zinc-400 shadow-none text-zinc-600"
          type="button"
        >
          <Minus size={16} />
        </Button>
        <Button
          className="bg-transparent p-5 hover:bg-gray-200/20 hover:backdrop-blur-md transition-all hover:text-zinc-400 shadow-none text-zinc-600"
          type="button"
        >
          <Square size={16} />
        </Button>
        <Button
          onClick={onClose}
          className="bg-transparent p-5 hover:bg-gray-200/20 hover:backdrop-blur-md transition-all hover:text-zinc-400 shadow-none text-zinc-600"
          type="button"
        >
          <X size={16} />
        </Button>
      </div>
    </div>
  );
}
