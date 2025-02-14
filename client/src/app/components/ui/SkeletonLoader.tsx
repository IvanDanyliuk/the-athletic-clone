import React from 'react';
import { Box, Grid, Skeleton } from '@mui/material';


enum SkeletonVariants {
  Section = 'section',
  List = 'list',
  Row = 'row'
}

interface ISkeletonLoaderProps {
  variant?: string;
}


const SkeletonLoader: React.FC<ISkeletonLoaderProps> = ({ variant }) => {
  if(variant === SkeletonVariants.Section) {
    return (
      <Grid data-testid='skeletonLoader' container spacing={3} sx={{ width: '100%' }}>
        <Grid item xs={6}>
          <Skeleton sx={{ height: '100%' }} />
        </Grid>
        <Grid item xs={6}>
          <Skeleton sx={{ height: '8em' }} />
          <Skeleton sx={{ height: '8em' }} />
          <Skeleton sx={{ height: '8em' }} />
        </Grid>
      </Grid>
    );
  }
  if(variant === SkeletonVariants.List) {
    return (
      <Box sx={{ width: '100%' }}>
        <Skeleton sx={{ height: '5em' }} />
        <Skeleton sx={{ height: '5em' }} />
        <Skeleton sx={{ height: '5em' }} />
      </Box>
    );
  }
  return (
    <Grid container spacing={3} sx={{ width: '100%' }}>
      <Grid item xs={3}>
        <Skeleton sx={{ height: '20em' }}/>
      </Grid>
      <Grid item xs={3}>
        <Skeleton sx={{ height: '20em' }} />
      </Grid>
      <Grid item xs={3}>
        <Skeleton sx={{ height: '20em' }} />
      </Grid>
      <Grid item xs={3}>
        <Skeleton sx={{ height: '20em' }} />
      </Grid>
    </Grid>
  );
};

export default SkeletonLoader;