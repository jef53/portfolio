import { ReactNode } from "react"
import { FiScissors } from "react-icons/fi"
import styles from './styles.module.scss'
import { Skill } from '../'
import { strToHTML } from "@/app/utils/strToHTML"

export type KnownTechProps = {
  skill: Skill
}

export function KnownTech({ skill }: KnownTechProps) {
  return (
    <div className={styles.infoTech}>
      <div>
        <h6>{skill.technology}</h6>
        <p>{skill.experience}</p>
      </div>
      <div className={styles.svgIcon}>{strToHTML(skill.icon)}</div>

    </div>
  )
}