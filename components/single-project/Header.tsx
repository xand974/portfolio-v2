import styles from "@/styles/single-project/header.module.scss";
import { useEffect, useRef } from "react";
import { getSplitSpan, moveToTop } from "@/utils/animations-utils";

export default function Header() {
  const firstNameRef = useRef<HTMLHeadingElement>(null);
  const lastNameRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const firstNameChars = getSplitSpan(firstNameRef);
    const lastNameChars = getSplitSpan(lastNameRef);
    if (!firstNameChars || !lastNameChars) return;
    const chars = [...firstNameChars, ...lastNameChars];
    moveToTop(chars);
  }, []);

  return (
    <header className={styles.header} data-scroll-section>
      <h1
        className={`${styles.header__title} ${styles.header__title__space}`}
        data-scroll
        data-scroll-speed="1"
        ref={firstNameRef}
      >
        ALEXANDRE
      </h1>
      <br />
      <h1
        className={styles.header__title}
        data-scroll
        data-scroll-speed="2"
        ref={lastNameRef}
      >
        MALET
      </h1>
    </header>
  );
}
