import React from 'react';
import { RouteComponentProps } from 'react-router';
import Header from '../../components/Header';
import { Container } from './styles';

const About: React.FC<RouteComponentProps> = () => {
    return (
        <>
            <Header />
            <Container>
                <span>About</span>
            </Container>
        </>
    )
}

export default About;