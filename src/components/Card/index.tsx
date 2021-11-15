import heartOutline from '../../assets/images/heart-outline.png'; 
import heartFill from '../../assets/images/heart-fill.png'; 
import Image from 'next/image'
import Link from 'next/link'

import styles from './styles.module.scss';

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
      <Image className={styles.cardImage} src={images} alt="Logo" layout="responsive"
       objectFit="cover"
       width={6}
       height={4} />
      <div className={styles.cardText}>{description}</div>
      <div className={styles.cardLikeBar}>
        {liked ? (
          <Image className={styles.cardLikeIcon} src={heartFill} alt="Logo" layout="responsive"
          objectFit="cover"
          width={6}
          height={4}/>
        ) : (
          <Image className={styles.cardLikeIcon} src={heartOutline} alt="Logo" layout="responsive"
          objectFit="cover"
          width={6}
          height={4}/>
        )}
        {/* <div className={styles.likeText}>
          <b>{likeCount}</b> liked.
        </div> */}
      </div>
    </div>
    </Link>
  );
}