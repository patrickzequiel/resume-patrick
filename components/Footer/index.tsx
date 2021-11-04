import { FaInstagram } from 'react-icons/fa';
import { AiFillLinkedin } from 'react-icons/ai';
import { FaGithubSquare } from 'react-icons/fa';


import styles from './styles.module.scss';

export function Footer() {
    return (
        <>
            <footer className={styles.footer}>
                <div className={styles.footer__social}>
                    <a href="">
                        <FaInstagram size="20" color="#fff" />
                    </a>
                    <a href="">
                        <AiFillLinkedin size="20" color="#fff" />
                    </a>
                    <a href="">
                        <FaGithubSquare size="20" color="#fff" />
                    </a>
                </div>
            </footer>
        </>
    );
}