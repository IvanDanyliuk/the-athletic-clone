import React from 'react';
import { NavLink } from 'react-router-dom';
import { List, ListItem, styled } from '@mui/material';


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


const AdminPanelNavMenu: React.FC = () => {
  return (
    <List>
      <ListItem>
        <MenuLink to='materials'>Materials</MenuLink>
      </ListItem>
      <ListItem>
        <MenuLink to='competitions'>Competitions</MenuLink>
      </ListItem>
      <ListItem>
        <MenuLink to='clubs'>Clubs</MenuLink>
      </ListItem>
      <ListItem>
        <MenuLink to='users'>Users</MenuLink>
      </ListItem>
      <ListItem>
        <MenuLink to='players'>Players</MenuLink>
      </ListItem>
      <ListItem>
        <MenuLink to='schedules'>Schedules</MenuLink>
      </ListItem>
    </List>
  );
};

export default AdminPanelNavMenu;