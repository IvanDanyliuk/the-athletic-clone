import React from 'react';
import { Alert, Snackbar } from '@mui/material';


interface IErrorSnackbarProps {
  isOpen: boolean,
  message: string | null,
  onClose: () => void,
}


const ErrorSnackbar: React.FC<IErrorSnackbarProps> = ({ isOpen, message, onClose }) => {
  return (
    <Snackbar
      open={isOpen}
      autoHideDuration={6000}
      onClose={onClose}
      message={message}
    >
      <Alert 
        severity='error' 
        onClose={onClose}
      >
        {message}
      </Alert>
    </Snackbar>
  );
};

export default ErrorSnackbar;