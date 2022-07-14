import React, { useEffect, useRef } from "react";
import Image from "next/image";
import styles from "@/styles/single-project/cadre.module.scss";
import { CadreType } from "@/types/cadre";
import { useOnScreen } from "@/hooks/on-screen.hook";
import cls from "classnames";
import { CLIFF_IMG } from "mock/data";
import AngularIcon from "../../assets/icons/angular-icon.svg";
import SvgImage from "../@shared/SvgImage";

export default function Cadre({
  reverse = false,
  showStacks = false,
}: CadreType) {
  const cadreRef = useRef<HTMLDivElement>(null);
  const [isOnScreen] = useOnScreen(cadreRef);

  const getExpandCadreStyle = cls(styles.cadre__image__default, {
    [styles["cadre__image--expand"]]: isOnScreen,
    [styles.cadre__image]: !isOnScreen,
  });

  const getSpanRotationStyle = cls(styles.cadre__image__sm__text, {
    [styles["cadre__image__sm__text--original"]]: !reverse,
    [styles["cadre__image__sm__text--reverse"]]: reverse,
  });

  return (
    <div
      ref={cadreRef}
      className={styles.cadre}
      data-scroll
      style={{ flexDirection: reverse ? "row-reverse" : "row" }}
    >
      <span data-scroll className={getSpanRotationStyle} style={{}}>
        Small One
      </span>

      <div className={getExpandCadreStyle} id="img-path">
        <Image
          alt="et si"
          layout="fill"
          src={CLIFF_IMG}
          objectFit="cover"
          style={{ borderRadius: "10px" }}
        />
      </div>
      {showStacks && (
        <div className={styles.cadre__stacks}>
          <SvgImage style={styles.cadre__stacks__icon} />
          <SvgImage style={styles.cadre__stacks__icon} />
          <SvgImage style={styles.cadre__stacks__icon} />
          <SvgImage style={styles.cadre__stacks__icon} />
        </div>
      )}

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
