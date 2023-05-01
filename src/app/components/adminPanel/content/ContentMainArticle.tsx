import React from 'react';
import { Avatar, Box, Grid, Paper, Typography, styled } from '@mui/material';
import dayjs from 'dayjs';
import { IMaterial } from '../../../../features/materials/types';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';


interface IContentMainArticle {
  article: IMaterial | null
}

const SectionBody = styled(Paper)`
  margin-top: 1em;
  padding: 1em;
`;

const SectionTitle = styled(Box)`
  display: flex;
  align-items: 'center';
`;

const EditLink = styled(Link)`
  margin-left: .5em;
  color: #ababab;
  transition: .3s;
  &:hover {
    color: #7c7c7c;
  }
`;

const Text = styled(Typography)`
  font-size: .8em;
`;

const ContentMainArticle: React.FC<IContentMainArticle> = ({ article }) => {
  return (
    <SectionBody elevation={4}>
      <SectionTitle>
        <Typography variant='h6'>Must Read</Typography>
        <EditLink to={'/admin/materials'}>
          <FontAwesomeIcon icon={faPenToSquare} />
        </EditLink>
      </SectionTitle>
      {
        article ? (
          <Grid container spacing={3}>
            <Grid item xs={6}>
              <Text>{article.title}</Text>
            </Grid>
            <Grid item xs={2}>
              <Text>by {article.author.name}</Text>
            </Grid>
            <Grid item xs={1}>
              <Avatar src={article.image} variant='square' />
            </Grid>
            <Grid item xs={2}>
              <Text>
                {dayjs(article.publicationDate).subtract(1, 'day').format('DD/MM/YYYY')}
              </Text>
            </Grid>
          </Grid>
        ) : (
          <Typography>Article not found. Please, try to set the Main Article using the Content tab</Typography>
        )
      }
    </SectionBody>
  );
};

export default ContentMainArticle;