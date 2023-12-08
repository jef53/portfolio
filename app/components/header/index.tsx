'use client'

import Link from 'next/link'
import styles from './styles.module.scss'
import { IBM_Plex_Mono } from 'next/font/google'
import { usePathname } from 'next/navigation'

const IBM = IBM_Plex_Mono({
  variable: '--font-IBM',
  weight: ['400', '500'],
  subsets: ['latin'],
})
export const Header = () => {
  const pathname = usePathname();
  return (
    <header className={styles.main}>

      <nav className={`${styles.nav} ${IBM.className}`}>
        <Link href="/" className={pathname === "/" ? styles.isActive : ''}><p>#</p><span>Home</span></Link>
        <Link href="/projects" className={pathname === "/projects" ? styles.isActive : ''}><p>#</p><span>Projetos</span></Link>
      </nav>
    </header>

  )
}