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
    <div className="flex flex-col items-end text-xs p-2 rounded-sm text-gray-100 hover:bg-gray-200/20 hover:backdrop-blur-md transition-all">
      <p>{currentTime.format("h:mm A")}</p>
      <p>{currentTime.format("MM/DD/YYYY")}</p>
    </div>
  );
}
