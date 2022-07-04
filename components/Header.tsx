import style from "../styles/header.module.css";

export default function Header() {
  return (
    <header className={style.header}>
      <h1 className={style.header__title}>ALEXANDRE</h1>
      <br />
      <h1 className={style.header__title}>MALET</h1>
    </header>
  );
}
