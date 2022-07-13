import React from "react";
import styles from "@/styles/overview-projects.module.scss";
import Image from "next/image";
import { CLIFF_IMG } from "mock/data";

export default function OverviewProjects() {
  return (
    <div className={styles.card}>
      <div className={styles.card__img}>
        <Image src={CLIFF_IMG} layout="fill" />
      </div>
      <div className={styles.card__right}>
        <h3 className={styles.card__right__title}>Maletflix</h3>
        <p className={styles.card__right__subtitle}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto,
          explicabo.
        </p>
        <p className={styles.card__right__description}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta est
          excepturi iure totam assumenda saepe quod vitae, aliquam magnam
          tempore beatae! Suscipit facilis libero ullam dolorem a obcaecati quo,
          quas qui at? Cumque expedita exercitationem deserunt pariatur nobis
          quae culpa.
        </p>
      </div>
      <div className={styles.card__stacks}></div>
    </div>
  );
}
