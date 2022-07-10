import { CloseOutlined, MenuOutlined } from "@mui/icons-material";
import { useEffect, useRef, useState } from "react";
import styles from "../styles/navbar.module.scss";
import { LinkType } from "../types/link";
import CustomLink from "./CustomLink";

export default function Navbar() {
  const [expand, setExpand] = useState(false);
  const [list, setList] = useState<HTMLLIElement[]>([]);
  const listRef = useRef<HTMLUListElement>(null);

  //#region  wip
  // useEffect(() => {
  //   getListItems();
  //   setPositionRecursively(list, 1);
  // }, [listRef]);

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

  //#endregion

  const menuItems: LinkType[] = [
    {
      title: "Home",
      link: "/",
    },
    {
      title: "About me",
      link: "/aboutMe",
    },
    {
      title: "Projects",
      link: "/projects",
    },
    {
      title: "Skills",
      link: "/skills",
    },
    {
      title: "Contact",
      link: "/contact",
    },
  ];
  return (
    <nav className={styles.navbar}>
      <div className={styles.navbar__container}>
        <button
          className={styles.navbar__container__btn}
          onClick={() => setExpand(true)}
        >
          <MenuOutlined className={styles.navbar__container__btn__icon} />
        </button>
        <ul
          className={styles.navbar__list}
          ref={listRef}
          style={{
            transform: expand ? `translateX(0vw)` : `translateX(25vw)`,
          }}
        >
          <button
            className={styles.navbar__container__btn__collapse}
            onClick={() => setExpand(false)}
          >
            <CloseOutlined />
          </button>
          {menuItems.map((item, index) => (
            <CustomLink title={item.title} link={item.link} key={index} />
          ))}
        </ul>
      </div>
    </nav>
  );
}
