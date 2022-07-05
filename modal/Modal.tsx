import styles from "../styles/modal.module.css";
import { ModalType } from "../types/modal";

export default function Modal({ child }: ModalType) {
  if (!child)
    return (
      <div className={styles.modal}>
        {" "}
        <span className={styles.modal__text}>Cannot find the element</span>
      </div>
    );
  return <div className={styles.modal}>{child}</div>;
}
