import { FaInstagram } from 'react-icons/fa';
import { AiFillLinkedin } from 'react-icons/ai';
import { FaGithubSquare } from 'react-icons/fa';


import styles from './styles.module.scss';

export function Footer() {
    return (
        <>
            <footer className={styles.footer}>
                <div className={styles.footer__social}>
                    <div className={styles.footer__social__name}>
                        <p>
                            Created by Patrick / made with NextJs
                        </p>
                    </div>
                    <div className={styles.footer__social__icons}>
                        <a className={styles.icon}href="https://www.instagram.com/patescruz/">
                            <FaInstagram size="35" color="#fff" />
                        </a>
                        <a className={styles.icon} href="https://www.linkedin.com/in/patrickzequiel/">
                            <AiFillLinkedin size="35" color="#fff" />
                        </a>
                        <a className={styles.icon} href="https://github.com/patrickzequiel">
                            <FaGithubSquare size="35" color="#fff" />
                        </a>
                    </div>
                </div>
            </footer>
        </>
    );
}