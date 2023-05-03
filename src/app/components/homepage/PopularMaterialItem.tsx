import React from 'react';
import { Link } from 'react-router-dom';
import { Avatar, Grid, Typography, styled } from '@mui/material';
import { IMaterial } from '../../../features/materials/types';


interface IPopularMaterialItemProp {
  index: number,
  data: IMaterial
}

const LinkContainer = styled(Link)`
  width: 100%;
  text-decoration: none;
  color: #000000;
`;

const MaterialContainer = styled(Grid)`
  padding: 1em 0;
  display: flex;
  align-items: center;
`;

const Image = styled(Avatar)`
  width: 100%;
  height: 4em;
`;


const PopularMaterialItem: React.FC<IPopularMaterialItemProp> = ({ index, data }) => {
  return (
    <LinkContainer to={`/materials/${data._id}`}>
      <MaterialContainer container spacing={3}>
        <Grid item xs={1}>
          <Typography variant='overline'>{index}</Typography>
        </Grid>
        <Grid item xs={8} md={9}>
          <Typography variant='body1'>{data.title}</Typography>
        </Grid>
        <Grid item xs={3} md={2}>
          <Image 
            src={data.image} 
            alt={data._id} 
            variant='square' 
          />
        </Grid>
      </MaterialContainer>
    </LinkContainer>
  );
};

export default PopularMaterialItem;