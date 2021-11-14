import { AppProps } from "next/app"
import { Router } from "next/router";
import ReactLoading from 'react-loading';
import Header from '../components/Header'
import NProgress from 'nprogress'; //nprogress module

import '../styles/globals.scss'
import { Footer } from "../components/Footer";

function MyApp({ Component, pageProps }: AppProps) {
  Router.events.on('routeChangeStart', () =>
    NProgress.start()); Router.events.on(
      'routeChangeComplete', () =>
      NProgress.done()
    ); Router.events.on(
      'routeChangeError', () =>
      NProgress.done());

  return (
    <>
        <Header top={60}/>
      {/* <ReactLoading type={'balls'} color={'yellow'} height={'20%'} width={'20%'} /> */}
      <Component {...pageProps} />
      <Footer />
    </>
  )
}

export default MyApp