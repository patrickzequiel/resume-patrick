import styles from './styles.module.scss';

interface CardResumeProps {
    title: string;
    date: string;
    content: string[];
}

export default function CardResume({ title, date, content}: CardResumeProps){
    
  return (
    
    <div className={styles.resumeItem}>
      <h5 className={title ? styles.resumeTitle : styles.resumeNoTitle}>
        {title}
      </h5>
      <p>
        <em>{date}</em>
      </p>
      <ul>
        {content.map((value, index) => (
          <li key={index}> ‣ {value}</li>
        ))}
      </ul>
    </div>
  );
}

