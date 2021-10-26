import styles from './styles.module.scss';
import ResumeList from "../../components/ResumeList";
import Head from 'next/head';

import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";

import { AiOutlineDownload } from "react-icons/ai";

import pdf from "../../public/images/logo.svg";

const Resume = () => {
    return (
        <>
            <Head>
                <title>Resume</title>
            </Head>
            <Container fluid className={styles.resumeSection}>
                <Container>
                    <Row style={{ justifyContent: "center", position: "relative" }}>
                        <Button className={styles.btnPrimary} target="_blank">
                            <AiOutlineDownload />
                            &nbsp;Download CV
                        </Button>
                    </Row >
                    <Row className={styles.resume}>
                        <Col md={6} className={styles.resumeLeft}>
                            <h3 className={styles.resumeTitle}>🧑🏻‍💻 Experience</h3>
                            <ResumeList
                                title="JUNIOR ML ENGINEER [Omdena]"
                                date="June 2020 - August 2020"
                                content={[
                                    "Assembled the data from various social media platforms using Twitter, Reddit.Interpreted the collected text using word-clouds and various other factors that affect the change of sentiments of youth.",
                                    " Utilized the data to find the issues using Topic Modelling and Building models using LSTM, BERT to predict the sentiments of the youth.",
                                ]}
                            />
                            <ResumeList
                                title="JUNIOR ML ENGINEER [Omdena]"
                                date="June 2020 - August 2020"
                                content={[
                                    "Assembled the data from various social media platforms using Twitter, Reddit.Interpreted the collected text using word-clouds and various other factors that affect the change of sentiments of youth.",
                                    " Utilized the data to find the issues using Topic Modelling and Building models using LSTM, BERT to predict the sentiments of the youth.",
                                ]}
                            />
                            <ResumeList
                                title="JUNIOR ML ENGINEER [Omdena]"
                                date="June 2020 - August 2020"
                                content={[
                                    "Assembled the data from various social media platforms using Twitter, Reddit.Interpreted the collected text using word-clouds and various other factors that affect the change of sentiments of youth.",
                                    " Utilized the data to find the issues using Topic Modelling and Building models using LSTM, BERT to predict the sentiments of the youth.",
                                ]}
                            />
                            <ResumeList
                                title="JUNIOR ML ENGINEER [Omdena]"
                                date="June 2020 - August 2020"
                                content={[
                                    "Assembled the data from various social media platforms using Twitter, Reddit.Interpreted the collected text using word-clouds and various other factors that affect the change of sentiments of youth.",
                                    " Utilized the data to find the issues using Topic Modelling and Building models using LSTM, BERT to predict the sentiments of the youth.",
                                ]}
                            />
                        </Col>

                        <Col md={6} className={styles.resumeRight}>
                            <h3 className={styles.resumeTitle}>🧑🏻‍🎓 Education</h3>
                            <ResumeList
                                title="IMSC MATHS AND COMPUTING [BIT Mesra, Ranchi] "
                                date="2018 - Present"
                                content={[`CGPA:`]}
                            />
                            <ResumeList
                                title="12TH BOARD [ODM Public School,Odisha]"
                                date="2015 - 2017"
                                content={["Precentage: 88%"]}
                            />
                            <ResumeList
                                title="10TH BOARD [ST Mary's School,Odisha] "
                                date="2005 - 2015"
                                content={["Precentage: 86%"]}
                            />

                        </Col>
                    </Row>
                </Container>
            </Container>
        </>
    )
}
export default Resume;