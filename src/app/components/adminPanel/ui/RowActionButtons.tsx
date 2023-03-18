import React, { useState } from 'react';
import { Button, Menu, MenuItem, styled } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';


interface IRowActionButtonsProps {
  id: string, 
  onDelete: () => void
}

const EditLink = styled(Link)`
  text-decoration: none;
  color: #000000;
`;


const RowActionButtons: React.FC<IRowActionButtonsProps> = ({ id, onDelete }) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLButtonElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  
  const handleClose = () => {
    setAnchorEl(null);
  };
  
  return (
    <>
      <Button
        onClick={handleClick}
      >
        <FontAwesomeIcon icon={faEllipsisVertical} />
      </Button>
      <Menu
        anchorEl={anchorEl}
        open={open}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        onClose={handleClose}
      >
        <MenuItem>
          <EditLink to={`/admin/materials/edit/${id}`}>Edit</EditLink>
        </MenuItem>
        <MenuItem onClick={onDelete}>Delete</MenuItem>
      </Menu>
    </>
  );
};

export default RowActionButtons;