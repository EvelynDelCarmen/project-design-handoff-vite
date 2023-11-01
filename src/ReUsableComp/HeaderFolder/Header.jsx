// Header.jsx
import styled from 'styled-components';

const HeaderContainer = styled.header`
  background-color: transparent; /* Background color for the header */
  display: flex;
  align-items: center;
  padding: 12px;
  z-index: 100; /* Ensure the header is above other content */
`;

const Logo = styled.img`
  width: 30px; /* Adjust the width as needed */
  margin-right: 10px; /* Add spacing between the logo and title */
`;

const Title = styled.h1`
  flex: 1; /* Expands to fill available space */
  color: #fff; /* Text color for the title */
  font-size: 20px; /* Adjust the font size as needed */
`;

const HamburgerMenu = styled.div`
  width: 30px; /* Adjust the width as needed */
  cursor: pointer;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Logo src="path-to-your-logo.png" alt="Logo" />
      <Title>Mobile-First Header</Title>
      <HamburgerMenu>☰</HamburgerMenu>
    </HeaderContainer>
  );
};

export default Header;


