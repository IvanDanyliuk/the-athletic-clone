import React from 'react';
import { Link } from 'react-router-dom';
import { Box, styled, Typography } from '@mui/material';
import { materials } from '../../data';


const Wrapper = styled(Box)`
  padding: 2em;
  width: 100%;
  max-height: 93vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  background: #454444;
  color: #000000;
`;

const TopSection = styled(Box)`
  margin-bottom: 30px;
`;

const BottomSection = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Index = styled(Typography)`
  margin-bottom: 20px;
  padding: .2em;
  width: fit-content;
  font-size: 5em;
  line-height: 1em;
  letter-spacing: 3px;
  border-radius: 5px;
  background: #ffffff;
`;

const Message = styled(Box)`
  margin-bottom: 20px;
  padding: .4em;
  width: fit-content;
  height: fit-content;
  font-size: 2em;
  line-height: 1em;
  letter-spacing: 3px;
  border-radius: 5px;
  background: #ffffff;

  a {
    color: #086ef4;
  }
`;

const Article = styled(Box)`
  padding: .5em 1em;
  width: 55%;
  display: flex;
  align-items: center;
  border-radius: 5px;
  background: #ffffff;

  img {
    height: 16em;
  }
`;

const ArticleDetails = styled(Box)`
  padding: 1em;
`;

const Title = styled(Typography)`
  font-family: 'Merriweather', serif;
  font-size: 1.7em;
`;

const Author = styled(Typography)`
  margin: 10px 0;
  font-weight: 500;
  color: #939393;
`;

const Text = styled(Typography)`
  font-family: 'Merriweather', serif;
  font-size: .8em;
`;


const NotFound: React.FC = () => {
  const article = materials[0];

  return (
    <Wrapper>
      <TopSection>
        <Index variant='inherit'>
          404
        </Index>
        <Message>
          <Typography variant='inherit'>Sorry this page isn’t available.</Typography>
        </Message>
        <Message>
          <Typography variant='inherit'>Check out this article instead.</Typography>
        </Message>
      </TopSection>
      <BottomSection>
        <Article>
          <img src={article.image} alt={article.title} />
          <ArticleDetails>
            <Title>{article.title}</Title>
            <Author>{`${article.author.firstName} ${article.author.lastName}`}</Author>
            <Text>{article.text}</Text>
          </ArticleDetails>
        </Article>
        <Message>
          <Typography variant='inherit'>
            Or take me <Link to='/'>home.</Link>
          </Typography>
        </Message>
      </BottomSection>
    </Wrapper>
  );
};

export default NotFound;