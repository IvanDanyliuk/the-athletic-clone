import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import { Box, Button, Container, styled, useMediaQuery } from '@mui/material';
import { BtnMenu, BtnMenuMobile, Navigation } from '../navigation/';
import { UserHeaderMenu } from '../user/';
import { selectUser } from '../../../features/users/selectors';
import { selectAllCompetitions } from '../../../features/competitions/selectors';
import { AppDispatch } from '../../../features/store';
import { getAllCompetitions } from '../../../features/competitions/asyncActions';
import { SearchHeaderField } from '../search';


const Wrapper = styled(Box)`
  position: fixed;
  width: 100%;
  background: #181818;
  z-index: 1000;
`;

const Content = styled(Container)`
  position: relative;
  height: 7vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Section = styled(Box)`
  display: flex;
  align-items: center;
`;

const NavActions = styled(Box)`
  display: flex;

`;

const SubscribeBtn = styled(Button)`
  margin-left: 1em;
  font-family: 'Arvo';
  font-weight: 600;
  text-transform: capitalize;
  background: #ed4747;
  color: #ffffff;

  @media (max-width: 640px) {
    font-size: .7em;
  }
`;

const Logo = styled(NavLink)`
  margin-left: 20px;
  font-family: 'Arvo';
  font-size: 2em;
  font-weight: 700;
  white-space: nowrap;
  text-decoration: none;
  color: #ffffff;

  @media (max-width: 640px) {
    font-size: 1.6em;
  }
`;

const LoginLink = styled(Link)`
  font-size: 1.1em;
  font-weight: 600;
  text-decoration: none;
  color: #ffffff;

  @media (max-width: 640px) {
    font-size: 1em;
  }
`;


const Header: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();

  const leagues = useSelector(selectAllCompetitions);
  const user = useSelector(selectUser);
  const sortedLeagues = [...leagues].sort((a, b) => new Date(a.createdAt) > new Date(b.createdAt) ? 1 : -1);
  const isMobile = useMediaQuery('(max-width:900px)');

  useEffect(() => {
    dispatch(getAllCompetitions());
  }, []);

  return (
    <Wrapper component='header'>
      <Content maxWidth={'xl'}>
        <Section>
          {
            isMobile ? 
              <BtnMenuMobile links={sortedLeagues} /> : 
              <BtnMenu links={sortedLeagues} />
          }
          <Logo to={'/'}>The Athletic</Logo>
        </Section>
        {
          !isMobile && <Navigation links={sortedLeagues} />
        }
        <NavActions>
          {
            user ? (
              <UserHeaderMenu user={user} />
            ) : (
              <LoginLink to='/login'>Log In</LoginLink>
            )
          }
          <SubscribeBtn>Subscribe</SubscribeBtn>
          {
            !isMobile && (
              <SearchHeaderField />
            )
          }
        </NavActions>
      </Content>
    </Wrapper>
  );
};

export default Header;