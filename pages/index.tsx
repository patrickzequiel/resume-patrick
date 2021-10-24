import { GetStaticProps } from 'next'
import Type from "./type";
import { Row, Col } from "react-bootstrap";
import { Canvas } from 'react-three-fiber';
import Controls from '../components/Canva/Controls';
import Scene from '../components/Canva/Scene';

import Head from 'next/head';

import styles from './home.module.scss';
// import ThreeJs from '../components/ThreeJs';

interface HomeProps {
  product: {
    priceId: string;
    amount: number;
  }
}

export default function Home() {

  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <Row>
        <Col md={6}>
          <main className={styles.contentContainer}>
            <section className={styles.hero}>
              <span>👏 Hey, welcome</span>
              <h1>Meet <span>my</span> work.</h1>
              <p>
                I hope you have a great time<br />
                <span style={{ padding: 50, textAlign: "left" }}>
                  <Type />
                </span>
              </p>
            </section>

          </main>
        </Col>
        <Col md={6}>
          {/* <ThreeJs /> */}
          {/* <Controls />  */} 

          {/* <Scene /> */}

        </Col>
      </Row>

    </>
  )
}

