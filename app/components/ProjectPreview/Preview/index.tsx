import Link from 'next/link'
import styles from './styles.module.scss'
import { ProjectsPageData } from '..'
import { Project } from '@/app/projects/page'




type Projects = {
  project: Project
}

export function Preview({ project }: Projects) {
  return (
    <div className={styles.main}>
      <Link href={project.urlProject}>
        <img src={project.thumbnail.url} alt="image" />
        <div>
          <h1>{project.title}</h1>
          <p> {project.description.text}</p>
          <h6></h6>
        </div>
      </Link>
    </div>

  )
}