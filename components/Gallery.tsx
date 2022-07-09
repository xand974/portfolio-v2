import styles from "../styles/gallery.module.css";
import Cadre from "./Cadre";

export default function Gallery() {
  return (
    <section className={styles.gallery} data-scroll-section>
      <Cadre reverse={false} />
      <Cadre reverse={true} />
    </section>
  );
}
