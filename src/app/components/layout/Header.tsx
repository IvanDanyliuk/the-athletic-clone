import React from 'react';
import { NavLink } from 'react-router-dom';
import { Box, Button, Container, styled, useMediaQuery } from '@mui/material';
import { competitions } from '../../../data';
import BtnMenu from '../navigation/BtnMenu';
import Navigation from '../navigation/Navigation';
import BtnMenuMobile from '../navigation/BtnMenuMobile';


const Wrapper = styled(Box)`
  position: fixed;
  width: 100%;
  background: #181818;
`;

const Content = styled(Container)`
  position: relative;
  height: 7vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const SubscribeBtn = styled(Button)`
  background: #ed4747;
  color: #ffffff;
`;

const Logo = styled(NavLink)`
  font-family: 'Arvo';
  font-size: 2em;
  font-weight: 700;
  white-space: nowrap;
  text-decoration: none;
  color: #ffffff;
`;


const Header: React.FC = () => {
  const data = competitions
  const isMobile = useMediaQuery('(max-width:640px)');

  return (
    <Wrapper component='header'>
      <Content maxWidth={'xl'}>
        {
          isMobile ? 
            <BtnMenuMobile links={data} /> : 
            <BtnMenu links={data} />
        }
        <Logo to={'/'}>The Athletic</Logo>
        {
          !isMobile && <Navigation links={data} />
        }
        <SubscribeBtn>Subscribe</SubscribeBtn>
      </Content>
    </Wrapper>
  );
};

export default Header;