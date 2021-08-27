import React from 'react';
import { RouteComponentProps } from 'react-router';
import Header from '../../components/Header';
import { Container } from './styles';

const Portfolio: React.FC<RouteComponentProps> = () => {
    return (
        <>
            <Header />
            <Container>
                <span>Portfolio</span>
            </Container>
        </>
    )
}

export default Portfolio;