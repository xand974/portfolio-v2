import { LinkType } from "@/types/index";
import Link from "next/link";
import styles from "@/styles/overview-links.module.scss";
import { LINKS } from "mock/data";
export const OverviewLink = () => {
  const setMarginLeft = (index: number): string => {
    return index % 2 !== 0 ? `${index + 15}px` : `${index}px`;
  };

  return (
    <div data-scroll className={styles.left}>
      <div className={styles.left__wrapper}>
        <div className={styles.left__wrapper__list}>
          {LINKS.map((item, index) => (
            <div
              key={index}
              style={{ marginLeft: setMarginLeft(index) }}
              className={styles.left__wrapper__list__item}
            >
              <Link href={item.link}>{item.title}</Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
