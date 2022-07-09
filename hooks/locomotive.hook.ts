import { useEffect, useRef } from "react";
// @ts-ignore
import { LocomotiveScrollOptions, Scroll } from "locomotive-scroll";
type UseLocomotiveScrollHook = [React.RefObject<Scroll>];

type Props = {
  ref: React.RefObject<Element>;
  multiplier: number;
  class: string;
  loading?: boolean;
} & Omit<LocomotiveScrollOptions, "el">;

// @ts-ignore
export const useLocoScroll = ({
  loading,
  ref,
  ...otherProps
}: Props): UseLocomotiveScrollHook => {
  const locomotiveScrollRef = useRef<Scroll | null>(null);
  useEffect(() => {
    if (!ref || !ref.current) return;

    // @ts-ignore
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
