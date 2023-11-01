import styled from 'styled-components';
import { Link } from 'react-router-dom';

// Styled component for the header container
const HeaderContainer = styled.div`
  background-color: #333;
  color: #fff;
  padding: 10px;
  display: flex;
  justify-content: space-around;
`;

// Styled component for the links
const StyledLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  margin: 0 10px;

  &:hover {
    text-decoration: underline;
  }
`;

export const Header = () => {
    return (
        <HeaderContainer>
            <StyledLink to="/">Home</StyledLink>
            <StyledLink to="/about">About Us</StyledLink>
        </HeaderContainer>
    );
};
