import { Container } from "./styles";

interface CardResumeProps {
    title: string;
    date: string;
    content: string[];
}

export default function CardResume({ title, date, content}: CardResumeProps){
    
  return (
    
    <Container>
      <h5 className={title ? "resume-title" : "resume-no-title"}>
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
    </Container>
  );
}

