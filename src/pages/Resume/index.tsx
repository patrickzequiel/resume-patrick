import { RouteComponentProps } from 'react-router';

import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import CardResume from "../../components/CardResume";
import { AiOutlineDownload } from "react-icons/ai";

const Resume: React.FC<RouteComponentProps> = () => {
    return (
        <>
        <Container fluid className="resume-section">
        <Container>
          <Row style={{ justifyContent: "center", position: "relative" }}>
            <Button variant="primary"  target="_blank">
              <AiOutlineDownload />
              &nbsp;Download CV
            </Button>
          </Row>
          <Row className="resume">
            <Col md={6} className="resume-left">
              <h3 className="resume-title">Experience</h3>
              <CardResume
                title="JUNIOR ML ENGINEER [Omdena]"
                date="June 2020 - August 2020"
                content={[
                  "Assembled the data from various social media platforms using Twitter, Reddit.Interpreted the collected text using word-clouds and various other factors that affect the change of sentiments of youth.",
                  " Utilized the data to find the issues using Topic Modelling and Building models using LSTM, BERT to predict the sentiments of the youth.",
                ]}
              />
              <h3 className="resume-title">Extracurricular Activities</h3>
              <CardResume
                title="Web Developer [Pantheon-2019 Technical Fest of BIT Mesra]"
                date="2020from2020"
                content={[
                  "Worked on creating the frontend-end of the website using Bootstrap, Javascript.",
                ]}
              />
              <CardResume
                title="Web Developer [Bitotsav-2020 Technical Fest of BIT Mesra]"
                date="2020from2020"
                content={[
                  "Operated on developing the frontend end of the website using Bootstrap, Javascript and backend APIs using Node.js",
                ]}
              />
            </Col>
            <Col md={6} className="resume-right">
              <h3 className="resume-title">Education</h3>
              <CardResume
                title="IMSC MATHS AND COMPUTING [BIT Mesra, Ranchi] "
                date="2018 - Present"
                content={[`CGPA:th Sem)`]}
              />
              <CardResume
                title="12TH BOARD [ODM Public School,Odisha]"
                date="2015 - 2017"
                content={["Precentage: 88%"]}
              />
              <CardResume
                title="10TH BOARD [ST Mary's School,Odisha] "
                date="2005 - 2015"
                content={["Precentage: 86%"]}
              />
              <h3 className="resume-title">Ranks and Achivements</h3>
              <CardResume
                title=""
                date="2020from2020"
                content={[
                  `Current rank in Spoj `,
                  `Current rank in HackerRank`,
                  "Top Performer in Code-Break 1.0",
                  "Participant in Hack-A-Bit 2019",
                ]}
              />
            </Col>
          </Row>
          <Row style={{ justifyContent: "center", position: "relative" }}>
            <Button variant="primary" target="_blank">
            <AiOutlineDownload />&nbsp;Download CV
            </Button>
          </Row>
        </Container>
      </Container>
        </>
    )
}

export default Resume;