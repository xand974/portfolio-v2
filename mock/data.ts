import { LinkType } from "@/types/link";

export const BALLON_IMG =
  "https://images.unsplash.com/photo-1657497850517-ef3c57b867c0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80";

export const CLIFF_IMG =
  "https://images.unsplash.com/photo-1541657152021-21efeed08add?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80";

export const JAPAN_STREET_IMG =
  "https://images.unsplash.com/photo-1560497459-0bcdf9c15c16?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80";

export const IMAGES = [BALLON_IMG, CLIFF_IMG, JAPAN_STREET_IMG];

export const IMAGES_GRID = [IMAGES, IMAGES, IMAGES, IMAGES];

export const GRID = [
  [2, 4, 1, 1],
  [6, 9, 1, 1],
  [14, 2, 1, 1],
  [12, 10, 1, 1],
];

export const LINKS: LinkType[] = [
  {
    title: "RESUME",
    link: "https://malet.notion.site/Resume-Alexandre-Malet-531d1c9ee7aa44c39cddc1b5f6734184",
  },
  { title: "ABOUT ME", link: "about-me" },
  { title: "PROJECTS", link: "projects" },
  { title: "SKILLS", link: "skills" },
  { title: "CONTACT ME", link: "mailto:xand974@gmail.com" },
];
