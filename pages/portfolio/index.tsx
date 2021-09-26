import Card from '../../components/Card'
import styles from './styles.module.scss';

import { Container, Row, Col } from "react-bootstrap";
import Head from 'next/head';

const Portfolio = () => {
    return (
        <>
            <Head>
                <title>Resume</title>
            </Head>
            <Container fluid className={styles.cardsContainer}>
                <Container>
                    <Row style={{ justifyContent: "center", position: "relative", }}>
                        <Card
                            author="Patrick Cruz"
                            title="Test Food"
                            date="September 2020"
                            description="Description"
                            liked={false}
                            likeCount={0}
                        />
                        <Card
                            author="Patrick Cruz"
                            title="Test Food"
                            date="September 2020"
                            description="Description"
                            liked={false}
                            likeCount={0}
                        />
                        <Card
                            author="Patrick Cruz"
                            title="Test Food"
                            date="September 2020"
                            description="Description"
                            liked={false}
                            likeCount={0}
                        />
                    </Row>
                </Container>
            </Container>
        </>
    )

}

export default Portfolio;