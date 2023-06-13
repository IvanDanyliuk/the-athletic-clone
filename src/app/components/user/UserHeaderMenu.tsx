import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Avatar, Box, Menu, MenuItem, styled } from '@mui/material';
import { AppDispatch } from '../../../features/store';
import { logout } from '../../../features/users/asyncActions';
import { IUser } from '../../../features/users/types';


interface IUserHeaderMenuProps {
  user: IUser
}


const UserAvatar = styled(Avatar)`
  cursor: pointer;
`;

const UserMenuItem = styled(MenuItem)`
  color: #3e3e3e;

  a {
    text-decoration: none;
    color: #3e3e3e;
  }
`;


const UserHeaderMenu: React.FC<IUserHeaderMenuProps> = ({ user }) => {
  const dispatch = useDispatch<AppDispatch>();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleMenuOpen = (e: React.MouseEvent<HTMLDivElement>) => {
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
    <Box>
      <UserAvatar 
        src={user.userPhotoUrl} 
        alt={user.lastName} 
        onClick={handleMenuOpen} 
      />
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleMenuClose}
      >
        <UserMenuItem onClick={handleMenuClose}>
          <Link to={`/profile/${user._id}`}>Profile</Link>
        </UserMenuItem>
        {user.role === 'admin' && (
          <UserMenuItem onClick={handleMenuClose}>
            <Link to='/admin/materials'>Admin Panel</Link>
          </UserMenuItem>
        )}
        <UserMenuItem onClick={handleLogout}>Logout</UserMenuItem>
      </Menu>
    </Box>
  );
};

export default UserHeaderMenu;