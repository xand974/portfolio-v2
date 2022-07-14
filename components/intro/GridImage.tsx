import styles from "@/styles/grid-image.module.scss";
import Image from "next/image";
import { GRID } from "../../mock/data";
import { useRef } from "react";
import { useOnScreen } from "../../hooks/on-screen.hook";
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
  const imgRef = useRef(null);
  const [isOnScreen] = useOnScreen(imgRef);

  const random = useRef(Math.floor(Math.random() * 6));
  return (
    <div
      ref={imgRef}
      className={styles.container}
      style={{
        gridArea: `${random.current + row} / ${
          column + offset + random.current
        } / span ${spanRow} / span ${spanCol}`,
      }}
    >
      <div
        className={styles.container__wrapper}
        style={{ transform: `scale(${isOnScreen ? 1.4 : 0.3})` }}
      >
        <Image src={src} layout="fill" alt="some random landscape" style={{ borderRadius: "10px" }} />
      </div>
      <p className={styles.container__description}>{description}</p>
    </div>
  );
}
