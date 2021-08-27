import React from 'react';
import { RouteComponentProps } from 'react-router';
import Header from '../../components/Header';
import { Container } from './styles';

const Resume: React.FC<RouteComponentProps> = () => {
    return (
        <>
            <Header />
            <Container>
                <span>Resume</span>
            </Container>
        </>
    )
}

export default Resume;