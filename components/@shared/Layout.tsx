import React, { useEffect, useRef } from "react";
import { useLocoScroll } from "@/hooks/locomotive.hook";
import Modal from "@/services/modal/Modal";
import { useAppSelector } from "@/hooks/context.hook";

type LayoutType = {
  children: React.ReactNode;
  direction: "horizontal" | "vertical";
  enableMobile : boolean;
};
export default function Layout({ children, direction, enableMobile  }: LayoutType) {
  const containerRef = useRef(null);
  const { open, element } = useAppSelector((state) => state.modal);
  const tablet = enableMobile ?  {smooth : true, breakpoint :1000} : {};
  const [locomotiveRef] = useLocoScroll({
    inertia: 0.6,
    ref: containerRef,
    smooth: true,
    smoothMobile: true,
    multiplier: 1,
    class: "is-reveal",
    direction: direction,
    tablet
  });
  return (
    <>
      <div data-scroll-container id="main-container" ref={containerRef}>
        {children}
      </div>
      {open ? <Modal child={element} /> : <></>}
    </>
  );
}
