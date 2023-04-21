import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Box, Menu, MenuItem, styled, Typography } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';


const Container = styled(Box)`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const MenuBtn = styled('button')`
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
`;

const MenuLink = styled(Link)`
  text-decoration: none;
  color: #000000;
`;


const MaterialsHeader: React.FC = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Container>
      <Typography variant='h4'>Materials</Typography>
      <Box>
        <MenuBtn onClick={handleClick}>
          <FontAwesomeIcon icon={faPlus} />
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
          <MenuItem onClick={handleClose}>
            <MenuLink to='/admin/materials/new-article'>Article</MenuLink>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <MenuLink to='/admin/materials/new-note'>Note</MenuLink>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <MenuLink to='/admin/materials/new-realtime-post'>Realtime Post</MenuLink>
          </MenuItem>
        </Menu>
      </Box>
    </Container>
  )
}

export default MaterialsHeader