import styles from "@/styles/projects/projects-single.module.scss";
import Image from "next/image";
import { JAPAN_STREET_IMG } from "mock/data";
import { useRouter } from "next/router";

type ProjectCardType = {
  rowArray: number[];
  offset: number;
};
export default function ProjectCard({ rowArray, offset }: ProjectCardType) {
  const router = useRouter();
  const [row, col, spanRow, spanCol] = rowArray;
  const goTo = (id: string) => {
    router.push(`/projects/${id}`);
    return;
  };
  return (
    <div
      className={styles.card}
      onClick={() => goTo("123")}
      style={{
        gridArea: `${row} / ${
          col + offset
        } / span ${spanRow} / span ${spanCol}`,
      }}
    >
      <div className={styles.card__image}>
        <Image src={JAPAN_STREET_IMG} layout="fill" />
      </div>

      {/* <div className={styles.card__container}>
        <div className={styles.card__container__top}>
          <span className={styles.card__container__top__title}>C#</span>
          <span className={styles.card__container__top__title}>React</span>
          <span className={styles.card__container__top__title}>Typescript</span>
          <span className={styles.card__container__top__title}>MongoDB</span>
          <span className={styles.card__container__top__title}>Firebase</span>
        </div>
        <div className={styles.card__container__bottom}>
          <p className={styles.card__container__bottom__subtitle}>MALET</p>
        </div>
      </div> */}
    </div>
  );
}
