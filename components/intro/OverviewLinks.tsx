import { LinkType } from "@/types/index";
import Link from "next/link";
import styles from "@/styles/overview-links.module.scss";

export const OverviewLink = () => {
  const setMarginLeft = (index: number): string => {
    return index % 2 !== 0 ? `${index + 15}px` : `${index}px`;
  };
  const links: LinkType[] = [
    { title: "RESUME", link: "resume" },
    { title: "ABOUT ME", link: "about-me" },
    { title: "PROJECTS", link: "project/123" },
    { title: "CONTACT ME", link: "contact" },
    { title: "SKILLS", link: "skills" },
  ];
  return (
    <div data-scroll className={styles.left}>
      <div className={styles.left__wrapper}>
        <h1 className={styles.left__wrapper__code}>{"<html>"}</h1>
        <div className={styles.left__wrapper__list}>
          {links.map((item, index) => (
            <div
              key={index}
              style={{ marginLeft: setMarginLeft(index) }}
              className={styles.left__wrapper__list__item}
            >
              <Link href={item.link}>{item.title}</Link>
            </div>
          ))}
        </div>
        <h1 className={styles.left__wrapper__code}>{"</html>"}</h1>
      </div>
    </div>
  );
};
