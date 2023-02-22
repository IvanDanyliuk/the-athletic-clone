import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Box, Button, Container, styled, useMediaQuery } from '@mui/material';
import NavPanel from '../navigation/Navigation';
import { competitions } from '../../../data';
import BtnMenu from '../navigation/BtnMenu';


const Wrapper = styled(Box)`
  position: fixed;
  width: 100%;
  background: #181818;
  /* z-index: 1000; */
`;

const Content = styled(Container)`
  position: relative;
  height: 7vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NavbarButton = styled(Button)`
  width: auto;
  svg {
    font-size: 1.5em;
    color: #ffffff;
  }
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

  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleMenuOpen = () => {
    setIsOpen(true);
  };

  const handleMenuClose = () => {
    setIsOpen(false);
  };

  return (
    <Wrapper component='header'>
      <Content maxWidth={'xl'}>
        <BtnMenu links={data} />
        <Logo to={'/'}>The Athletic</Logo>
        {
          !isMobile && <NavPanel links={data} />
        }
        <SubscribeBtn>Subscribe</SubscribeBtn>
      </Content>
    </Wrapper>
  );
};

export default Header;