import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Grid, List, ListItem, Typography, styled } from '@mui/material';
import { v4 as uuid } from 'uuid';
import { IMaterial } from '../../../features/materials/types';
import dayjs from 'dayjs';


interface ISearchResultsProps {
  materials: IMaterial[];
}

const MaterialLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

const Image = styled('img')`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const MaterialTitle = styled(Typography)`
  font-size: 1.3em;
`;

const MaterialAuthorName = styled(Typography)`
  margin-right: 1em;
  font-size: .8em;
`;

const MaterialDate = styled(Typography)`
  font-size: .7em;
  color: #4d4d4d;
`;

const MaterialSecondaryInfo = styled(Box)`
  width: 100%;
  display: flex;
  align-items: center;
`;


const SearchResults: React.FC<ISearchResultsProps> = ({ materials }) => {
  return (
    <List>
      {materials.map(material => (
        <ListItem key={uuid()}>
          <MaterialLink to={`/materials/${material._id}`}>
            <Grid container spacing={3}>
              <Grid item xs={2}>
                <Image src={material.image} alt={material._id} />
              </Grid>
              <Grid item xs={10} display='flex' flexDirection='column' justifyContent='space-between'>
                <MaterialTitle variant='h4_custom'>
                  {material.title}
                </MaterialTitle>
                <MaterialSecondaryInfo>
                  <MaterialAuthorName>
                    {material.author.name}
                  </MaterialAuthorName>
                  <MaterialDate>
                    {dayjs(material.publicationDate).format('DD/MM/YYYY')}
                  </MaterialDate>
                </MaterialSecondaryInfo>
              </Grid>
            </Grid>
          </MaterialLink>
        </ListItem>
      ))}
    </List>
  );
};

export default SearchResults;