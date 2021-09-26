import { ActiveLink } from '../ActiveLink'
import styles from './styles.module.scss'

export default function Header() {
  return(
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
          <ActiveLink activeClassName={styles.active} href="/">
            <h1>Patrick Cruz </h1>
            </ActiveLink>
        <nav>
          <ActiveLink activeClassName={styles.active} href="/">
            <a>Home</a>
          </ActiveLink>
          <ActiveLink activeClassName={styles.active} href="/resume">
            <a>Resume</a>
          </ActiveLink>
          <ActiveLink activeClassName={styles.active} href="/portfolio">
            <a>Portfolio</a>
          </ActiveLink>
          <div className={styles.hamburger}>
                <span className={styles.bar}></span>
                <span className={styles.bar}></span>
                <span className={styles.bar}></span>
          </div>
        </nav>
      </div>
    </header>
  )
}
