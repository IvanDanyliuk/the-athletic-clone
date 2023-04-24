import React from 'react';
import { Link } from 'react-router-dom';
import sc from 'styled-components';
import { Box, Grid, List, ListItem, Typography, styled } from '@mui/material';
import { v4 as uuid } from 'uuid';
import { IMaterial } from '../../../features/materials/types';


interface IHeadlinesProps {
  data: IMaterial[]
}

const HeadlinesList = sc.ul`
  list-style-type: square;
  list-style-position: inside
`;

const HeadlineItemLink = styled(Link)`
  font-size: 1em;
  text-decoration: none;
  color: #000000;
  transition: .5s;
  &:hover {
    color: #434343;
  }
`;


const Headlines: React.FC<IHeadlinesProps> = ({ data }) => {
  return (
    <Box sx={{ width: '100%' }}>
      <Grid container>
        <Grid item xs={10}>
          <Typography>Headlines</Typography>
        </Grid>
        <Grid item xs={2}>
          <Link to='/materials'>
            See all
          </Link>
        </Grid>
      </Grid>
      <List sx={{ listStyleType: 'square', listStylePosition: 'inside' }}>
        {data.map(material => (
          <ListItem key={uuid()} sx={{ display: 'list-item' }} disablePadding>
            <HeadlineItemLink to={`/materials/${material._id}`}>
              <Typography variant='inherit'>{material.title}</Typography>
            </HeadlineItemLink>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default Headlines;