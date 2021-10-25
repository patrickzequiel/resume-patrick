import { ActiveLink } from '../ActiveLink'

import { BiMenuAltRight } from 'react-icons/bi';
import { AiOutlineClose } from 'react-icons/ai';
import { useHistory } from "react-router-dom";

import styles from './styles.module.scss'
import { useEffect, useState } from 'react';

interface SizeProps {
  width: number,
  height: number
}

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [size, setSize] = useState({
    width: 0,
    height: 0
  });

  useEffect(() => {
    const handleResize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (size.width > 768 && menuOpen) {
      setMenuOpen(false);
    }
  }, [size.width, menuOpen]);

  const menuToggleHandler = () => {
    setMenuOpen((p) => !p);
  };
  return (
    <header className={styles.header}>
      <div className={styles.header__content}>
        <ActiveLink activeClassName={styles.active} href="/">
          <h1 className={styles.header__content__logo}>
            <h1>PATRICK</h1> 
            <h1>CRUZ.</h1>
            </h1>
        </ActiveLink>
        <nav className={`${styles.header__content__nav} ${menuOpen && size.width < 768 ? styles.isMenu : ""
          }`}>
          <ul>
            <li>
              <ActiveLink activeClassName={styles.active} href="/" onClick={menuToggleHandler}>
                <a>Home</a>
              </ActiveLink>
            </li>
            <li>
              <ActiveLink activeClassName={styles.active} href="/resume" onClick={menuToggleHandler}>
                <a>Resume</a>
              </ActiveLink>
            </li>
            <li>
              <ActiveLink activeClassName={styles.active} href="/portfolio" onClick={menuToggleHandler}>
                <a>Portfolio</a>
              </ActiveLink></li>
          </ul>
        </nav>
        <div className={styles.header__content__toggle}>
          {!menuOpen ? (
            <BiMenuAltRight onClick={menuToggleHandler} />
          ) : (
            <AiOutlineClose onClick={menuToggleHandler} />
          )}
        </div>
      </div>
    </header>
  )
}
