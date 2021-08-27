import React from 'react';
import { RouteComponentProps } from 'react-router';
import Header from '../../components/Header';
import { Container } from './styles';

const PageNotFound: React.FC<RouteComponentProps> = () => {
    return (
        <>
            <Header />
            <Container>
                <span>404 - Page not found</span>
            </Container>
        </>
    )
}

export default PageNotFound;