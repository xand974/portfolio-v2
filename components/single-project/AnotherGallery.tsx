import styles from "@/styles/single-project/another-gallery.module.scss";
import { CLIFF_IMG } from "mock/data";
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
            src={CLIFF_IMG}
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
            src={CLIFF_IMG}
            objectFit="cover"
            style={{ borderRadius: "3px" }}
          />
        </div>
      </div>
    </section>
  );
}
