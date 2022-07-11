import styles from "@/styles/grid.module.scss";
import GridImage from "./GridImage";
import { IMAGES_GRID } from "mock/data";
import Overview from "./Overview";
export default function Grid() {
  const images = IMAGES_GRID.map((item, id) =>
    item.map((el, index) => (
      <GridImage
        src={el}
        index={index}
        offset={id * 6}
        key={index}
        description="yes"
      />
    ))
  );
  return (
    <main className={styles.container} data-scroll-section>
      <div className={styles.container__wrapper}>
        <h1
          className={styles.container__wrapper__title}
          data-scroll
          data-scroll-speed="3"
        >
          You see that line ?
        </h1>
        <section className={styles.container__wrapper__grid}>{images}</section>
      </div>
    </main>
  );
}
