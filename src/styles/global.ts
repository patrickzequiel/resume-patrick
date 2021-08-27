import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

* {
    box-sizing: border-box;
  }
  
  body {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
      "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background: #f15946;
    transition: 0.4s ease-in-out;
  }
  
  html,
  body,
  #root {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    overflow: hidden;
  }
  
  .scrollArea {
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    overflow: auto;
  }
  
  .container {
    width: 100%;
    max-width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .title {
    font-size: 10rem;
    text-align: center;
    width: 100%;
    margin: 0 auto;
    color: #fff;
    span {
      display: block;
    }
    @media (max-width: 1440px) {
      font-size: 6rem;
    }
  }
  
  .loading {
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    background: #171717;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
  }
  
  .loading-bar-container {
    width: 100px;
    height: 32px;
    background: #272727;
  }
  
  .loading-bar {
    height: 32px;
    background: #ffed4a;
  }

`