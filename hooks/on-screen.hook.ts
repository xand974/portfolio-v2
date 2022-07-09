import { RefObject, useEffect, useState } from "react";

export const useOnScreen = (ref: RefObject<HTMLElement>): boolean => {
  const [isOnScreen, setIsOnScreen] = useState(false);
  useEffect(() => {
    const callback = ([entry]: IntersectionObserverEntry[]) => {
      setIsOnScreen(entry.isIntersecting ?? false);
    };
    const intersection = new IntersectionObserver(callback, {
      threshold: 0.3,
      rootMargin: "10px",
    });

    const currentElement = ref.current;
    if (currentElement) {
      intersection.observe(currentElement);
    }

    return () => {
      if (currentElement) intersection.unobserve(currentElement);
    };
  }, [ref]);
  return isOnScreen;
};
