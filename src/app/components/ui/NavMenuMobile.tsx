import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Box, Button, Menu, MenuItem, styled } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { v4 as uuid } from 'uuid';


interface INavMenuMobileProps {
  links: {
    url: string,
    label: string
  }[]
}

const NavMenuContainer = styled(Box)`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MenuButton = styled(Button)`
  font-size: 1.2em;
  color: #000000;
`;

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


const NavMenuMobile: React.FC<INavMenuMobileProps> = ({ links }) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <NavMenuContainer>
      <MenuButton onClick={handleClick}>
        <FontAwesomeIcon icon={faAngleDown} />
      </MenuButton>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            width: '100%',
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiList-root': {
              width: '100%',
              height: 'auto',
              ml: 0,
              mr: 1,
            },
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 'calc(50% - 5px)',
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        {links.map(link => (
          <MenuItem key={uuid()} onClick={handleClose}>
            <MenuLink to={link.url}>{link.label}</MenuLink>
          </MenuItem>
        ))}
      </Menu>
    </NavMenuContainer>
  );
};

export default NavMenuMobile;