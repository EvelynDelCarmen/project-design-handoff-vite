// GlobalStyles.js

import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  /* Reset margin and padding for the body element */

  body {
    margin: 0;
    padding: 0;
    background-color: #E7C2A9;
    min-height: 100vh;
  }

  
  * {
    box-sizing: border-box;
  }
`;

export default GlobalStyles;
