import styles from "../styles/slider.module.css";
import SliderItem from "./SliderItem";

export default function Slider() {
  return (
    <section
      className={styles.slider}
      data-scroll-section
      data-scroll-direction="horizontal"
    >
      <div className={styles.slider__top}> </div>
      <div className={styles.slider__bottom}>
        <SliderItem />
        <SliderItem />
        <SliderItem />
        <SliderItem />
        <SliderItem />
        <SliderItem />
      </div>
    </section>
  );
}
