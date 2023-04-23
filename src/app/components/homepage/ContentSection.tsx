import React from 'react';
import { IContentSection } from '../../../features/content/types';
import { Box, Grid } from '@mui/material';


interface IContentSectionProps {
  data: IContentSection
}

const ContentSection: React.FC<IContentSectionProps> = ({ data }) => {
  return (
    <Box>
      <Grid container>
      <Grid item xs={12} md={6}>
        
      </Grid>
      <Grid item xs={12} md={6}>
        
      </Grid>
    </Grid>
    </Box>
  );
};

export default ContentSection;