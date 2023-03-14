import React from 'react';
import { Box, Typography } from '@mui/material';


interface IDataNotFoundMessageProps {
  message: string
}

const DataNotFoundMessage: React.FC<IDataNotFoundMessageProps> = ({ message }) => {
  return (
    <Box>
      <Typography variant='body1'>{message}</Typography>
    </Box>
  );
};

export default DataNotFoundMessage;