import React, { useState } from 'react';
import { Button, Menu, MenuItem, styled } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';


export enum EssenseType {
  materials = 'materials',
  users = 'users',
  competitions = 'competitions',
  clubs = 'clubs',
  schedules = 'schedules'
}

interface IRowActionButtonsProps {
  id: string,
  type: EssenseType, 
  onDelete: () => void
}

const EditLink = styled(Link)`
  text-decoration: none;
  color: #000000;
`;


const RowActionButtons: React.FC<IRowActionButtonsProps> = ({ id, type, onDelete }) => {
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
          <EditLink to={`/admin/${type}/edit/${id}`}>Edit</EditLink>
        </MenuItem>
        <MenuItem onClick={onDelete}>Delete</MenuItem>
      </Menu>
    </>
  );
};

export default RowActionButtons;