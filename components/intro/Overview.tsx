import styles from "@/styles/overview.module.scss";
import { LinkType } from "@/types/link";
import Link from "next/link";
import Image from "next/image";
import { JAPAN_STREET_IMG } from "../../mock/data";
import { useRef, useEffect, useState } from "react";
import {
  ArrowForwardIos,
  GitHub,
  KeyboardArrowDown,
  LinkedIn,
  Twitter,
} from "@mui/icons-material";
import cls from "classnames";

//#region Nested Component
const Left = () => {
  const setMarginLeft = (index: number): string => {
    return index % 2 !== 0 ? `${index + 15}px` : `${index}px`;
  };
  const links: LinkType[] = [
    { title: "RESUME", link: "resume" },
    { title: "ABOUT ME", link: "about-me" },
    { title: "PROJECTS", link: "project/123" },
    { title: "CONTACTS", link: "contact" },
    { title: "SKILLS", link: "skills" },
  ];
  return (
    <div data-scroll className={styles.left}>
      <div className={styles.left__wrapper}>
        <h1 className={styles.left__wrapper__code}>{"<html>"}</h1>
        <div className={styles.left__wrapper__list}>
          {links.map((item, index) => (
            <div
              key={index}
              style={{ marginLeft: setMarginLeft(index) }}
              className={styles.left__wrapper__list__item}
            >
              <Link href={item.link}>{item.title}</Link>
            </div>
          ))}
        </div>
        <h1 className={styles.left__wrapper__code}>{"</html>"}</h1>
      </div>
    </div>
  );
};
const Divider = () => (
  <div className={styles.container__wrapper__divider}></div>
);

const Right = () => {
  const animation = cls(styles.arrow__icon, styles["bounce--animation"]);
  return (
    <div data-scroll className={styles.right}>
      <div className={styles.right__content}>
        <div className={styles.right__content__top}>
          <h1 className={styles.right__content__top__title}>MALET ALEXANDRE</h1>
          <p className={styles.right__content__top__description}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam,
            consectetur maxime velit amet temporibus vel cupiditate sint
            accusamus non doloribus voluptatem repellendus iure hic molestias
            unde ea perspiciatis harum alias modi nostrum quam neque sunt? Aut
            autem, voluptatem tenetur commodi minima est nesciunt asperiores
            obcaecati. Adipisci cupiditate maxime dolores fugiat?
          </p>
          <div className={styles.right__content__top__img}>
            <Image
              style={{ borderRadius: "50%" }}
              src={JAPAN_STREET_IMG}
              layout="fill"
              alt="japan street in the night"
            />
          </div>
          <KeyboardArrowDown className={animation} />
        </div>
        <div className={styles.right__content__bottom}>
          <h1 className={styles.right__content__title}>MALET ALEXANDRE</h1>
        </div>
      </div>
    </div>
  );
};

const Sidebar = () => (
  <div className={styles.sidebar}>
    <div className={styles.sidebar__icons}>
      <Twitter className={styles.icon} />
      <GitHub className={styles.icon} />
      <LinkedIn className={styles.icon} />
    </div>
  </div>
);
//#endregion

export default function Overview() {
  const containerRef = useRef<HTMLElement>(null);
  const [left, setLeft] = useState(1);
  const [expand, setExpand] = useState(false);
  useEffect(() => {
    const leftCoordinate = containerRef.current?.getBoundingClientRect().left;
    if (!leftCoordinate) return;
    setLeft(leftCoordinate);
  }, [containerRef.current?.getBoundingClientRect()]);

  const toggleExpand = () => {
    setExpand((prev) => (prev = !prev));
  };

  const animation = cls(
    styles.container__top__btn__icon,
    styles["bounce--animation-x"]
  );

  return (
    <section
      className={styles.container}
      style={{
        transform: expand ? `translateY(-110vh)` : `translateY(-10vh)`,
      }}
      ref={containerRef}
    >
      <div
        className={styles.container__top}
        style={{
          transform: expand ? `translateY(10vh)` : `translateY(0)`,
        }}
      >
        <button
          className={styles.container__top__btn}
          onClick={() => toggleExpand()}
          style={{ transform: expand ? "rotate(90deg)" : "rotate(-90deg)" }}
        >
          <ArrowForwardIos className={animation} />
        </button>
      </div>
      <div className={styles.container__wrapper}>
        <Left />
        <Divider />
        <Right />
        <Sidebar />
      </div>
    </section>
  );
}
