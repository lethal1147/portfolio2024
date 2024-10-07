import React from "react";
import "./loader.css";

export default function Loader({ size = 11.2 }: { size: number }) {
  return (
    <div
      className="spinner"
      style={
        {
          "--spinner-size": `${size}px`,
        } as React.CSSProperties
      }
    />
  );
}
