import React from 'react';
import { NavLink } from 'react-router-dom';
import { List, ListItem, styled } from '@mui/material';


interface INavMenuProps {
  links: {
    url: string;
    label: string;
  }[];
}

const MenuLink = styled(NavLink)`
  padding: 1em 0;
  width: 100%;
  font-size: 1em;
  font-weight: 500;
  text-decoration: none;
  text-align: center;
  border-radius: 3px;
  background: #fafafa;
  color: #000000;
  &:hover {
    background: #ededed;
  }
  &.active {
    background: #ededed;
  }
`;


const NavMenu: React.FC<INavMenuProps> = ({ links }) => {
  return (
    <List>
      {links.map(link => (
        <ListItem>
          <MenuLink to={link.url}>
            {link.label}
          </MenuLink>
        </ListItem>
      ))}
    </List>
  );
};

export default NavMenu;