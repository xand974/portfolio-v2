import styles from "@/styles/projects/projects.module.scss";
import Navbar from "@/components/shared/Navbar";
// import ProjectCard from "../../components/projects/ProjectCard";

export default function Projects() {
  return (
    <div className={styles.container}>
      <div className={styles.container__wrapper}>
        <div className={styles.container__wrapper__top}>
          <h1 className={styles.container__wrapper__top__title}>Projects</h1>
        </div>
        <div className={styles.container__wrapper__grid}>
          {/* <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard /> */}
        </div>
        <Navbar />
      </div>
    </div>
  );
}
