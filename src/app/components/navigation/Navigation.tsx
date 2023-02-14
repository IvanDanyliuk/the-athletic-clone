import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { v4 as uuid } from 'uuid';


interface INavigationProps {
  title: string,
  url: string
}

const NavList = styled.ul`

`;

const ListItem = styled.li`

`;

const MenuLink = styled(NavLink)`

`;


const Navigation = (links: INavigationProps[]) => {
  return (
    <NavList>
      {links.map(({ title, url }) => (
        <ListItem key={uuid()}>
          <MenuLink to={url}>
            {title}
          </MenuLink>
        </ListItem>
      ))}
    </NavList>
  );
};

export default Navigation;