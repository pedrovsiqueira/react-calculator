import React from 'react';
import { Helmet } from 'react-helmet';

import { Container } from './styles';
import { Background } from '../../components';

const Home: React.FC = () => {
  return (
    <>
      <Helmet title="Home" />
      <Container>
        <Background />
      </Container>
    </>
  );
};

export default Home;
