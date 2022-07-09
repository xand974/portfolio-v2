import React from "react";
import Image from "next/image";
import styles from "../styles/cadre.module.scss";
import { CadreType } from "../types/cadre";

export default function Cadre({ reverse = false }: CadreType) {
  return (
    <div
      className={styles.cadre}
      style={{ flexDirection: reverse ? "row-reverse" : "row" }}
    >
      <span
        data-scroll
        className={styles.cadre__image__sm__text}
        style={{
          transform: `rotate(${reverse ? "90deg" : "-90deg"})`,
          right: reverse ? "-50px" : "initial",
          left: reverse ? "initial" : "-50px",
        }}
      >
        Small One
      </span>

      <div className={styles.cadre__image} data-scroll>
        <Image
          alt="et si"
          layout="fill"
          src={
            "https://images.unsplash.com/photo-1541657152021-21efeed08add?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
          }
          objectFit="cover"
          style={{ borderRadius: "3px" }}
        />
      </div>
      <div className={styles.cadre__container}>
        <h3
          className={styles.cadre__container__title}
          data-scroll
          data-scroll-speed="0.6"
          data-scroll-delay="0.1"
        >
          Lorem ipsum dolor sit.
        </h3>
        <p
          className={styles.cadre__container__text}
          data-scroll
          data-scroll-speed="1"
          data-scroll-delay="0.4"
        >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus,
          minus. Nisi nihil consequuntur earum rerum alias quasi quo libero
          vero! Soluta deserunt modi debitis corrupti officia illo aut molestias
          nesciunt?
        </p>
      </div>
    </div>
  );
}
