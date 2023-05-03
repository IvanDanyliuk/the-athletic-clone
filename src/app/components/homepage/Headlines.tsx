import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Grid, List, ListItem, Typography, styled } from '@mui/material';
import { v4 as uuid } from 'uuid';
import { IMaterial } from '../../../features/materials/types';


interface IHeadlinesProps {
  data: IMaterial[]
}

const HeadlinesList = styled(List)`
  padding-left: 1em;
  list-style-type: square;
  // list-style-position: inside
`;

const HeadlineListItem = styled(ListItem)`
  padding: 0 0 1em 0;
  display: list-item;
`;

const HeadlineItemLink = styled(Link)`
  /* font-family: 'Times New Roman', serif;
  font-size: 1em; */
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
          <Typography variant='h5'>Headlines</Typography>
        </Grid>
        <Grid item xs={2}>
          <Link to='/materials'>
            See all
          </Link>
        </Grid>
      </Grid>
      <HeadlinesList>
        {data.map(material => (
          <HeadlineListItem key={uuid()}>
            <HeadlineItemLink to={`/materials/${material._id}`}>
              <Typography variant='h6'>{material.title}</Typography>
            </HeadlineItemLink>
          </HeadlineListItem>
        ))}
      </HeadlinesList>
    </Box>
  );
};

export default Headlines;