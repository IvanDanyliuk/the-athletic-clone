import React from 'react';
import { Divider, Grid, Typography, styled } from '@mui/material';
import { v4 as uuid } from 'uuid';
import { IMaterial } from '../../../features/materials/types';
import PopularMaterialItem from './PopularMaterialItem';


interface IPopularMaterialsProps {
  materials: IMaterial[]
}

const SectionTitle = styled(Typography)`
  font-family: 'Train One', cursive;
  font-size: 2em;
`;

const MaterialsDivider = styled(Divider)`
  width: 100%;
`;


const PopularMaterials: React.FC<IPopularMaterialsProps> = ({ materials }) => {
  if(materials.length === 0) {
    return <div>Cannot find any popular materials</div>
  };

  return (
    <>
      <SectionTitle>Most Popular</SectionTitle>
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