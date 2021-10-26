import { useEffect, useState } from 'react';
import { Container, Row } from "react-bootstrap";
import Head from 'next/head';


import Card from '../../components/Card'
import styles from './styles.module.scss';

import food from "../../public/images/food.jpeg";
import codenation from "../../public/images/codenation.png";
import patriflix from "../../public/images/patriflix.png";
import orkut from "../../public/images/orkut.png";
import flappy from "../../public/images/flappy.png";

import Data from '../../services/data.json'

interface PortfolioProps { 
    id: number;
    author: string;
    title: string;
    date: string;
    description: string;
    liked: boolean;
    likeCount: number;
    images: string;
    link: string;
}

const Portfolio = () => {
    return (
        <>
            <Head>
                <title>Resume</title>
            </Head>
            <Container fluid className={styles.cardsContainer}>
                <Container>
                    <Row style={{ justifyContent: "center", position: "relative", }}>
                    {Data.map(portfolio => {
                        return (
                        <Card
                                key={portfolio.id}
                                author={portfolio.author}
                                title={portfolio.title}
                                date={portfolio.date}
                                description={portfolio.description}
                                liked={portfolio.liked}
                                likeCount={portfolio.likeCount}
                                images={portfolio.images}
                                link={portfolio.link}
                            />
                     ) })} 
                    </Row>
                </Container>
            </Container>
            
        </>
    )

}

export default Portfolio;