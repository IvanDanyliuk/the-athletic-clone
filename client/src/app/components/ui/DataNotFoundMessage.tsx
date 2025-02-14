import React from 'react';
import { Box, Typography, styled } from '@mui/material';


interface IDataNotFoundMessageProps {
  message: string;
}

const Container = styled(Box)`
  width: 100%;
  min-height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;


const DataNotFoundMessage: React.FC<IDataNotFoundMessageProps> = ({ message }) => {
  return (
    <Container>
      <Typography variant='body1'>{message}</Typography>
    </Container>
  );
};

export default DataNotFoundMessage;