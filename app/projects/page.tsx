import { Contact } from '../components/Contact'
import { HeroProject } from '../components/HeroProject'
import { ProjectPreview, ProjectsPageData } from '../components/ProjectPreview'
import { HygraphFetch } from '../hygraph-query'
import styles from './styles.module.scss'

export type Project = {
  slug: string,
  thumbnail: {
    url: string
  },
  title: string,
  urlProject: string,
  description: {
    text: string,
  },
  techs: []
}

const getPageData = async () => {
  const query = `
  query MyQuery {
    projects {
      slug
      title
      description {
        text
      }
      thumbnail {
        url
      }
      urlProject
    }
  }
  
  
  
  
`
  return HygraphFetch(query)
}


export default async function Projects() {
  const request = await getPageData()

  const { data } = request


  return (

    <div className={styles.main}>
      <HeroProject />
      <ProjectPreview projects={data.projects} />
      <Contact />
    </div>
  )
}