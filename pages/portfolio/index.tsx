import Card from '../../components/Card'
import styles from './styles.module.scss';

import { Container, Row } from "react-bootstrap";
import Head from 'next/head';

import food from "../../public/images/food.jpeg";
import codenation from "../../public/images/codenation.png";
import patriflix from "../../public/images/patriflix.png";
import orkut from "../../public/images/orkut.png";

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
                            images={food}
                            link="https:/google.com"
                        />
                        <Card
                            author="Patrick Cruz"
                            title="Codenation"
                            date="September 2020"
                            description="Description"
                            liked={false}
                            likeCount={0}
                            images={codenation}
                            link="https:/github.com/patrickzequiel/squad4_nodejs_kroton_codenation"
                        />
                        <Card
                            author="Patrick Cruz"
                            title="Orkut"
                            date="April 2021"
                            description="Description"
                            liked={false}
                            likeCount={0}
                            images={orkut}
                            link="https://github.com/patrickzequiel/imersao-alura-orkut"
                        />
                        <Card
                            author="Patrick Cruz"
                            title="Patriflix"
                            date="December 2020"
                            description="Description"
                            liked={false}
                            likeCount={0}
                            images={patriflix}
                            link="https://patriflix-alura-i0nz9wi6t.vercel.app/"
                        />
                    </Row>
                </Container>
            </Container>
        </>
    )

}

export default Portfolio;