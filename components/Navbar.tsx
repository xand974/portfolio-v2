import style from "../styles/navbar.module.css";
import { LinkType } from "../types/link";
import CustomLink from "./CustomLink";

export default function Navbar() {
  const goTo = (title: string): any => {
    console.log(title);
  };
  const menuItems: LinkType[] = [
    {
      title: "Home",
      tag: "home",
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
      title: "About me",
      tag: "aboutMe",
    },
    {
      title: "Contacts",
      tag: "contacts",
    },
  ];
  return (
    <nav className={style.navbar}>
      <ul className={style.navbar__list}>
        {menuItems.map((item, index) => (
          <CustomLink title={item.title} tag={item.tag} key={index} />
        ))}
      </ul>
    </nav>
  );
}
