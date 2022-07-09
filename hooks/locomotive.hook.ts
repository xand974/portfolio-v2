import { useEffect, useRef } from "react";
import { LocomotiveScrollOptions, Scroll } from "locomotive-scroll";
type UseLocomotiveScrollHook = [React.RefObject<Scroll>];

type Props = {
  ref: React.RefObject<Element>;
  multiplier: number;
  class: string;
  loading?: boolean;
} & Omit<LocomotiveScrollOptions, "el">;

export const useLocoScroll = ({
  loading,
  ref,
  ...otherProps
}: Props): UseLocomotiveScrollHook => {
  const locomotiveScrollRef = useRef<Scroll | null>(null);
  useEffect(() => {
    if (!ref || !ref.current) return;
    console.log(ref);

    console.log("trigger");

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
