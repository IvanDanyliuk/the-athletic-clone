import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { Box, Card, CardContent, CardHeader, Container, Grid, List, ListItem, Typography, styled } from '@mui/material';
import { v4 as uuid } from 'uuid';
import { IMatch } from '../../../features/schedules/types';
import dayjs from 'dayjs';


interface IScoresSectionProps {
  matches: {
    league: string,
    matches: IMatch[]
  }[]
}

const LeagueName = styled(Typography)`
  height: 100%;
  display: flex;
  align-items: center;
  font-family: 'Roboto', serif;
  font-weight: 600;
`;

const Date = styled(Typography)`
  font-family: 'Roboto', serif;
  font-size: .5em;
`;

const MatchText = styled(Typography)`
  font-family: 'Roboto', serif;
  font-size: .7em;
`;


const ScoresSection: React.FC<IScoresSectionProps> = ({ matches }) => {
  return (
    <Container maxWidth='xl'>
      <Carousel
        indicators={false}
        autoPlay={false}
        sx={{ marginTop: '1em', padding: '0 4em'}}
      >
        {matches.map(item => (
          <Grid key={uuid()} container>
            <Grid item xs={1} sx={{ margin: 0, padding: 0 }}>
              <LeagueName variant='inherit'>{item.league}</LeagueName>
            </Grid>
            <Grid item xs sx={{ display: 'flex' }}>
              {item.matches.map(match => (
                <Box key={uuid()} sx={{ marginRight: '1em' }}>
                  <Date variant='inherit'>
                    {dayjs(match.date).format('DD/MM/YYYY')}
                  </Date>
                  <Grid container spacing={3}>
                    <Grid item xs={6}>
                      <MatchText variant='inherit'>{match.home.shortName}</MatchText>
                      <MatchText variant='inherit'>{match.away.shortName}</MatchText>
                    </Grid>
                    <Grid item xs={6}>
                      <MatchText variant='inherit'>{match.score.split(':')[0]}</MatchText>
                      <MatchText variant='inherit'>{match.score.split(':')[1]}</MatchText>
                    </Grid>
                  </Grid>
                </Box>
              ))}
            </Grid>
          </Grid>
        ))}
      </Carousel>
    </Container>
  );
};

export default ScoresSection;