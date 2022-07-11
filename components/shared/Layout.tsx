import React, { useEffect, useRef } from "react";
import { useLocoScroll } from "@/hooks/locomotive.hook";

type LayoutType = {
  children: React.ReactNode;
  direction: "horizontal" | "vertical";
};
export default function Layout({ children, direction }: LayoutType) {
  const containerRef = useRef(null);

  const [locomotiveRef] = useLocoScroll({
    inertia: 0.6,
    ref: containerRef,
    smooth: true,
    smoothMobile: true,
    multiplier: 1,
    class: "is-reveal",
    direction: direction,
  });
  return (
    <div data-scroll-container id="main-container" ref={containerRef}>
      {children}
    </div>
  );
}
