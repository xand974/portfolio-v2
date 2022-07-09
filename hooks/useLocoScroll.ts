import { useEffect } from "react";

export default function useLocoScroll() {
  useEffect(() => {
    const locomotiveScroll =
      typeof window !== `undefined`
        ? require("locomotive-scroll").default
        : null;
    let locoScroll: any;
    if (document === undefined) return;
    const scrollEl = document.querySelector("#main-container");

    if (!scrollEl) return;
    // @ts-ignore
    locoScroll = new locomotiveScroll({
      el: scrollEl,
      smooth: true,
      reloadOnContextChange: true,
      multiplier: 1,
      class: "is-reveal",
    });

    locoScroll.on("scroll", () => {
      console.log("scroll");
    });

    const lsUpdate = () => {
      console.log("Update!");
      if (locoScroll) {
        locoScroll.update();
      }
    };
    window.addEventListener("resize", function () {
      lsUpdate;
    });
    window.addEventListener("load", function () {
      lsUpdate;
    });

    // return () => {
    //     if (locoScroll) {
    //         ScrollTrigger.removeEventListener('refresh', lsUpdate);
    //         locoScroll.destroy();
    //         locoScroll = null;
    //     }
    // }
  }, []);
}
