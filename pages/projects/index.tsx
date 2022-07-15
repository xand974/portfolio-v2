import styles from "@/styles/projects/projects.module.scss";
import Navbar from "@/components/@shared/Navbar";
import ProjectCard from "@/components/single-project/ProjectCard";
import { PROJECTS_GRID } from "../../mock/data";

export default function Projects() {
  return (
    <div className={styles.container}>
      <div className={styles.container__wrapper}>
        <div className={styles.container__wrapper__top}>
          <h1 className={styles.container__wrapper__top__title}>Projects</h1>
        </div>
        <div className={styles.container__wrapper__grid}>
          {PROJECTS_GRID.map((item, index) => (
            <ProjectCard key={index} rowArray={item} offset={index} />
          ))}
        </div>
        <Navbar />
      </div>
    </div>
  );
}
