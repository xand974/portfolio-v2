import style from "../styles/header.module.scss";

export default function Header() {
  return (
    <header className={style.header} data-scroll-section>
      <h1 className={style.header__title} data-scroll data-scroll-speed="-8">
        ALEXANDRE
      </h1>
      <br />
      <h1 className={style.header__title} data-scroll data-scroll-speed="2">
        MALET
      </h1>
    </header>
  );
}
