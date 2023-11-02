// Header.jsx
import styled from 'styled-components';
import MediumTitle from '../Text/MediumTitle';

const HeaderContainer = styled.header`
  background-color: transparent; /* Background color for the header */
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px;
  z-index: 100; /* Ensure the header is above other content */
`;

const Logo = styled.img`
  width: 30px; /* Adjust the width as needed */
  margin-right: 20px; /* Add spacing between the logo and title */
`;


const HamburgerMenu = styled.img`
  width: 30px; /* Adjust the width as needed */
  margin-left: 20px;
  cursor: pointer;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Logo src="src/assets/Mainlogo.png" alt="Logo" />
      <MediumTitle>Sun Yoga Studio</MediumTitle>
      <HamburgerMenu src="src/assets/Grouphamburger.png" alt="hamburger-menu" />
    </HeaderContainer>
  );
};

export default Header;


