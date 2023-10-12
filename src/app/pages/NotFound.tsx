import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Box, Grid, styled, Typography, useMediaQuery } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { selectHomepageSecondaryMaterials } from '../../features/materials/selectors';
import { DataNotFoundMessage } from '../components/ui';
import { AppDispatch } from '../../features/store';
import { getHomepageSecondaryMaterials } from '../../features/materials/asyncActions';


const Wrapper = styled(Box)`
  padding: 2em;
  width: 100%;
  min-height: 93vh;
  background: #3b3b3b;
  @media (max-width: 640px) {
    padding: 2em 1em;
  }
`;

const ErrorMessage = styled(Box)`
  letter-spacing: 3px;
`;

const ErrorIndex = styled(Typography)`
  padding: 10px 20px;
  width: fit-content;
  font-size: 5em;
  font-weight: 500;
  line-height: 1em;
  border-radius: 5px;
  background: #ffffff;
  @media (max-width: 640px) {
    font-size: 3em;
  }
`;

const Message = styled(Typography)`
  margin: 20px 0;
  padding: 10px 20px;
  width: fit-content;
  font-size: 1.5em;
  border-radius: 5px;
  background: #ffffff;
  a {
    text-decoration: none;
    color: #078adb;
  }
  @media (max-width: 640px) {
    font-size: .9em;
  }
`;

const ArticleLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

const Article = styled(Box)`
  padding: 1em;
  display: flex;
  align-items: center;
  border-radius: 5px;
  background: #ffffff;
  img {
    height: 180px;
  }
  @media (max-width: 640px) {
    img {
      height: 100px;
    }
  }
`;

const ArticleContent = styled(Box)`
  margin-left: 1em;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Title = styled(Typography)`
  font-family: 'Merriweather', serif;
  font-size: 1.4em;
  @media (max-width: 640px) {
    font-size: .8em;
  }
`;

const AuthorName = styled(Typography)`
  margin: 10px 0;
  font-weight: 600;
  color: #858585;
  @media (max-width: 640px) {
    font-size: .7em;
  }
`;

const PreviewText = styled(Typography)`
  font-size: .9em;
`;

const BackLinkContainer = styled(Box)`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;


const NotFound: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const materials = useSelector(selectHomepageSecondaryMaterials);
  const article = materials.mustRead;

  const isMobile = useMediaQuery('(max-width:640px)');

  useEffect(() => {
    if(!article) {
      dispatch(getHomepageSecondaryMaterials({ topMaterialsNum: 0, postsNum: 0 }))
    }
  }, []);

  return (
    <Wrapper>
      <ErrorMessage>
        <ErrorIndex variant='inherit'>404</ErrorIndex>
        <Message variant='inherit'>Sorry this page isn’t available.</Message>
        <Message variant='inherit'>Check out this article instead.</Message>
      </ErrorMessage>
      <Grid container spacing={3} alignItems='center'>
        <Grid item xs={12} md={6}>
          {!article ? (
            <DataNotFoundMessage message='Page not found' />
          ) : (
            <ArticleLink to={`/materials/${article?._id}`}>
              <Article>
                <img src={article.image} alt={article.title} />
                <ArticleContent>
                  <Title variant='inherit'>
                    {article.title}
                  </Title>
                  <AuthorName variant='inherit'>
                    {`${article.author.firstName} ${article.author.lastName}`}
                  </AuthorName>
                  {
                    !isMobile && (
                      <PreviewText variant='inherit'>
                        {article.preview}
                      </PreviewText>
                    )
                  }
                </ArticleContent>
              </Article>
            </ArticleLink>
          )}
        </Grid>
        <Grid item xs={12} md={6}>
          <BackLinkContainer>
            <Message variant='inherit'>
              Or take me <Link to='/'>home.</Link>
            </Message>
          </BackLinkContainer>
        </Grid>
      </Grid>
    </Wrapper>
  );
};

export default NotFound;