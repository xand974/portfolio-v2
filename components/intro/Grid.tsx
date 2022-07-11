import styles from "@/styles/grid.module.scss";

export default function Grid() {
  return (
    <main className={styles.container}>
      <h1 className={styles.container__title}>You see that line ?</h1>
      <section className={styles.container__grid}></section>
    </main>
  );
}
