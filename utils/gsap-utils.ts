import gsap from "gsap";

export const moveToTop = (array: HTMLElement[]) => {
  let id = null;
  for (const letter of array) {
    letter.style.transform = `translateY(200px)`;
    gsap.to(letter, {
      y: 0,
      opacity: 1,
      duration: 1,
      ease: "power2",
    });
    id = setTimeout(() => {}, 1000);
  }
  if (id) clearTimeout(id);
};
