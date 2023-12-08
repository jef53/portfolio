import { IBM_Plex_Mono } from 'next/font/google'
import styles from './styles.module.scss'



const IBM = IBM_Plex_Mono({
  variable: '--font-IBM',
  weight: ['400', '500'],
  subsets: ['latin'],
})

export function Experience() {
  return (
    <div className={styles.main}>

      <div className={styles.leftContainer}>
        <h6 className={IBM.className}>../experiências</h6>
        <h1>Experiência Profissional</h1>
        <p>Estou sempre aberto a novos desafios e projetos emocionantes. Vamos trabalhar juntos para criar soluções incríveis para sua empresa!</p>
      </div>

      <div className={styles.rightContainer}>
        {Array.from({ length: 1 }).map((_, index) => (
          <div key={index} className={styles.jobContainer}>

            <div className={styles.jobTitle}>
              <img src="/images/logo-react.png" alt="job" />
              <div>
                <h1>Freelancer</h1>
                <h2>Desenvolvedor Front-end</h2>

              </div>
            </div>

            <div className={styles.jobDescription}>
              <h4>mai 2020 • atualmente</h4>
              <p>
                Desenvolvimento e manutenção de interfaces usando React, Vite, Typescript, Figma e Next.js
              </p>

              <div className={styles.techList}>
                <ul >
                  <li>HTML5</li>
                  <li>CSS</li>
                  <li>Javascript</li>
                  <li>React.js</li>
                  <li>Next.js</li>
                </ul>
              </div>
            </div>
          </div>

        ))}
      </div>


    </div>
  )
}