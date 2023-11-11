// PageStyles.js

import styled from 'styled-components';

// Set the background color for the entire page
export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: sticky;
  top: 0;
  z-index: 100;
`;

// Content container within the page
export const ContentContainer = styled.div`
  width: 100%; /* Full width for mobile */
  text-align: center;
  padding: 16px; /* Adjust as needed */

  @media (min-width: 768px) {
    width: 80%; /* Adjust as needed for tablet */
  }

  @media (min-width: 1024px) {
    width: 50%; /* Adjust as needed for desktop */
  }
`;


