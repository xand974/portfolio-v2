import styles from "@/styles/grid-image.module.scss";
import Image from "next/image";
import { GRID } from "../../mock/data";
import { useRef } from "react";
type GridImageType = {
  src: string;
  description: string;
  index: number;
  offset: number;
};

export default function GridImage({
  src,
  description,
  index,
  offset,
}: GridImageType) {
  const values = GRID[index];
  const [row, column, spanRow, spanCol] = values;

  const random = useRef(Math.floor(Math.random() * 6));
  return (
    <div
      className={styles.container}
      style={{
        gridArea: `${random.current + row} / ${
          column + offset + random.current
        } / span ${spanRow} / span ${spanCol}`,
      }}
    >
      <div className={styles.container__wrapper}>
        <Image src={src} layout="fill" style={{ borderRadius: "10px" }} />
      </div>
      <p className={styles.container__description}>{description}</p>
    </div>
  );
}
