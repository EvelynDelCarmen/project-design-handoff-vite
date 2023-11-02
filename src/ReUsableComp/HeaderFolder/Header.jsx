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
display: flex;
width: 51px;
height: 51.001px;
padding: 2.78px 0px 2.782px 0px;
flex-direction: column;
justify-content: center;
align-items: center;
margin-right: 20px;
flex-shrink: 0;
`;


const HamburgerMenu = styled.img`
  width: 30px; /* Adjust the width as needed */
  margin-left: 20px;
  cursor: pointer;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Logo src="src/assets/items/Mainlogo.png" alt="Logo" />
      <MediumTitle>Sun Yoga Studio</MediumTitle>
      <HamburgerMenu src="src/assets/items/Grouphamburger.png" alt="hamburger-menu" />
    </HeaderContainer>
  );
};

export default Header;


