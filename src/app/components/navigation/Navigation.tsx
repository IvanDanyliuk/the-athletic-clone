import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import sc from 'styled-components';
import {styled} from '@mui/material/styles';
import { v4 as uuid } from 'uuid';
import { CompetitionModel } from '../../models/components';
import { setUrl } from '../../utils/helpers';
import { Box, Container, Divider, Typography } from '@mui/material';


interface INavigationProps {
  links: CompetitionModel[]
}

const Content = styled(Container)`
  height: 7vh;
  display: flex;
  
`;

const Navbar = sc.nav`
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

const NavList = sc.ul`
  display: flex;
  list-style: none;
`;

const NavListItem = sc.li`
  margin-right: 20px;
`;

const MenuLink = styled(NavLink)`
  font-size: 1.1em;
  text-decoration: none;
  color: #ffffff;
`;

const DropDownMenu = styled(Box)`
  position: absolute;
  top: 7vh;
  left: 0;
  width: 100%;
  background: #ffffff;
`;

const DropDownTopLinks = sc.ul`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
`;

const DropDownBottomLinks = sc.ul`
  height: 24vh;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  list-style: none;
`;

const DropDownTopListItem = sc.li`
  margin: 0 30px 20px 0;
`;

const DropDownBottomListItem = sc.li`
  margin-bottom: 20px;
  width: 20%;
`;

const DropDownTopLink = styled(NavLink)`
  font-size: 1.2em;
  font-weight: 700;
  text-decoration: none;
  color: #333333;
`;

const DropDownBottomLink = styled(NavLink)`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #333333;
`;

const ClubLogo = sc.img`
  height: 2em;
  margin-right: 10px;
`;


const Navigation: React.FC<INavigationProps> = ({ links }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentLink, setCurrentLink] = useState('');

  const handleMenuOpen = (e: any) => {
    setIsMenuOpen(true);
    setCurrentLink(e.target.innerText)
  };

  const handleMenuClose = () => {
    setIsMenuOpen(false);
    setCurrentLink('');
  };

  return (
    <Content maxWidth={'xl'}>
      <Navbar>
        <Logo to={'/'}>The Athletic</Logo>
        <NavList>
          {links.map(link => (
            <NavListItem 
              key={uuid()} 
              id={link.fullName}
              onMouseEnter={handleMenuOpen} 
            >
              <MenuLink 
                to={setUrl(link.fullName)}
                onClick={handleMenuClose}
              >
                {link.fullName}
              </MenuLink>
            </NavListItem>
          ))}
        </NavList>
        {
          isMenuOpen && (
            <DropDownMenu onMouseLeave={handleMenuClose}>
              <Container>
                <DropDownTopLinks>
                  <DropDownTopListItem>
                    <DropDownTopLink to={setUrl(currentLink)}>
                      <Typography variant='inherit'>Home</Typography>
                    </DropDownTopLink>
                  </DropDownTopListItem>
                  <DropDownTopListItem>
                    <DropDownTopLink to={`${setUrl(currentLink)}/schedule/`}>
                      Scores & Schedule
                    </DropDownTopLink>
                  </DropDownTopListItem>
                  <DropDownTopListItem>
                    <DropDownTopLink to={`${setUrl(currentLink)}/standings/`}>
                      Standings
                    </DropDownTopLink>
                  </DropDownTopListItem>
                  <DropDownTopListItem>
                    <DropDownTopLink to={`${setUrl(currentLink)}/news/`}>
                      News
                    </DropDownTopLink>
                  </DropDownTopListItem>
                </DropDownTopLinks>
                <Divider />
                <DropDownBottomLinks>
                  {links.find(link => link.fullName === currentLink)?.clubs.map(club => (
                    <DropDownBottomListItem key={uuid()}>
                      <DropDownBottomLink 
                        to={`${setUrl(currentLink)}/${setUrl(club.commonName)}`}
                      >
                        <ClubLogo src={club.clubLogoUrl} alt={club.commonName} />
                        <Typography variant='inherit'>
                          {club.commonName}
                        </Typography>
                      </DropDownBottomLink>
                    </DropDownBottomListItem>
                  ))}
                </DropDownBottomLinks>
              </Container>
            </DropDownMenu>
          )
        }
      </Navbar>
    </Content>
  );
};

export default Navigation;