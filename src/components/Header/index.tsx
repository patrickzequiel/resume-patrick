import { ActiveLink } from '../ActiveLink'
import { BiMenuAltRight } from 'react-icons/bi';
import { AiOutlineClose } from 'react-icons/ai';
import { useHistory } from "react-router-dom";

import styles from './styles.module.scss'
import { useEffect, useRef, useState } from 'react';

interface SizeProps {
  width: number,
  height: number
}

interface StickyProps {
  top: number,
}

export default function Header({ top }: StickyProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [size, setSize] = useState({
    width: 0,
    height: 0
  });
  const [isSticky, setSticky] = useState(false);
  const ref = useRef<HTMLInputElement>(null);


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
    // Add scroll event when the component is loaded
    window.addEventListener('scroll', handleScroll);
    return () => {
      // Remove scroll event after the component is unmount,
      // like componentWillUnmount()
      window.removeEventListener('scroll', () => handleScroll);
    };
    // Here, we set useEffect() arguments as empty array.
    // This means useEffect() will only run once after component loaded
  }, []);

  const handleScroll = () => {
    // Make sure ref has current attibute and getBoundingClientRect function
    // otherwise, it could cause getBoundingClientRect undefined error.
    if (ref && ref.current && ref.current.getBoundingClientRect()) {
      // Then, we compare the distance of the ref component to the top
      // with top value we set. If less than, we set isStick ture.
      setSticky(ref.current.getBoundingClientRect().top <= top);
    }
  };


  useEffect(() => {
    if (size.width > 768 && menuOpen) {
      setMenuOpen(false);
    }
  }, [size.width, menuOpen]);

  const menuToggleHandler = () => {
    setMenuOpen((p) => !p);
  };


  return (
    <div className={`${styles.sticky__wrapper}  ${isSticky && styles.sticky} `} ref={ref}>
      <div className={styles.sticky__inner}>
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
      </div>
    </div>
  )
}
