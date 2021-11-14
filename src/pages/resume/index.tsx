import Head from 'next/head';
import { GetStaticProps } from 'next';

import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";

import { AiOutlineDownload } from "react-icons/ai";
import Prismic from '@prismicio/client';
import { RichText, RichTextBlock } from 'prismic-reactjs'
import { getPrismicClient } from '../../services/prismic';

import styles from './styles.module.scss';
import ResumeList from "../../components/ResumeList";
import pdf from "../../public/images/logo.svg";

interface ResumeProps {
    uid: string;
    data: {
        date: string;
        title: RichTextBlock[],
        period: RichTextBlock[],
        text: RichTextBlock[],
    }
}

interface ResumeList {
    resume: ResumeProps[];
}




const Resume = ({ resume }: ResumeList) => {
    console.log(resume);
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
                            {resume.map(resumes => (
                                <ResumeList
                                    title={RichText.asText(resumes.data.title)}
                                    date={RichText.asText(resumes.data.period)}
                                    content={RichText.asText(resumes.data.text)}
                                />
                            ))}
                        </Col>

                        {/* <Col md={6} className={styles.resumeRight}>
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

                        </Col> */}
                    </Row>
                </Container>
            </Container>
        </>
    )
}
export default Resume;

export const getStaticProps: GetStaticProps = async () => {
    const prismic = getPrismicClient();

    const resumeResponse = await prismic.query(
        [Prismic.Predicates.at('document.type', 'resume')],
        {
            fetch: ['resume.title', 'resume.date', 'resume.period', 'resume.text'],
            pageSize: 100,
        }
    );

    console.log(JSON.stringify(resumeResponse, null, 2))

    const content = resumeResponse.results.map(list => ({
        uid: list.uid,
        data: {
            date: list.data.date,
            title: list.data.title,
            period: list.data.period,
            text: list.data.text,
        }
    }))

    const resume = content.sort((a, b) => {
        return b.data.date.localeCompare(a.data.date);
    });

    return {
        props: {
            resume
        }
    };
};
