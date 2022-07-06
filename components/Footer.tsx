import styles from "../styles/footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__wrapper}>
        <div className={styles.footer__left}>
          <h4 className={styles.footer__left__title}>
            By <span>Alexandre Malet</span>{" "}
          </h4>
        </div>
        <div className={styles.footer__right}>
          <a
            href="https://www.notion.so/malet/Doc_Web-1a167140aafd4540909b8b46575e31ee"
            target="_blank"
          >
            My personal resources
          </a>
          <a href="https://github.com/xand974" target="_blank">
            Source code
          </a>
        </div>
      </div>
    </footer>
  );
}
