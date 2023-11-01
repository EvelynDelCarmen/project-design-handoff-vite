// PageStyles.js

import styled from 'styled-components';

// Container for the entire page
export const PageContainer = styled.div`
  background-color: #E7C2A9;
  height: 100vh; /* Adjust as needed */
  display: flex;
  flex-direction: column;
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

// Headline or title
export const Title = styled.h1`
  font-size: 24px; /* Adjust as needed for mobile */
  /* Add other styles as needed */

  @media (min-width: 768px) {
    font-size: 32px; /* Adjust as needed for tablet */
  }

  @media (min-width: 1024px) {
    font-size: 40px; /* Adjust as needed for desktop */
  }
`;

// Text or additional content
export const Text = styled.p`
  font-size: 16px; /* Adjust as needed for mobile */
  /* Add other styles as needed */

  @media (min-width: 768px) {
    font-size: 18px; /* Adjust as needed for tablet */
  }

  @media (min-width: 1024px) {
    font-size: 20px; /* Adjust as needed for desktop */
  }
`;


