import styled from 'styled-components'

export const Container = styled.div`
    font-size: 10rem;
    text-align: left;
    max-width: 100%;
    margin: 0 20px;
    color: #fff;
    text-align: center;
    justify-content: inter-word;

    h3 {
        font-size: 0.2em;
        font-weight: 700;
        padding-bottom: 5px;
        text-align: center;
        }
    h5 {
        font-size: 0.1em;
        font-weight: 700;
        text-align: center;
        padding-bottom: 5px;
        margin: 0;
    }
    p {
        font-size: 0.08em;
        font-weight: 700;
        padding-bottom: 5px;
        text-align: center;
        margin: 0;
    }
    li {
        align-items: center;
        text-align: justify;
        list-style-type: none; 
    }
    ul {
        /* display: inline-block; */
        font-size: 0.08em;
        font-weight: 700;
        margin: 0;
        list-style-type: disc;
        max-width: 400px;
    }
`
