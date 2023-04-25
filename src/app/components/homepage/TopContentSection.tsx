import React from 'react';
import sc from 'styled-components';
import { Box, Grid, Typography, styled } from '@mui/material';
import { v4 as uuid } from 'uuid';
import { IMaterial } from '../../../features/materials/types';


interface ITopContentSectionProps {
  materials: IMaterial[]
}

const TopImage = sc.img`
  width: 100%;
`;

const TopMaterialTitle = styled(Typography)`
  margin: .5em 0;
  font-family: 'Crimson Pro', serif;
  font-size: 1.8em;
  line-height: 1em;
`;

const TopMaterialPreviewText = styled(Typography)`
  font-family: 'Crimson Pro', serif;
  font-size: 1em;
  line-height: 1em;
`;


const TopContentSection: React.FC<ITopContentSectionProps> = ({ materials }) => {
  if(materials.length === 0) {
    return <div>Loading...</div>;
  }

  return (
      <Grid container spacing={3}>
        <Grid item xs={12} md={8}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <TopImage 
                src={materials[0].image} 
                alt={materials[0]._id} 
              />
              <TopMaterialTitle variant='inherit'>
                {materials[0].title}
              </TopMaterialTitle>
              <TopMaterialPreviewText variant='inherit'>
                {materials[0].preview}
              </TopMaterialPreviewText>
            </Grid>
            {/* {materials.slice(1, 7).map(material => (
              <Grid key={uuid()} item xs={12} md={6} height={6}>

              </Grid>
            ))} */}
          </Grid>
        </Grid>
        <Grid item xs={12} md={4}>
          
        </Grid>
      </Grid>
  );
};

export default TopContentSection;