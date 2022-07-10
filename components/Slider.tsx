import styles from "../styles/slider.module.scss";
import SliderItem from "./SliderItem";
import { UIEventHandler, useEffect, useState } from "react";
import gsap from "gsap";
import { useRef } from "react";
import { useOnScreen } from "../hooks/on-screen.hook";

export default function Slider() {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [isOnScreen] = useOnScreen(sliderRef, "", 0.9);
  const [mouseX, setMouseX] = useState(0);

  useEffect(() => {
    function callback(e: Event) {
      setMouseX(window.scrollY);
    }
    document.addEventListener("scroll", callback);
    return () => {
      console.log("destroyed");

      document.removeEventListener("scroll", callback);
    };
  }, []);

  useEffect(() => {
    if (!isOnScreen) return;
    if (!sliderRef.current) return;
    const sliderItems = gsap.utils.toArray(".slider__item--scroll");
    gsap.to(sliderItems, {
      xPercent: -100 * (sliderItems.length - 1),
    });
  }, [isOnScreen]);
  return (
    <section data-scroll-section className={styles.slider} ref={sliderRef}>
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
