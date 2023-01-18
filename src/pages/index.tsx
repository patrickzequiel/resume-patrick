import { GetStaticProps } from 'next';
import Type from './type';
import { Row, Col } from 'react-bootstrap';
import { Canvas } from 'react-three-fiber';

import Head from 'next/head';

import styles from './home.module.scss';
// import Lights from '../components/Lights';
// import Model from '../components/Model';

// import ThreeJs from '../components/ThreeJs';

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
              <h1>
                Meet <span>my</span> work.
              </h1>
              <p>
                I hope you have a great time
                <br />
                <span style={{ padding: 50, textAlign: 'left' }}>
                  <Type />
                </span>
              </p>
            </section>
          </main>
        </Col>
        <Col md={6}>
          {/* <Canvas colorManagement camera={{ position: [0, 0, 300] }}>
            <Lights />
            <Model />
          </Canvas> */}
        </Col>
      </Row>
    </>
  );
}
