import { GitHub, LinkedIn } from "@mui/icons-material";
import styles from "../styles/footer.module.css";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__wrapper}>
        <div className={styles.footer__left}>
          <div className={styles.footer__left__title}>
            <span className={styles.footer__left__title__italic}>By</span>
            <span>Alexandre Malet</span>
          </div>
        </div>
        <div className={styles.footer__right}>
          <a
            rel="noreferrer"
            href="https://www.notion.so/malet/Doc_Web-1a167140aafd4540909b8b46575e31ee"
            target="_blank"
          >
            <div className={styles.footer__right__svg}>
              <Image
                src="https://cdn.worldvectorlogo.com/logos/notion-logo-1.svg"
                layout="fill"
              />
            </div>
          </a>
          <a rel="noreferrer" href="https://github.com/xand974" target="_blank">
            <GitHub className={styles.footer__right__icon} />
          </a>
          <a
            rel="noreferrer"
            target="_blank"
            href="https://www.linkedin.com/in/alexandre-malet-5a3432208/"
          >
            <LinkedIn className={styles.footer__right__icon} />
          </a>
        </div>
      </div>
    </footer>
  );
}
