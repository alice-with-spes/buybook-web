import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%; // 1rem = 10px
  }

  body {
    font-size: 1.6rem;
    background: #FFF;
    color: #000;
  }

  a {
    color: #000;
  }

  input, button {
    font-size: 1em;
  }
`;

export default GlobalStyle;
