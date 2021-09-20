import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

/* --------- */
/*Scrollbar   */
/* --------- */

::-webkit-scrollbar {
  width: 7px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #2d1950;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: rgba(178, 121, 216, 0.959);
  border-radius: 12px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: rgba(222, 130, 235, 0.911);
  border-radius: 12px;
}

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
    width: 100vh;
    height: 100vh;
    margin: 0;
    padding: 0;
    /* overflow: hidden; */
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

  h3 {
        font-size: 0.2em;
        font-weight: 700;
        padding-bottom: 5px;
      }
  


#tsparticles {
  position: fixed !important;
  background-repeat: no-repeat !important;
  background-size: cover !important;
  width: 100%;
  height: 100%;
}

.home-header {
  padding-top: 80px !important;
}

.home-section {
  position: relative;
  z-index: -1;
  background-image: var(--image-gradient), url(./Assets/home-bg.jpg);
  background-position: top center;
  background-repeat: no-repeat;
  padding-bottom: 30px !important;
  padding-top: 30px !important;
}

.home-content {
  padding: 9rem 0 2rem !important;
  color: whitesmoke;
  text-align: left;
}

.heading {
  font-size: 2.4em !important;
  padding-left: 50px !important;
}

.heading-name {
  font-size: 2.5em !important;
  padding-left: 45px !important;
}

.main-name {
  color: #cd5ff8;
}

.Typewriter__wrapper {
  font-size: 2.2em !important;
  color: #be6adf !important;
  font-weight: 600 !important;
}
.Typewriter__cursor {
  font-size: 2.4em !important;
  color: #b562d6 !important;
}

@media (max-width: 767px) {
  .Typewriter__wrapper {
    font-size: 1.4em !important;
    font-weight: 500 !important;
    position: absolute !important;
  }
  .Typewriter__cursor {
    display: none !important;
  }
}

.myAvtar {
  justify-content: center !important;
  padding-top: 9em !important;
}

@media (max-width: 767px) {
  .myAvtar {
    padding-top: 2em !important;
    padding-bottom: 2em !important;
  }
}

.home-about-section {
  position: relative;
  padding-bottom: 70px !important;
  padding-top: 70px !important;
}

.home-about-description {
  color: white !important;
  padding-top: 100px !important;
  padding-bottom: 20px !important;
  text-align: center;
}

.home-about-body {
  padding-top: 50px;
  font-size: 1.2em !important;
  text-align: left;
}

.home-about-social {
  text-align: center !important;
  padding-top: 25px;
  color: white !important;
}

.home-about-social-links {
  justify-content: center !important;
  padding-top: 15px !important;
  display: inline-block !important;
  position: relative !important;
  padding-inline-start: 0 !important;
}

.home-social-icons {
  position: relative !important;
  display: inline-block !important;
  width: 40px !important;
  height: 40px !important;
  text-align: center !important;
  font-size: 1.2em !important;
  line-height: 2em !important;
  background: rgba(255, 255, 255, 0.972) !important;
  border-radius: 50% !important;
  transition: 0.5s !important;
}

.home-social-icons::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background: #68187a;
  transition: 0.5s;
  transform: scale(0.9);
  z-index: -1;
}

.home-social-icons:hover::before {
  transform: scale(1.1);
  box-shadow: 0 0 15px #801f95;
}

.home-social-icons:hover {
  color: #87209e;
  box-shadow: 0 0 5px #87209e;
  text-shadow: 0 0 2px #87209e;
}

.social-icons {
  display: inline-block !important;
  padding-right: 15px;
  padding-left: 15px;
}

.icon-colour {
  color: #700c86 !important;
}

/* --------- */
/* Navbar Section  */
/* --------- */
.sticky {
  background-color: #212038d8 !important;
  transition: all 0.3s ease-out 0s !important;
  box-shadow: 0px 10px 10px 0px rgba(9, 5, 29, 0.171) !important;
  backdrop-filter: blur(15px) !important;
}

.navbar {
  position: fixed !important;
  transition: all 0.3s ease-out 0s !important;
  padding: 0.3rem 2rem !important;
  font-size: 1.2rem !important;
}

.navbar-toggler {
  padding: 0.25rem 1.5rem !important;
  position: relative !important;
  background-color: transparent !important;
  border-color: transparent !important;
}

.navbar-toggler span {
  display: block !important;
  background-color: #be50f4 !important;
  height: 4px !important;
  width: 27px !important;
  margin-top: 5px !important;
  margin-bottom: 5px !important;
  transform: rotate(0deg) !important;
  left: 0 !important;
  opacity: 1 !important;
}

.navbar-toggler:focus,
.navbar-toggler:active {
  outline: 0 !important;
}

.navbar-toggler span:nth-child(1),
.navbar-toggler span:nth-child(3) {
  transition: transform 0.35s ease-in-out !important;
  transition: transform 0.35s ease-in-out !important;
}

.navbar-toggler:not(.collapsed) span:nth-child(1) {
  position: absolute !important;
  left: 12px !important;
  top: 10px !important;
  transform: rotate(135deg) !important;
  opacity: 0.9 !important;
}

.navbar-toggler:not(.collapsed) span:nth-child(2) {
  height: 12px !important;
  visibility: hidden !important;
  background-color: transparent !important;
}

.navbar-toggler:not(.collapsed) span:nth-child(3) {
  position: absolute !important;
  left: 12px !important;
  top: 10px !important;
  transform: rotate(-135deg) !important;
  opacity: 0.9 !important;
}

@media (max-width: 767px) {
  .navbar {
    padding: 1rem 2rem !important;
    font-size: 1.4rem !important;
    background-color: #181a27 !important;
  }
  .navbar-nav .nav-item a::after {
    display: none !important;
  }
}
.navbar-brand {
  color: rgb(250, 250, 250) !important;
}

.logo {
  height: 1.4em !important;
  width: 2.5em !important;
}

.navbar-nav .nav-link {
  color: white !important;
  padding-right: 1rem !important;
  padding-left: 1rem !important;
}

.nav-link {
  padding: 0.8rem 1rem !important;
}

@media (max-width: 767px) {
  .nav-link {
    padding: 0.7rem 1rem !important;
  }
}

.navbar-nav .nav-item {
  position: relative;
  margin-left: 20px;
}

.navbar-nav .nav-item a {
  font-weight: 400;
  transition: all 0.3s ease-out 0s;
  position: relative;
  z-index: 1;
}

.navbar-nav .nav-item a::after {
  content: "";
  position: relative;
  display: block;
  height: 5px;
  width: 0;
  border-radius: 16px;
  background: #c95bf5;
  bottom: 1px;
  left: 0;
  z-index: -1;
  transition: all 0.3s ease-out 0s;
}

.navbar-nav .nav-item a:hover::after {
  width: 100%;
}

`