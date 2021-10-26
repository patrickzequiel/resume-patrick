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

import Data from '../../assets/data.json'

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
    // const [ portfolio, setPortfolio ] = useState<PortfolioProps[]>([])

    // useEffect(() => {
    //     fetch("../../")
    //     .then(res => res.json())
    //     .then(data => console.log('data is ' + data))
        
    // },[])

    
    // console.log('the portfolio is ' + portfolio)    

    return (
        <>
            <Head>
                <title>Resume</title>
            </Head>
            <Container fluid className={styles.cardsContainer}>
                <Container>
                    <Row style={{ justifyContent: "center", position: "relative", }}>
                    {Data.map(portfolio => {
                            console.log('Portfolio ' + portfolio)
                        return (
                        <Card
                                key={portfolio.id}
                                author={portfolio.author}
                                title="Codenation"
                                date="September 2020"
                                description="Description"
                                liked={portfolio.liked}
                                likeCount={portfolio.likeCount}
                                images={portfolio.images}
                                link="https:/github.com/patrickzequiel/squad4_nodejs_kroton_codenation"
                            />
                     ) })} 
                        {/* <Card
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
                        <Card
                            author="Patrick Cruz"
                            title="Flappy Bird"
                            date="April 2020"
                            description="Description"
                            liked={false}
                            likeCount={0}
                            images={flappy}
                            link="https://github.com/patrickzequiel/flappybird"
                        /> */}
                        
                    </Row>
                </Container>
            </Container>
            
        </>
    )

}

export default Portfolio;