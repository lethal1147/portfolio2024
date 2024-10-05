"use client";

import Image from "next/image";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import userLogo from "../../../public/asset/image/Windows-10-user-icon-big.webp";

export default function UserAvatar() {
  return (
    <Avatar className="size-48">
      <AvatarImage
        src="/asset/image/joakimDahlstrom.webp"
        alt="Joakim Dahlstrom"
      />
      <AvatarFallback>
        <Image width="250" height="250" alt="User-icon" src={userLogo} />
      </AvatarFallback>
    </Avatar>
  );
}
