import React from "react";
import style from "../styles/link.module.scss";
import { LinkType } from "../types";

export default function CustomLink({ title, tag }: LinkType) {
  const goTo = (tag: string) => {
    console.log(tag);
  };
  return (
    <li className={style.link}>
      <span onClick={() => goTo(tag)} className={style.link__text}>
        {title}
      </span>
    </li>
  );
}
