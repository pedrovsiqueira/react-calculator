import React from 'react';
import { Helmet } from 'react-helmet';

import Routes from './routes';
import GlobalStyle from './assets/styles/global';

const App: React.FC = () => (
  <>
    <Helmet titleTemplate="App | %s" defaultTitle="App" />
    <Routes />
    <GlobalStyle />
  </>
);

export default App;
