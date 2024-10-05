"use client";

import React, { ReactNode } from "react";
import { store } from "@/app/store";
import { Provider } from "react-redux";

export default function Providers({ children }: { children: ReactNode }) {
  return <Provider store={store}>{children}</Provider>;
}
