import { Contact } from "./components/Contact";
import { Experience } from "./components/Experience";
import { Knowledge } from "./components/Knowledge";
import { MainProjects } from "./components/MainProjects";
import { HeroHome } from "./components/HeroHome";
import styles from './styles/Home.module.scss'
import { HygraphFetch } from "./hygraph-query";


const getSkillsData = async () => {
  const Skillsquery = `
  query Skills {
    skills {
      technology
      slug
      experience
      icon
    }
  }

`
  return HygraphFetch(Skillsquery)
}

const getProjectsData = async () => {
  const projectsQuery = `
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
      techs
    }
  } 
  
`
  return HygraphFetch(projectsQuery)
}

export default async function Home() {

  const requestSkillsData = await getSkillsData();
  const requestProjectsData = await getProjectsData()

  const { data: skillsData } = await requestSkillsData;


  const { data: projectsData } = await requestProjectsData

  return (
    <div className={styles.main}>
      <HeroHome />
      <Knowledge skillsData={skillsData.skills} />
      <MainProjects projects={projectsData.projects} />
      <Experience />
      <Contact />
    </div >
  )
}
