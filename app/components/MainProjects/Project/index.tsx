import Link from 'next/link'
import styles from './styles.module.scss'
import { ImDiamonds } from 'react-icons/im'
import { Project as ProjectType } from '@/app/projects/page'

type Projects = {
  project: ProjectType
}

export function Project({ project }: Projects) {
  return (
    <div className={styles.main}>
      <Link href={project.urlProject}>
        <img className={styles.mainImg} src={project.thumbnail.url} alt="projeto" />
      </Link>
      <div className={styles.rightContainer}>
        <h1><ImDiamonds size={16} />{project.title}</h1>
        <p>{project.description.text}</p>


        <div className={styles.techList}>
          <ul>
            {project.techs?.map(p =>
              <li key={p}>{p}</li>
            )}
          </ul>
        </div>
        <Link href={project.urlProject}>Ver projeto →</Link>
      </div>
    </div>
  )
}