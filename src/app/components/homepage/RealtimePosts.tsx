import React from 'react';
import { Box, Typography, Divider, Chip } from '@mui/material';
import { IMaterial } from '../../../features/materials/types';


interface IRealtimePostsProps {
  materials: IMaterial[]
}

const RealtimePosts: React.FC<IRealtimePostsProps> = ({ materials }) => {
  return (
    <Box>
      <Box sx={{ display: 'flex' }}>
        <Typography>Real Time</Typography>
        <Divider orientation='vertical' flexItem />
        <Chip label='Tranding' />
        <Chip label='Latest' />
      </Box>
    </Box>
  );
};

export default RealtimePosts;