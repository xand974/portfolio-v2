import React from "react";
import style from "../styles/link.module.css";
import { LinkType } from "../types";

export default function CustomLink({ title, tag }: LinkType) {
  const goTo = (tag: string) => {
    console.log(tag);
  };
  return (
    <li className={style.link} onClick={() => goTo(tag)}>
      {title}
    </li>
  );
}
