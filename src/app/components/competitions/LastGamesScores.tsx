import React from 'react';
import { Box, Typography, styled } from '@mui/material';
import { v4 as uuid } from 'uuid';


interface ILastGamesScoresProps {
  scores: string[];
}

const Container = styled(Box)`
  display: flex;
`;

const ScoreIcon = styled(Box)`
  margin-right: .5em;
  width: 3em;
  height: 3em;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 1.5em;
  

  &[data-score='W'] {
    background: #12a35b;
    color: #ffffff;
  }
  &[data-score='L'] {
    background: #ac2b29;
    color: #ffffff;
  }
  &[data-score='D'] {
    background: #afafaf;
    color: #121212;
  }

  p {
    font-size: .9em;
    font-weight: 600;
  }
`;

const LastGamesScores: React.FC<ILastGamesScoresProps> = ({ scores }) => {
  return (
    <Container>
      {scores.map(match => (
        <ScoreIcon key={uuid()} data-score={match}>
          <Typography>{match}</Typography>
        </ScoreIcon>
      ))}
    </Container>
  );
};

export default LastGamesScores;