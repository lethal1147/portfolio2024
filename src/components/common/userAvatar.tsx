"use client";

import Image from "next/image";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import userLogo from "../../../public/asset/image/Windows-10-user-icon-big.webp";
import { Account } from "@/types/account";

export default function UserAvatar({ account }: { account: Account }) {
  return (
    <Avatar className="size-48">
      <AvatarImage src={account.imgPath} alt={account.accountName} />
      <AvatarFallback>
        <Image width="250" height="250" alt="User-icon" src={userLogo} />
      </AvatarFallback>
    </Avatar>
  );
}
