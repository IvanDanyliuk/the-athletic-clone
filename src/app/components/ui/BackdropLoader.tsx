import React from 'react';
import { Backdrop, CircularProgress } from '@mui/material';


interface IBackdropLoaderProps {
  open: boolean
}

const BackdropLoader: React.FC<IBackdropLoaderProps> = ({ open }) => {
  return (
    <Backdrop
        sx={{ color: '#fff', zIndex: 1 }}
        open={open}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
  );
};

export default BackdropLoader;