import React, { StrictMode } from 'react';
import { render } from 'react-dom';
import App from './App';
import AppContextProvider from './hooks/AppContext';

render(
  <AppContextProvider>
    <StrictMode>
      <App />
    </StrictMode>
  </AppContextProvider>,
  document.getElementById('root'),
);
