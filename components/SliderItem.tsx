import styles from "../styles/slider-item.module.css";
import Image from "next/image";
export default function SliderItem() {
  return (
    <div className={styles.slider__item}>
      <div className={styles.slider__item__wrapper}>
        <Image
          alt="et si"
          src={
            "https://images.unsplash.com/photo-1560497459-0bcdf9c15c16?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
          }
          layout="fill"
          objectFit="cover"
          style={{ borderRadius: "10px" }}
        />
      </div>
      <div className={styles.slider__item__texts}>
        <h2 className={styles.slider__item__title}>This Title</h2>
        <h3 className={styles.slider__item__subtitle}>That another one</h3>
      </div>
    </div>
  );
}
