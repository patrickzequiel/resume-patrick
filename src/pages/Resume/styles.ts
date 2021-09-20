import styled from 'styled-components'
import Button from "react-bootstrap/Button";
import {Container, Row, Col} from "react-bootstrap";

export const BoxContainer = styled(Container)`
    font-size: 10rem;
    text-align: center;
    max-width: 100%;
    margin: 0 20px;
    color: #fff;  
    position: relative;
    z-index: -1;
    /* background-image: var(--image-gradient), url(./Assets/home-bg.jpg); */
    background-position: top center;
    background-repeat: no-repeat;
    padding-bottom: 30px !important;
    padding-top: 30px !important;
`

export const StyledRow = styled(Row)`

`

export const StyledCol = styled(Col)<{ size: number }>`
    md: ${(props) => props.size};
    justify-content: "center";
    text-align: "center";
    position: "relative";
`

export const Buttn = styled(Button)`
    /* width: 150px;
    height: 3rem;
    border: 0;
    border-radius: 10px;
    background: #23232a;
    color: #fff!important;
    font-size: 600;
    font-weight: bold;

    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;

    transition: filter 0.2s;

    &:hover {
        filter: brightness(0.8)
    } */
`
