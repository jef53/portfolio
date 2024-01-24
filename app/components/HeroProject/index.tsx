import { IBM_Plex_Mono } from 'next/font/google'
import styles from './styles.module.scss'
import Link from 'next/link'



const IBM = IBM_Plex_Mono({
  variable: '--font-IBM',
  weight: ['400', '500'],
  subsets: ['latin'],
})

export function HeroProject() {
  return (
    <div className={styles.main}>

      <h6 className={IBM.className}>../projetos</h6>
      <h1>Meus Projetos</h1>
      <p>Aqui estão alguns dos projetos que eu desenvolvi. Navegue e explore os projetos para ver como foram desenvolvidos,
        as tecnologias que foram escolhidas e as funcionalidades implementadas.
      </p>
      <Link href="/">← Voltar para home</Link>



    </div>
  )
}