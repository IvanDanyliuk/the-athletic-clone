import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Grid, List, ListItem, Typography, styled } from '@mui/material';
import { v4 as uuid } from 'uuid';
import { IMaterial } from '../../../features/materials/types';
import { SeeMoreLink } from '../ui';


interface IHeadlinesProps {
  data: IMaterial[]
}

const HeadlinesList = styled(List)`
  padding-left: 1em;
  list-style-type: square;
`;

const HeadlineListItem = styled(ListItem)`
  padding: 0 0 1em 0;
  display: list-item;
`;

const HeadlineLink = styled(Link)`
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
          <Typography variant='overline'>Headlines</Typography>
        </Grid>
        <Grid item xs={2}>
          <SeeMoreLink url={'/materials'} label='See all' />
        </Grid>
      </Grid>
      <HeadlinesList>
        {data.map(material => (
          <HeadlineListItem key={uuid()}>
            <HeadlineLink to={`/materials/${material._id}`}>
              <Typography variant='h6_custom'>{material.title}</Typography>
            </HeadlineLink>
          </HeadlineListItem>
        ))}
      </HeadlinesList>
    </Box>
  );
};

export default Headlines;