import { MicrosoftEdgeIcon } from "@/components/icons";
import Image from "next/image";
import { DesktopAppType } from "./types";
import HobbiesFolder from "@/components/windowsApp/hoobiesFolder";

export const LANGUAGES = [
  {
    id: "ENG",
    name: "English (United States)",
    short: "US",
  },
  {
    id: "ไทย",
    name: "Thai",
    short: "Thai Kedmanee",
  },
];

export const DESKTOP_APPS: DesktopAppType[] = [
  {
    id: "RecycleBin",
    name: "Recycle Bin",
    children: (
      <Image
        height={64}
        width={64}
        src="/asset/image/recycle-bin-icon.webp"
        alt="recycle-bin"
      />
    ),
    window: <HobbiesFolder />,
  },
  {
    id: "MicrosoftEdge",
    name: "Microsoft Edge",
    children: (
      <div className="size-14">
        <MicrosoftEdgeIcon />
      </div>
    ),
    window: <HobbiesFolder />,
  },
  {
    id: "GoogleChrome",
    name: "Google Chrome",
    children: (
      <Image
        height={64}
        width={64}
        src="/asset/image/google-chrome-icon.png"
        alt="google chrom icon"
      />
    ),
    window: <HobbiesFolder />,
  },
  {
    id: "ProjectsFolder",
    name: "Projects",
    children: (
      <Image
        height={64}
        width={64}
        src="/asset/image/desktop-folder-icon.png"
        alt="folder"
      />
    ),
    window: <HobbiesFolder />,
  },
  {
    id: "HobbiesFolder",
    name: "Hobbies",
    children: (
      <Image
        height={64}
        width={64}
        src="/asset/image/desktop-folder-icon.png"
        alt="folder"
      />
    ),
    window: <HobbiesFolder />,
  },
];
