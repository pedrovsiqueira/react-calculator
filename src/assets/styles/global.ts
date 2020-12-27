import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 16px;
    font-family: 'Lato'
  }

  html, body, #root {
    width: 100vw;
    max-width: 100%;
    min-height: 100vh;
  }

  body, input, textarea, button {
    font: 1rem 400 sans-serif;
    color: #333;
    -webkit-font-smoothing: antialiased;
  }

  ul {
    padding: 0;
    list-style: none;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  button {
    cursor: pointer;
    border: none;
    outline: none;
  }

  ::selection {
    background-color: transparent;
  }
`;
