import style from "../styles/header.module.scss";
import gsap from "gsap";
// @ts-ignore
import SplitText from "split-text-js";
import { useEffect, useRef } from "react";
import { moveToTop } from "../utils/gsap-utils";

export default function Header() {
  const firstNameRef = useRef(null);
  const lastNameRef = useRef(null);

  useEffect(() => {
    if (!firstNameRef || !lastNameRef) return;
    const firstName = new SplitText(firstNameRef.current);
    const lastName = new SplitText(lastNameRef.current);
    const firstNameChars = firstName.chars as HTMLSpanElement[];
    const lastNameChars = lastName.chars as HTMLSpanElement[];
    const chars = [...firstNameChars, ...lastNameChars];
    moveToTop(chars);
  }, []);

  return (
    <header className={style.header} data-scroll-section>
      <h1
        className={style.header__title}
        data-scroll
        data-scroll-speed="1"
        ref={firstNameRef}
      >
        ALEXANDRE
      </h1>
      <br />
      <h1
        className={style.header__title}
        data-scroll
        data-scroll-speed="2"
        ref={lastNameRef}
      >
        MALET
      </h1>
    </header>
  );
}
