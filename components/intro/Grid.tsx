import styles from "@/styles/grid.module.scss";
import GridImage from "./GridImage";
import { IMAGES_GRID } from "mock/data";
import { WbIncandescentOutlined } from "@mui/icons-material";
import cls from "classnames";
import { useDispatch } from "react-redux";
import { SET_LIGHT } from "@/context/slices/grid.slice";
import { useAppSelector } from "@/hooks/context.hook";

export default function Grid() {
  const dispatch = useDispatch();
  const { lightOn } = useAppSelector((state) => state.grid);
  const titleClass = cls(styles.container__wrapper__title, {
    [styles["light--on"]]: lightOn,
  });
  const containerClass = cls(styles.container, {
    [styles["light--on"]]: lightOn,
  });
  const showLight = () => {
    dispatch(SET_LIGHT(true));
  };

  const lightIconClass = cls(styles.container__lamp__icon, {
    [styles["hide"]]: lightOn,
  });
  const images = IMAGES_GRID.map((item, id) => {
    return item.map((el, index) => (
      <GridImage
        src={el}
        index={index}
        offset={id * 10}
        key={index}
        description="yes"
      />
    ));
  });
  return (
    <main className={containerClass} data-scroll-section>
      <div className={styles.container__lamp} onClick={() => showLight()}>
        <WbIncandescentOutlined className={lightIconClass} />
      </div>
      <div className={styles.container__wrapper}>
        <h1 className={titleClass} data-scroll data-scroll-speed="3">
          {lightOn ? "Welcome !" : "Turn on the light.."}
        </h1>
        <section className={styles.container__wrapper__grid}>
          {lightOn && images}
        </section>
      </div>
    </main>
  );
}
