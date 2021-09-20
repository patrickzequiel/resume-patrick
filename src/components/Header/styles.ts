import { Link } from 'react-router-dom'
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import { Container, Row, Col } from "react-bootstrap";

import styled from 'styled-components'

export const BoxContainer = styled.header`
display: flex;
justify-content: space-between;
align-items: center;
z-index: 9;
padding: 40px;

    .logo {
      font-weight: 900;
      letter-spacing: 2px;
      color: #fff;
      &:hover {
      color: #23232a;
  }
    }
`

export const Pages = styled(Navbar.Brand)`
    text-transform: capitalize;
    text-decoration: none;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: space-between;

    &:hover {
        color: #23232a;
    }

    &.active::after {
        content: '';
        height: 3px;
        border-radius: 3px 3px 0 0;
        width: 100%;
        position: absolute;
        bottom: 1px;
        left: 0;
        background: #23232a;
    }
`

export const Buttons = styled(Button)`
    text-transform: capitalize;
    text-decoration: none;
    color: #fff;
    font-weight: 600;
    background: #23232a;
    padding: 16px 24px;
    border-radius: 10px;

    .fork-btn {
      font-size: 1.1em !important;
      padding-top: 10px !important;
    }

    :hover {
      transform: translateY(-2px) !important;
      background-color: #a24dd386 !important;
      border-color: #a24dd386 !important;
    }
    ::after {
      display: none !important;
    }
`

export const NavBarColour = styled(Navbar)`

    text-transform: capitalize;
    text-decoration: none;
    color: #fff;
    font-weight: 600;
    background: #23232a;
    padding: 16px 24px;
    border-radius: 10px;


`

