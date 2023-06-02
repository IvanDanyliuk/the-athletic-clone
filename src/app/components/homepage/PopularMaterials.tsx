import React from 'react';
import styled from '@mui/styled-engine-sc';
import { Divider, Grid, Typography } from '@mui/material';
import { v4 as uuid } from 'uuid';
import { IMaterial } from '../../../features/materials/types';
import { PopularMaterialItem } from './';


interface IPopularMaterialsProps {
  materials: IMaterial[]
}

const MaterialsDivider = styled(Divider)`
  width: 100%;
`;


const PopularMaterials: React.FC<IPopularMaterialsProps> = ({ materials }) => {
  if(materials.length === 0) {
    return <div>Cannot find any popular materials</div>
  };

  return (
    <>
      <Typography variant='h5_custom'>Most Popular</Typography>
      <Grid container spacing={3}>
        {materials.map((material, i) => (
          <Grid item key={uuid()} xs={12} md={6} sx={{ width: '100%' }}>
            <PopularMaterialItem 
              index={i + 1} 
              data={material} 
            />
            {i + 1 < materials.length && (
              <MaterialsDivider orientation='horizontal' flexItem />
            )}
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default PopularMaterials;