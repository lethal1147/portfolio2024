"use client";

import dayjs from "dayjs";
import React, { useEffect, useState } from "react";

export default function DateAndTime() {
  const [currentTime, setCurrentTime] = useState(dayjs());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(dayjs());
    }, 1000);

    return () => clearInterval(interval);
  }, []);
  return (
    <div className="flex flex-col items-end text-xs text-gray-100 hover:backdrop-blur-md transition-all p-2 rounded-sm hover:bg-white/10">
      <p>{currentTime.format("h:mm A")}</p>
      <p>{currentTime.format("MM/DD/YYYY")}</p>
    </div>
  );
}
