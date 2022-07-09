import styles from "../styles/loading.module.scss";

export default function Loading() {
  return (
    <div className={styles.loading}>
      <h1 className={styles.loading__text}>loading</h1>
    </div>
  );
}
