import React from 'react';
import { Link } from 'react-router-dom';
import { Avatar, Box, Grid, Paper, Typography, styled } from '@mui/material';
import dayjs from 'dayjs';
import { IMaterial } from '../../../features/materials/types';


interface IMustReadSectionProps {
  article: IMaterial
}

const SectionTitle = styled(Typography)`
  margin-bottom: .8em;
  @media (max-width: 640px) {
    font-size: 1.3em;
  }
`;

const ArticleLink = styled(Link)`
  text-decoration: none;
  color: #000000;
`;

const ArticleContent = styled(Grid)`
  padding: 1em;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Image = styled('img')`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Date = styled(Typography)`
  color: #939393;
`;

const ArticleTitle = styled(Typography)`
  margin-bottom: 1em;
  @media (max-width: 492px) {
    font-size: 1.5em;
    text-align: center;
  }
`;

const ArticlePreview = styled(Typography)`
  @media (max-width: 492px) {
    margin-bottom: 1em;
    font-size: .8em;
    text-align: center;
  }
`;

const AuthorName = styled(Typography)`
  margin-left: .5em;
  font-size: .8em;
`;


const MustReadSection: React.FC<IMustReadSectionProps> = ({ article }) => {
  return (
    <>
      <SectionTitle variant='h2_custom'>Must Read</SectionTitle>
      <ArticleLink to={`/materials/${article._id}`}>
        <Paper>
          <Grid container sx={{ position: 'relative' }} flexDirection={{ xs: 'column-reverse', md: 'row' }}>
            <ArticleContent item xs={12} md={6}>
              <Date variant='caption'>
                {dayjs(article.publicationDate).subtract(1, 'day').format('DD/MM/YYYY')}
              </Date>
              <Box>
                <ArticleTitle variant='h3_top_section'>{article.title}</ArticleTitle>
                <ArticlePreview variant='subtitle1_custom'>{article.preview}</ArticlePreview>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Avatar src={article.author.photoUrl} alt={article.author.name} />
                <AuthorName variant='caption'>by {article.author.name}</AuthorName>
              </Box>
            </ArticleContent>
            <Grid item xs={12} md={6}>
              <Image src={article.image} alt={article._id} />
            </Grid>
          </Grid>
        </Paper>
      </ArticleLink>
    </>
  );
};

export default MustReadSection;