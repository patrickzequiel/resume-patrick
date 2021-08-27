import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 9;
  padding: 40px;

      .logo {
        font-weight: 900;
        letter-spacing: 2px;
        color: #fff;
      }
`

export const Pages = styled(Link)`
    text-transform: capitalize;
    text-decoration: none;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const Button = styled(Link)`
    text-transform: capitalize;
    text-decoration: none;
    color: #fff;
    font-weight: 600;
    background: #23232a;
    padding: 16px 24px;
    border-radius: 10px;
`