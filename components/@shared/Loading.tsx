import styles from "@/styles/loading.module.scss";
import { getSplitSpan, sleep } from "../../utils/animations-utils";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { useDispatch } from "react-redux";
import { SET_LOADING } from "@/context/slices/app.slice";

export default function Loading() {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const dispatch = useDispatch();
  useEffect(() => {
    const setTextEffect = async () => {
      const spans = getSplitSpan(titleRef);
      if (!spans) return;
      for (const span of spans) {
        gsap.to(span, {
          textShadow: "0 0 20px white",
          opacity: 1,
        });
        await sleep(10);
      }
      dispatch(SET_LOADING(false));
    };
    setTextEffect();
  }, []);
  return (
    <div className={styles.loading}>
      <h1 className={styles.loading__text} ref={titleRef}>
        Malet's Portfolio
      </h1>
    </div>
  );
}
