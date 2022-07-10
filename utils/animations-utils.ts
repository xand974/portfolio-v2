import gsap from "gsap";
import { RefObject } from "react";
//@ts-ignore
import SplitText from "split-text-js";
export const moveToTop = async (array: HTMLElement[]) => {
  let id = null;
  for (const letter of array) {
    letter.style.transform = `translateY(200px)`;
    gsap.to(letter, {
      y: 0,
      opacity: 1,
      duration: 1,
      ease: "power2",
    });
  }
};

export const getSplitSpan = (
  ref: RefObject<HTMLElement>
): HTMLSpanElement[] | undefined => {
  if (!ref) return;
  const splitElement = new SplitText(ref.current);
  const spanElements = splitElement.chars as HTMLSpanElement[];
  return spanElements;
};

export const appearText = async (array: HTMLElement[]) => {
  let id = null;
  for (const letter of array) {
    gsap.to(letter, {
      opacity: 1,
      duration: 1,
      ease: "power2",
    });
    await sleep(100);
  }
};

export const sleep = (milliSecond: number) =>
  new Promise((callback) => setTimeout(callback, milliSecond));
