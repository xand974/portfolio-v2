import styles from "@/styles/overview.module.scss";
import { OverviewScrollMenu } from "./OverviewScrollMenu";
import { useRef, useState } from "react";
import {
  ArrowForwardIos,
  GitHub,
  LinkedIn,
  Twitter,
} from "@mui/icons-material";
import cls from "classnames";
import { OverviewLink } from "./OverviewLinks";
import { useAppSelector } from "../../hooks/context.hook";

//#region Nested Component

const Divider = () => (
  <div className={styles.container__wrapper__divider}></div>
);

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
  const [expand, setExpand] = useState(false);
  const { lightOn } = useAppSelector((state) => state.grid);

  const toggleExpand = () => {
    setExpand((prev) => (prev = !prev));
  };

  const buttonExpandClass = cls(styles.container__top__btn, {
    [styles["light--on"]]: lightOn,
  });
  const animation = cls(
    styles.container__top__btn__icon,
    styles["bounce--animation-x"]
  );

  return (
    <section
      className={styles.container}
      style={{
        transform: expand ? `translateY(-107vh)` : `translateY(-7vh)`,
      }}
      ref={containerRef}
    >
      <div
        className={styles.container__top}
        style={{
          transform: expand ? `translateY(10vh)` : `translateY(-20px)`,
        }}
      >
        <button
          className={buttonExpandClass}
          onClick={() => toggleExpand()}
          style={{ transform: expand ? "rotate(90deg)" : "rotate(-90deg)" }}
        >
          <ArrowForwardIos
            className={animation}
            style={{ color: expand ? "black" : "white" }}
          />
        </button>
      </div>
      <div className={styles.container__wrapper}>
        <OverviewLink />
        <Divider />
        <OverviewScrollMenu />
        <Sidebar />
      </div>
    </section>
  );
}
