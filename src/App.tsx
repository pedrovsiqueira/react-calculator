import React, { useContext } from 'react';
import { Helmet } from 'react-helmet';
import { ThemeProvider } from 'styled-components';
import Routes from './routes';
import GlobalStyle from './assets/styles/global';
import { AppContext } from './hooks/AppContext';

const App: React.FC = () => {
  const { theme } = useContext(AppContext);

  return (
    <ThemeProvider theme={theme}>
      <Helmet titleTemplate="App | %s" defaultTitle="App" />
      <Routes />
      <GlobalStyle />
    </ThemeProvider>
  );
};

export default App;
