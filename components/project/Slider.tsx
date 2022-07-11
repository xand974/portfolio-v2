import styles from "@/styles/slider.module.scss";
import SliderItem from "./SliderItem";

export default function Slider() {
  return (
    <section data-scroll-section className={styles.slider}>
      <div className={styles.slider__wrapper}>
        <div className={styles.slider__wrapper__horizontal}>
          <div className={`${styles.slider__bottom} slider__bottom__ref`}>
            <SliderItem />
            <SliderItem />
            <SliderItem />
            <SliderItem />
          </div>
        </div>
      </div>
    </section>
  );
}
