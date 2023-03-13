import React, { useState } from 'react';
import { Button, Menu, MenuItem } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';


interface IRowActionButtonsProps {
  onEdit: () => void,
  onDelete: () => void
}


const RowActionButtons: React.FC<IRowActionButtonsProps> = ({ onEdit, onDelete }) => {
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
        <MenuItem onClick={onEdit}>Edit</MenuItem>
        <MenuItem onClick={onDelete}>Delete</MenuItem>
      </Menu>
    </>
  );
};

export default RowActionButtons;