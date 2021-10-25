import { AppProps } from "next/app"
import { Router } from "next/router";
import ReactLoading from 'react-loading';
import Header from '../components/Header'
import NProgress from 'nprogress'; //nprogress module

import '../styles/globals.scss'

function MyApp({ Component, pageProps }: AppProps) {
  Router.events.on('routeChangeStart', () => NProgress.start()); Router.events.on('routeChangeComplete', () => NProgress.done()); Router.events.on('routeChangeError', () => NProgress.done());  

  return (
    <>
      <Header />
      {/* <ReactLoading type={'balls'} color={'yellow'} height={'20%'} width={'20%'} /> */}
      <Component {...pageProps} />
    </>
    )
}

export default MyApp