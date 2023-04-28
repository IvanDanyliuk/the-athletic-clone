import React from 'react';
import { Avatar, Grid, Typography, styled } from '@mui/material';
import { IMaterial } from '../../../features/materials/types';
import { Link } from 'react-router-dom';


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

const Index = styled(Typography)`
  font-family: 'Train One', cursive;
  font-size: 2em;
`;

const Title = styled(Typography)`
  
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
          <Index>{index}</Index>
        </Grid>
        <Grid item xs={9}>
          <Title>{data.title}</Title>
        </Grid>
        <Grid item xs={2}>
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