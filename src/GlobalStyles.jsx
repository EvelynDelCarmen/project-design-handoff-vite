// GlobalStyles.js

import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  /* Reset margin and padding for the body element */

  @import url('https://fonts.googleapis.com/css2?family=Hind:wght@300&family=Poppins:wght@500&display=swap');
  
  body {
    margin: 0;
    padding: 0;
  }

  
  * {
    box-sizing: border-box;
  }
`;

export default GlobalStyles;
