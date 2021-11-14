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
// import pdf from "../../assets/resume.pdf";

interface ResumeProps {
    uid: string;
    data: {
        date: string;
        title: RichTextBlock[],
        period: RichTextBlock[],
        text: RichTextBlock[],
    }
}

interface EducationProps {
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
    education: EducationProps[];
}




const Resume = ({ resume, education }: ResumeList) => {
    console.log(education);
    return (
        <>
            <Head>
                <title>Resume</title>
            </Head>
            <Container fluid className={styles.resumeSection}>
                <Container>
                    <Row style={{ justifyContent: "center", marginTop: "40px", position: "relative" }}>
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

                        <Col md={6} className={styles.resumeRight}>
                            <h3 className={styles.resumeTitle}>🧑🏻‍🎓 Education</h3>
                            {education.map(educations => (
                                <ResumeList
                                    title={RichText.asText(educations.data.title)}
                                    date={RichText.asText(educations.data.period)}
                                    content={RichText.asText(educations.data.text)}
                                />
                            ))}

                        </Col>
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

    const educationResponse = await prismic.query(
        [Prismic.Predicates.at('document.type', 'education')],
        {
            fetch: ['education.title', 'education.date', 'education.period', 'education.text'],
            pageSize: 100,
        }
    );

    const contentResume = resumeResponse.results.map(list => ({
        uid: list.uid,
        data: {
            date: list.data.date,
            title: list.data.title,
            period: list.data.period,
            text: list.data.text,
        }
    }))

    const contentEducation = educationResponse.results.map(list => ({
        uid: list.uid,
        data: {
            date: list.data.date,
            title: list.data.title,
            period: list.data.period,
            text: list.data.text,
        }
    }))

    const resume = contentResume.sort((a, b) => {
        return b.data.date.localeCompare(a.data.date);
    });

    const education = contentEducation.sort((a, b) => {
        return b.data.date.localeCompare(a.data.date);
    });

    return {
        props: {
            resume,
            education
        }
    };
};
