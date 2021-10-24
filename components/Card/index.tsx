import styles from './styles.module.scss';
import heartOutline from "../../public/heart-outline.png"; 
import heartFill from "../../public/heart-fill.png"; 
import Image from 'next/image'
import Link from 'next/link'

interface CardProps {
    author: string;
    title: string;
    date: string;
    description: string;  
    likeCount: number;  
    liked: boolean;
    images: string;
    link: string;
}

export default function Card({ author, title, date, description, liked, likeCount, images, link }: CardProps): JSX.Element {
  return (
    <Link href={link} passHref={true}>
    <div className={styles.card}>
      <div className={styles.cardHeader}>
        <div className={styles.profile}>
          <span className={styles.letter}>{author[0]}</span>
        </div>
        <div className={styles.cardTitleGroup}>
          <h5 className={styles.cardTitle}>{title}</h5>
          <div className={styles.cardDate}>{date}</div>
        </div>
      </div>
      <Image className={styles.cardImage} src={images} alt="Logo" />
      <div className={styles.cardText}>{description}</div>
      <div className={styles.cardLikeBar}>
        {liked ? (
          <Image className={styles.cardLikeIcon} src={heartFill} alt="Logo" />
        ) : (
          <Image className={styles.cardLikeIcon} src={heartOutline} alt="Logo" />
        )}
        <div className={styles.likeText}>
          <b>{likeCount}</b> liked.
        </div>
      </div>
    </div>
    </Link>
  );
}