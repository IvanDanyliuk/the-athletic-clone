import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import sc from 'styled-components';
import {styled} from '@mui/material/styles';
import { v4 as uuid } from 'uuid';
import { CompetitionModel } from '../../models/components';
import { setUrl } from '../../utils/helpers';
import { Box, Button, Container, Divider, Typography } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import DropDownMenu from './DropDownMenu';


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

const NavbarButton = styled(Button)`

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
        <NavbarButton>
          <FontAwesomeIcon icon={faBars} />
        </NavbarButton>
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
            <DropDownMenu 
              links={links} 
              currentLink={currentLink} 
              onClose={handleMenuClose} 
            />
          )
        }
      </Navbar>
    </Content>
  );
};

export default Navigation;