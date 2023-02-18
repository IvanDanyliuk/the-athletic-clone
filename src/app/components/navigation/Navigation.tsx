import React from 'react';
import { NavLink } from 'react-router-dom';
import sc from 'styled-components';
import {styled} from '@mui/material/styles';
import { Button, Container } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { CompetitionModel } from '../../models/components';
import NavPanel from './NavPanel';


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


const Navigation: React.FC<INavigationProps> = ({ links }) => {
  const isMobile = useMediaQuery('(max-width:640px)');
  return (
    <Content maxWidth={'xl'}>
      <Navbar>
        <NavbarButton>
          <FontAwesomeIcon icon={faBars} />
        </NavbarButton>
        <Logo to={'/'}>The Athletic</Logo>
        {
          !isMobile && <NavPanel links={links} />
        }
      </Navbar>
    </Content>
  );
};

export default Navigation;