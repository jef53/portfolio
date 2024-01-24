import { HygraphFetch } from "@/app/hygraph-query";
import { Preview } from "./Preview";
import styles from './styles.module.scss'
import { Project } from "@/app/projects/page";

export type ProjectsPageData = {
  projects: Project[],
}


export function ProjectPreview({ projects }: ProjectsPageData) {

  return (
    <div className={styles.main}>
      {projects.map(project => (
        <div className={styles.project} key={project.title}>
          <Preview project={project} />
        </div>
      ))}

    </div>
  )
}
