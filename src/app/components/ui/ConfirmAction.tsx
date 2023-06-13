import React, { useState, ReactNode } from 'react';
import { Box, Button, Dialog, DialogActions, DialogTitle } from '@mui/material';


interface IConfirmActionProps {
  message: string;
  children: ReactNode,
  onAction: () => void;
}

const ConfirmAction: React.FC<IConfirmActionProps> = ({ message, children, onAction }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleDialogOpen = () => {
    setIsOpen(!isOpen);
  };

  const acceptAction = () => {
    onAction();
    setIsOpen(false);
  };

  return (
    <Box>
      <Button data-testid='closeBtn' type='button' onClick={handleDialogOpen}>
        {children}
      </Button>
      <Dialog
        open={isOpen}
        onClose={handleDialogOpen}
      >
        <DialogTitle>
          {message}
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