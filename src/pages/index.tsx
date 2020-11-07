import Head from 'next/head';
import { Container } from '../styles/pages/Home';

const Home = () => {
  return (
    <Container>
      <Head>
        <title>Homepage</title>
      </Head>
      <h1>
        Homepage
      </h1>
      <p>
        Projeto Parking
      </p>
    </Container>
  );
};

export default Home;
