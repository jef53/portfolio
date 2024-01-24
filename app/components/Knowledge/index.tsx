import { IBM_Plex_Mono } from 'next/font/google'
import styles from './styles.module.scss'
import { KnownTech, KnownTechProps } from './KnownTetch'
import { HygraphFetch } from '@/app/hygraph-query'
import { ReactNode } from 'react'


export type Skill = {
  technology: string,
  slug: string,
  experience: string,
  icon: string,
}

type KnowledgeProps = {
  skillsData: Skill[]
}


const IBM = IBM_Plex_Mono({
  variable: '--font-IBM',
  weight: ['400', '500'],
  subsets: ['latin'],
})


export function Knowledge({ skillsData }: KnowledgeProps) {

  return (

    <div className={styles.main}>

      <h6 className={IBM.className}>../competências</h6>
      <h1>Conhecimentos</h1>

      <div className={styles.Block}>
        {skillsData.map(skill => (
          <div key={skill.slug}>
            <KnownTech skill={skill} />
          </div>

        ))}
      </div>
    </div>
  )
}