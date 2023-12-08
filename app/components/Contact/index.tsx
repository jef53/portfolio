import { IBM_Plex_Mono } from 'next/font/google'
import styles from './styles.module.scss'



const IBM = IBM_Plex_Mono({
  variable: '--font-IBM',
  weight: ['400', '500'],
  subsets: ['latin'],
})

export function Contact() {
  return (
    <div className={styles.main}>

      <h6 className={IBM.className}>../Contato</h6>
      <h1>Vamos trabalhar juntos?
        Entre em contato
      </h1>

      <form className={styles.Block}>
        <input placeholder='Nome' />
        <input placeholder='E-mail' />
        <textarea placeholder='Mensagem' />
        <button className={styles.buttom}>Enviar mensagem →</button>
      </form>


    </div>
  )
}