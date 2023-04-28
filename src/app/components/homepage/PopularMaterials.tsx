import React from 'react';
import { Avatar, Divider, Grid, List, ListItem, Typography, styled } from '@mui/material';
import { v4 as uuid } from 'uuid';
import { IMaterial } from '../../../features/materials/types';
import PopularMaterialItem from './PopularMaterialItem';


interface IPopularMaterialsProps {
  materials: IMaterial[]
}

const Materials = styled(Grid)`
  padding: 1em 0;
`;

const MaterialListItem = styled(ListItem)`
  display: flex;
  flex-direction: column;
`;

const MaterialsDivider = styled(Divider)`
  width: 100%;
`;


const PopularMaterials: React.FC<IPopularMaterialsProps> = ({ materials }) => {
  const middleItemIndex = Math.ceil(materials.length / 2);

  if(materials.length === 0) {
    return <div>Cannot find any popular materials</div>
  };

  return (
    <Materials container spacing={3}>
      <Grid item xs={12} md={6}>
        <List>
          {materials.slice(0, middleItemIndex).map((material, i) => (
            <MaterialListItem key={uuid()}>
              <PopularMaterialItem 
                index={i + 1} 
                data={material} 
              />
              {i + 1 < middleItemIndex && (
                <MaterialsDivider orientation='horizontal' flexItem />
              )}
            </MaterialListItem>
          ))}
        </List>
      </Grid>
      <Grid item xs={12} md={6}>
        <List>
          {materials.slice(middleItemIndex).map((material, i) => (
            <MaterialListItem key={uuid()}>
              <PopularMaterialItem 
                index={middleItemIndex + i + 1} 
                data={material} 
              />
              {middleItemIndex + i + 1 < materials.length && (
                <MaterialsDivider orientation='horizontal' flexItem />
              )}
            </MaterialListItem>
          ))}
        </List>
      </Grid>
    </Materials>
  );
};

export default PopularMaterials;