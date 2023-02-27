import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Box, Button, Menu, MenuItem, styled } from '@mui/material';
import { AppDispatch } from '../../../features/store';
import { logout } from '../../../features/users/asyncActions';


const Wrapper = styled(Box)`

`;

const UserPhoto = styled(Button)`

`;


const UserHeaderMenu: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleMenuOpen = (e: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(e.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  }

  const handleLogout = () => {
    setAnchorEl(null);
    dispatch(logout());
  }

  return (
    <Wrapper>
      <UserPhoto onClick={handleMenuOpen}>User</UserPhoto>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleMenuClose}
      >
        <MenuItem onClick={handleMenuClose}>
          <Link to='/'>Profile</Link>
        </MenuItem>
        <MenuItem onClick={handleLogout}>Logout</MenuItem>
      </Menu>
    </Wrapper>
  );
};

export default UserHeaderMenu;