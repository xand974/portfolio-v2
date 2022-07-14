import styles from "@/styles/about.module.scss";
import { useRef, useEffect } from "react";
import { getSplitSpan, appearText } from "@/utils/animations-utils";
import { useOnScreen } from "@/hooks/on-screen.hook";
import cls from "classnames";

export default function About() {
  const paragraphRef = useRef<HTMLParagraphElement>(null);
  const [isOnScreen] = useOnScreen(paragraphRef);

  const paragraphClass = cls(styles.about__content, {
    [styles.hide]: !isOnScreen,
  });

  useEffect(() => {
    if (!isOnScreen) return;
    const paragraphChars = getSplitSpan(paragraphRef);
    if (!paragraphChars) return;
    appearText(paragraphChars);
  }, [isOnScreen]);

  return (
    <section className={styles.about} data-scroll-section>
      <h2 id="about" className={styles.about__title}>
        About
      </h2>
      <p className={paragraphClass} ref={paragraphRef}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, in
        sed. Pariatur rerum magnam ut incidunt laudantium. Aut ullam
        exercitationem aliquam eum fugit totam commodi veritatis quibusdam iste
        eaque quisquam quasi est molestiae libero, provident iure consectetur
        perferendis, magni sapiente. Nobis eum iure dignissimos quaerat facere
        iusto reiciendis aliquid. Sed deserunt cupiditate voluptatum, nesciunt
        non minima excepturi nemo fugit quae tempora vero placeat eligendi sequi
        odio earum dolorem laudantium aliquid, nulla consectetur repudiandae
        fuga doloribus praesentium. Dolore fugit molestias ducimus inventore
        praesentium, dignissimos eligendi provident? Aspernatur, ex voluptatem.
        Molestiae, expedita ipsa beatae libero magnam alias ab dolorum cum ut
        dolor. Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Dignissimos voluptatem nisi iste
      </p>
    </section>
  );
}
