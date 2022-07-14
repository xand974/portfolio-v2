import styles from "@/styles/single-project/slider-item.module.scss";
import { JAPAN_STREET_IMG } from "mock/data";
import Image from "next/image";
export default function SliderItem() {
  return (
    <section className={`${styles.slider__item}  slider__item--scroll`}>
      <div className={styles.slider__item__wrapper}>
        <Image
          alt="et si"
          src={JAPAN_STREET_IMG}
          layout="fill"
          objectFit="cover"
          style={{ borderRadius: "10px" }}
        />
      </div>
      <div className={styles.slider__item__texts}>
        <h2 className={styles.slider__item__title}>This Title</h2>
        <h3 className={styles.slider__item__subtitle}>That another one</h3>
      </div>
    </section>
  );
}
