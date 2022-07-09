import React, { useEffect, useRef } from "react";
import { useLocoScroll } from "../hooks/locomotive.hook";

type LayoutType = {
  children: React.ReactNode;
};
export default function Layout({ children }: LayoutType) {
  const containerRef = useRef(null);

  const [locomotiveRef] = useLocoScroll({
    inertia: 0.6,
    ref: containerRef,
    smooth: true,
    smoothMobile: true,
    multiplier: 1,
    class: "is-reveal",
  });

  useEffect(() => {
    console.log(locomotiveRef);
    if (!locomotiveRef) return;
    locomotiveRef.current?.on("scroll", (data) => {
      console.log(data.currentElements);
    });
  }, [locomotiveRef]);
  return (
    <div data-scroll-container id="main-container" ref={containerRef}>
      {children}
    </div>
  );
}
