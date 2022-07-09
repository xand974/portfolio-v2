import styles from "../styles/another-gallery.module.css";
import Image from "next/image";

export default function AnotherGallery() {
  return (
    <section className={styles.gallery} data-scroll-section>
      <div className={styles.big__container}>
        <p className={styles.text}>Image Big</p>
        <div className={styles.image__big}>
          <Image
            alt="et si"
            layout="fill"
            src={
              "https://images.unsplash.com/photo-1541657152021-21efeed08add?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
            }
            objectFit="cover"
            style={{ borderRadius: "3px" }}
          />
        </div>
      </div>
      <div className={styles.small__container}>
        <p className={styles.text}>Image Small</p>
        <div className={styles.image__small}>
          <Image
            alt="et si"
            layout="fill"
            src={
              "https://images.unsplash.com/photo-1541657152021-21efeed08add?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
            }
            objectFit="cover"
            style={{ borderRadius: "3px" }}
          />
        </div>
      </div>
    </section>
  );
}
