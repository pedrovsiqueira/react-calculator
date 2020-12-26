import React from 'react';
import { Helmet } from 'react-helmet';

import { Container } from './styles';

const NotFound: React.FC = () => {
  return (
    <>
      <Helmet title="Not Found" />

      <Container>
        <h1>404 Not Found</h1>
      </Container>
    </>
  );
};

export default NotFound;
