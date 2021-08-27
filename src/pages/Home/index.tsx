import React from 'react';
import { RouteComponentProps } from 'react-router';
import Header from '../../components/Header';
import { Container } from './styles';

const Home: React.FC<RouteComponentProps> = () => {
    return (
        <>
            <Header />
            <Container>
                <span>Meet</span>
                <br />
                <span>My work</span>
            </Container>
        </>
    )
}

export default Home;