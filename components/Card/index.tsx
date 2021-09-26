import styles from './styles.module.scss';
import food from "../../public/images/food.jpeg"; 
import heartOutline from "../../public/images/heart-outline.png"; 
import heartFill from "../../public/images/heart-fill.png"; 
import Image from 'next/image'

interface CardProps {
    author: string;
    title: string;
    date: string;
    description: string;  
    likeCount: number;  
    liked: boolean;
}

export default function Card({ author, title, date, description, liked, likeCount }: CardProps) {
  return (
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
      <Image className={styles.cardImage} src={food} alt="Logo" />
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
  );
}