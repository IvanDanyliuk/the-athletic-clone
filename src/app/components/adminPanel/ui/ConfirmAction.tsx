import React, { useState } from 'react';
import { Box, Button, Dialog, DialogActions, DialogTitle } from '@mui/material';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


interface IConfirmActionProps {
  onDelete: () => void;
}

const ConfirmAction: React.FC<IConfirmActionProps> = ({ onDelete }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleDialogOpen = () => {
    setIsOpen(!isOpen);
  };

  const acceptAction = () => {
    onDelete();
    setIsOpen(false);
  };

  return (
    <Box>
      <Button data-testid='closeBtn' type='button' onClick={handleDialogOpen}>
        <FontAwesomeIcon icon={faXmark} />
      </Button>
      <Dialog
        open={isOpen}
        onClose={handleDialogOpen}
      >
        <DialogTitle>
          Do you want to delete this content section?
        </DialogTitle>
        <DialogActions>
          <Button 
            data-testid='acceptBtn'
            type='button' 
            color='success' 
            variant='contained' 
            onClick={acceptAction}
          >
            Yes
          </Button>
          <Button 
            data-testid='rejectBtn'
            type='button' 
            color='error' 
            variant='contained' 
            onClick={handleDialogOpen}
          >
            No
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  )
}

export default ConfirmAction