import styles from "@/styles/grid.module.scss";
import GridImage from "./GridImage";
import { IMAGES_GRID } from "mock/data";

export default function Grid() {
  const images = IMAGES_GRID.map((item, id) => {
    return item.map((el, index) => (
      <GridImage
        src={el}
        index={index}
        offset={id * 4}
        key={index}
        description="yes"
      />
    ));
  });
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
