import { MenuOutlined } from "@mui/icons-material";
import { useEffect, useRef, useState } from "react";
import styles from "../styles/navbar.module.css";
import { LinkType } from "../types/link";
import CustomLink from "./CustomLink";

export default function Navbar() {
  const [expand, setExpand] = useState(false);
  const [list, setList] = useState<HTMLLIElement[]>([]);
  const listRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    getListItems();
    setPositionRecursively(list, 1);
  }, [listRef]);

  const getListItems = () => {
    if (!listRef.current) return;
    const nodeItems = listRef.current?.querySelectorAll("li") ?? null;
    if (!nodeItems) return;
    const items = Array.from(nodeItems);
    setList(items);
  };

  const setPositionRecursively = (list: HTMLLIElement[], _left: number) => {
    if (list.length === 0) return;
    const copy = [...list];
    const first = copy.shift();
    if (!first) return;
    const left = _left;
    first.style.left = `${left}px`;
    setPositionRecursively(copy, left + 20);
  };

  const mouseEnter = () => {
    getListItems();
    setPositionRecursively(list, 1);

    setExpand(true);
  };

  const mouseLeave = () => {
    setExpand(false);
  };

  const goTo = (title: string): any => {
    console.log(title);
  };
  const menuItems: LinkType[] = [
    {
      title: "Home",
      tag: "home",
    },
    {
      title: "About me",
      tag: "aboutMe",
    },
    {
      title: "Projects",
      tag: "projects",
    },
    {
      title: "Skills",
      tag: "skills",
    },
    {
      title: "Contact",
      tag: "contact",
    },
  ];
  return (
    <nav className={styles.navbar}>
      <div
        className={styles.navbar__container}
        onMouseEnter={mouseEnter}
        onMouseLeave={mouseLeave}
      >
        <button className={styles.navbar__container__btn}>
          <MenuOutlined className={styles.navbar__container__btn__icon} />
        </button>
        {expand ? (
          <ul className={styles.navbar__list} ref={listRef}>
            {menuItems.map((item, index) => (
              <CustomLink title={item.title} tag={item.tag} key={index} />
            ))}
          </ul>
        ) : (
          <></>
        )}
      </div>
    </nav>
  );
}
