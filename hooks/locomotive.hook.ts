import { useEffect, useRef } from "react";
import { LocomotiveScrollOptions, Scroll } from "locomotive-scroll";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);
type UseLocomotiveScrollHook = [React.RefObject<Scroll>];

type Props = {
  ref: React.RefObject<Element>;
  multiplier: number;
  class: string;
  loading?: boolean;
  mobile?: any;
  tablet?: any;
} & Omit<LocomotiveScrollOptions, "el">;

export const useLocoScroll = ({
  loading,
  ref,
  ...otherProps
}: Props): UseLocomotiveScrollHook => {
  const locomotiveScrollRef = useRef<Scroll | null>(null);
  useEffect(() => {
    if (!ref || !ref.current) return;

    import("locomotive-scroll").then((LocomotiveScroll) => {
      locomotiveScrollRef.current = new LocomotiveScroll.default({
        ...otherProps,
        el: ref.current,
      });
    });
    return () => {
      locomotiveScrollRef.current?.destroy();
    };
  }, []);

  return [locomotiveScrollRef];
};
