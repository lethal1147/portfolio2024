import { ArrowLeft, ArrowRight, RotateCw } from "lucide-react";
import React from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

export default function DefaultWindowMenu() {
  return (
    <div className="flex bg-zinc-800 w-full px-3 py-1.5 gap-5">
      <Button
        className="bg-transparent p-3 hover:bg-gray-200/20 hover:backdrop-blur-md transition-all hover:backdrop-blur-md hover:bg-gray-100/10 shadow-none"
        type="button"
        disabled
      >
        <ArrowLeft size={20} />
      </Button>
      <Button
        className="bg-transparent p-3 hover:bg-gray-200/20 hover:backdrop-blur-md transition-all shadow-none"
        type="button"
        disabled
      >
        <ArrowRight size={20} />
      </Button>
      <Button
        className="bg-transparent p-3 hover:bg-gray-200/20 hover:backdrop-blur-md transition-all shadow-none"
        type="button"
      >
        <RotateCw size={20} />
      </Button>
      <Input
        className=" focus-visible:ring-0 rounded-3xl border-none bg-zinc-900 grow"
        placeholder="home /"
        disabled
      />
    </div>
  );
}
