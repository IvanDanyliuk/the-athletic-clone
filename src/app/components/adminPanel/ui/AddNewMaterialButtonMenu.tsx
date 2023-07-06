import React, { useState } from 'react';
import { Box, Icon, IconButton, Menu, MenuItem, styled } from '@mui/material';
import { v4 as uuid } from 'uuid';
import { Add } from '@mui/icons-material';
import { Link } from 'react-router-dom';


interface IAddNewMaterialButtonMenuProps {
  links: {
    url: string;
    label: string;
  }[];
}

const MenuBtn = styled(IconButton)`
  cursor: pointer;
  width: 44px;
  height: 44px;
  border-radius: 22px;
  border: none;
  background: #30b77e;
  color: #ffffff;
  svg {
    font-size: 20px;
  }
  &:hover {
    background: #74d5ac;
  }
`;

const MenuLink = styled(Link)`
  text-decoration: none;
  color: #000000;
`;


const AddNewMaterialButtonMenu: React.FC<IAddNewMaterialButtonMenuProps> = ({ links }) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box>
      <MenuBtn onClick={handleClick}>
        <Icon component={Add} />
      </MenuBtn>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        {links.map(link => (
          <MenuItem key={uuid()} onClick={handleClose}>
            <MenuLink to={link.url}>{link.label}</MenuLink>
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
};

export default AddNewMaterialButtonMenu;