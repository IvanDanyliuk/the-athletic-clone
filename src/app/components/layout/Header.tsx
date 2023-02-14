import React from 'react';
import { NavLink } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import { Box, Container } from '@mui/material';


const Wrapper = styled(Box)`
  background: #181818;
`;

const Content = styled(Container)`
  height: 7vh;
  display: flex;
  align-items: center;
`;

const Logo = styled(NavLink)`
  font-family: 'Arvo';
  font-size: 2em;
  font-weight: 700;
  color: #ffffff;
  text-decoration: none;
`;

const Header = () => {
  return (
    <Wrapper>
      <Content maxWidth={'xl'}>
        <Logo to={'/'}>The Athletic</Logo>
      </Content>
    </Wrapper>
  );
};

export default Header;