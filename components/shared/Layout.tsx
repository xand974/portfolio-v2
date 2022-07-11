import React, { useEffect, useRef } from "react";
import { useLocoScroll } from "@/hooks/locomotive.hook";
import Modal from "@/services/modal/Modal";
import { useAppSelector } from "@/hooks/context.hook";

type LayoutType = {
  children: React.ReactNode;
};
export default function Layout({ children }: LayoutType) {
  const containerRef = useRef(null);
  const { open, element } = useAppSelector((state) => state.modal);

  const [locomotiveRef] = useLocoScroll({
    inertia: 0.6,
    ref: containerRef,
    smooth: true,
    smoothMobile: true,
    multiplier: 1,
    class: "is-reveal",
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
