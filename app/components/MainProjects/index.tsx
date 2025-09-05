import { IBM_Plex_Mono } from 'next/font/google'
import styles from './styles.module.scss'
import { KnownTech } from '../Knowledge/KnownTetch'
import { HygraphFetch } from '@/app/hygraph-query'
import { Project as ProjectType } from '@/app/projects/page'
import { Project } from './Project'
import Link from 'next/link'

const IBM = IBM_Plex_Mono({
  variable: '--font-IBM',
  weight: ['400', '500'],
  subsets: ['latin'],
})

type MainProjectsProps = {

  projects: ProjectType[]

}



export function MainProjects({ projects }: MainProjectsProps) {


  return (
    <div className={styles.main}>

      <h6 className={IBM.className}>../destaques</h6>
      <h1>Projetos em destaque</h1>

      <div className={styles.Block}>
        {projects.slice(0, 4).map(p => (
          <div key={p.slug}>
            <Project project={p} />
          </div>

        ))}
      </div>

      <Link href="/projects"><h3 className={styles.footer}>Se interessou? <span>Ver todos →</span></h3></Link>
    </div>
  )
}