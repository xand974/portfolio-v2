import ProjectCard from "@/components/Projects/ProjectCard";
import styles from "@/styles/projects.module.scss";

export default function Projects() {
  return <div className={styles.container}>
    <div className={styles.container__grid}>
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
      <ProjectCard />
      <ProjectCard />
    </div>
  </div>;
}
