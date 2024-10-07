"use client";

import { API_STATUS } from "@/app/constant/status";
import { useState } from "react";

type StatusType = keyof typeof API_STATUS;

export default function useStatus(initialStatus: StatusType = API_STATUS.IDLE) {
  const [status, setStatus] = useState<StatusType>(initialStatus);
  const isPending = status === API_STATUS.PENDING;
  const isIdle = status === API_STATUS.IDLE;
  const isSuccess = status === API_STATUS.SUCCESS;
  const isError = status === API_STATUS.ERROR;

  return {
    status,
    setStatus,
    isPending,
    isIdle,
    isSuccess,
    isError,
  };
}
