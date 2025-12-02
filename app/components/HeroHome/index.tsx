import Link from 'next/link'
import styles from './styles.module.scss'
import { IBM_Plex_Mono } from 'next/font/google'
import { FiGithub, FiLinkedin, FiYoutube } from 'react-icons/fi'
import { BsWhatsapp } from 'react-icons/bs'

const IBM = IBM_Plex_Mono({
  variable: '--font-IBM',
  weight: ['400', '500'],
  subsets: ['latin'],
})

export function HeroHome() {
  return (
    <div className={styles.main}>
      <div className={styles.infoContainer}>
        <h1><span className={IBM.className}>Olá, meu nome é</span> Jefferson</h1>
        <p>Sou um desenvolvedor web, focado principalmente em construções de aplicações utilizando React.js

        </p>
        <div className={styles.techList}>
          <ul >
            <li>Next.js</li>
            <li>React.js</li>
            <li>Javascript</li>
            <li>Typescript</li>
            <li>HTML</li>
            <li>CSS</li>

          </ul>
        </div>
        <div className={styles.footerSection}>
          <button className={styles.contactButton}>Entre em contato  →</button>
          <div className={styles.socialMedias}>
            <Link href="https://github.com/jef53"><FiGithub /></Link>
            <Link href="https://www.linkedin.com/in/jef50/"><FiLinkedin /></Link>

          </div>
        </div>
      </div>


      <img className={styles.profilePicture} src="/images/logo-react.png" alt="logo" />



    </div>
  )
}
