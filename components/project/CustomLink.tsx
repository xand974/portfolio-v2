import React from "react";
import style from "@/styles/link.module.scss";
import { LinkType } from "@/types/index";
import Link from "next/link";

export default function CustomLink({ title, link }: LinkType) {
  const goTo = (tag: string) => {
    console.log(tag);
  };
  return (
    <li className={style.link}>
      <Link href={link} className={style.link__text}>
        {title}
      </Link>
    </li>
  );
}
