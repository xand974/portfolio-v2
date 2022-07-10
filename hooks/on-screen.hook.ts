import { RefObject, useEffect, useState } from "react";

export const useOnScreen = (
  ref: RefObject<HTMLElement>,
  rootMargin: string = "10px",
  threshold = 0.3
): [boolean, IntersectionObserverEntry] => {
  const [isOnScreen, setIsOnScreen] = useState(false);
  const [entry, setEntry] = useState({} as IntersectionObserverEntry);
  useEffect(() => {
    const callback = ([entry]: IntersectionObserverEntry[]) => {
      setIsOnScreen(entry.isIntersecting ?? false);
      setEntry(entry);
    };
    const intersection = new IntersectionObserver(callback, {
      threshold,
      rootMargin,
    });

    const currentElement = ref.current;
    if (currentElement) {
      intersection.observe(currentElement);
    }

    return () => {
      if (currentElement) intersection.unobserve(currentElement);
    };
  }, [ref]);
  return [isOnScreen, entry];
};
