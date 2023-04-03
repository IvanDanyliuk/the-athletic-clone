import React, { useState } from 'react';
import { Box, Button, Dialog, DialogActions, DialogTitle, Menu, MenuItem, styled } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';


export enum EssenseType {
  materials = 'materials',
  users = 'users',
  competitions = 'competitions',
  clubs = 'clubs',
  schedules = 'schedules',
  players = 'players'
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
  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState<boolean>(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLButtonElement>(null);
  const open = Boolean(anchorEl);

  const handleConfirmModalOpen = ()=> {
    setIsConfirmModalOpen(true);
  };

  const handleConfirmModalClose = ()=> {
    setIsConfirmModalOpen(false);
    setAnchorEl(null);
  };

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  
  const handleClose = () => {
    setAnchorEl(null);
  };

  const DeleteBtn = (
    <>
      <Box onClick={handleConfirmModalOpen}>Delete</Box>
      <Dialog
        open={isConfirmModalOpen}
        onClose={handleConfirmModalClose}
      >
        <DialogTitle>
          Do you want to delete this {type.slice(0, type.length - 1)}?
        </DialogTitle>
        <DialogActions>
          <Button 
            type='button' 
            color='success' 
            variant='contained' 
            onClick={onDelete}
          >
            Yes
          </Button>
          <Button 
            type='button' 
            color='error' 
            variant='contained' 
            onClick={handleConfirmModalClose}
          >
            No
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
  
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
        <MenuItem>
          {DeleteBtn}
        </MenuItem>
      </Menu>
    </>
  );
};

export default RowActionButtons;