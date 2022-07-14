import styles from "@/styles/overview-scroll.module.scss";
import cls from "classnames";
import Image from "next/image";
import { JAPAN_STREET_IMG } from "mock/data";
import { KeyboardArrowDown } from "@mui/icons-material";
import Cadre from "../single-project/Cadre";

export const OverviewScrollMenu = () => {
  const animation = cls(styles.arrow__icon, styles["bounce--animation"]);
  return (
    <div data-scroll className={styles.right}>
      <div className={styles.right__content}>
        <div className={styles.right__content__top}>
          <h1 className={styles.right__content__top__title}>MALET ALEXANDRE</h1>
          <p className={styles.right__content__top__subtitle}>
            Fullstack Web Developer specialized in{" "}
            <span className={styles.stroke}>javascript</span>{" "}
            <span className={styles.bright}>typescript</span> and
            <span className={styles.bright}>.NET C#</span>
          </p>
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
          <div className={styles.code__while}>
            <span>{`// Time left to code`}</span> <br />
            <span>{`while(true){`}</span> <br />
            <span>{`}`}</span>
          </div>
        </div>
        <div className={styles.right__content__bottom}>
          <h1 className={styles.right__content__bottom__title}>PROJECTS</h1>
          <p className={styles.right__content__bottom__subtitle}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit autem
            necessitatibus vel aspernatur fugit in itaque culpa nulla aliquam.
            Magnam, ab? Nihil est eaque odit quos accusantium unde voluptatum a!
          </p>
          <div className={styles.right__content__bottom__cards}>
            <Cadre showStacks={true} reverse={false} />
            <Cadre showStacks={false} reverse={true} />
            <Cadre showStacks={true} reverse={false} />
          </div>
        </div>
      </div>
    </div>
  );
};
