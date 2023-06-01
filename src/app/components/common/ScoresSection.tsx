import React, { useState } from 'react';
import Carousel from 'react-simply-carousel';
import { Box, Container, Grid, Typography, styled } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import dayjs from 'dayjs';
import { v4 as uuid } from 'uuid';
import { IMatch } from '../../../features/schedules/types';


interface IScoresSectionProps {
  matches: {
    league: string,
    matches: IMatch[]
  }[]
}

const Wrapper = styled(Box)`
  background: #eeeeee;
`;

const LeagueItem = styled(Box)`
  display: flex;
`;

const LeagueNameSection = styled(Box)`
  padding: 0 1em;
  width: max-content;
  background: #cbcbcb;
`;

const LeagueMatchesSection = styled(Box)`
  padding: .5em 0;
  display: flex;
`;

const LeagueName = styled(Typography)`
  padding: '0 1em';
  height: 100%;
  display: flex;
  align-items: center;
  font-family: 'Roboto', serif;
  font-weight: 600;
`;

const Match = styled(Box)`
  padding: 0 1em;
`;

const MatchDate = styled(Box)`
  padding-bottom: .5em;
`;

const MatchDetails = styled(Box)`
  width: max-content;
`;

const Date = styled(Typography)`
  font-family: 'Roboto', serif;
  font-size: .5em;
`;

const MatchText = styled(Typography)`
  font-family: 'Roboto', serif;
  font-size: .7em;
`;

const ClubCommonData = styled(Grid)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ClubName = styled(Grid)`
  display: flex;
  align-items: center;
`;

const ClubLogo = styled('img')`
  height: 1.5em;
`;



const ScoresSection: React.FC<IScoresSectionProps> = ({ matches }) => {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  return (
    <Wrapper>
      <Container maxWidth='xl'>
        <Carousel
          activeSlideIndex={activeSlideIndex}
          onRequestChange={setActiveSlideIndex}
          disableNavIfAllVisible={true}
          hideNavIfAllVisible={true}
          containerProps={{
            style: {
              position: 'relative',
              padding: '0 3em',
              width: "100%",
              justifyContent: "space-between",
              userSelect: "none"
            }
          }}
          forwardBtnProps={{
            style: {
              position: 'absolute',
              right: 0,
              alignSelf: 'center',
              background: '#eeeeee',
              border: 'none',
              color: '#000000',
              cursor: 'pointer',
              fontSize: '20px',
              height: '100%',
              lineHeight: 1,
              textAlign: 'center',
              width: '2em',
            },
            children: <FontAwesomeIcon icon={faAngleRight} />,
          }}
          backwardBtnProps={{
            style: {
              position: 'absolute',
              left: 0,
              alignSelf: 'center',
              background: '#eeeeee',
              border: 'none',
              color: '#000000',
              cursor: 'pointer',
              fontSize: '20px',
              height: '100%',
              lineHeight: 1,
              textAlign: 'center',
              width: '2em',
            },
            children: <FontAwesomeIcon icon={faAngleLeft} />,
          }}
          speed={400}
          easing="linear"
        >
          {matches.map(item => (
            <LeagueItem key={uuid()}>
              <LeagueNameSection>
                <LeagueName variant='inherit'>
                  {item.league}
                </LeagueName>
              </LeagueNameSection>
              <LeagueMatchesSection>
                {item.matches.map(match => (
                  <Match key={uuid()}>
                    <MatchDate>
                      <Date variant='inherit'>
                        {dayjs(match.date).format('DD/MM/YYYY')}
                      </Date>
                    </MatchDate>
                    <MatchDetails>
                      <Grid container spacing={1}>
                        <Grid item xs={12}>
                          <Grid container spacing={1}>
                            <ClubCommonData item xs={4}>
                              <ClubLogo src={match.home.club.clubLogoUrl} />
                            </ClubCommonData>
                            <ClubName item xs>
                              <MatchText variant='inherit'>
                                {match.home.club.shortName}
                              </MatchText>
                            </ClubName>
                            <ClubCommonData item xs={2}>
                              <MatchText variant='inherit'>
                                {match.score.split(':')[0]}
                              </MatchText>
                            </ClubCommonData>
                          </Grid>
                        </Grid>
                        <Grid item xs={12}>
                          <Grid container spacing={1}>
                            <ClubCommonData item xs={4}>
                              <ClubLogo src={match.away.club.clubLogoUrl} />
                            </ClubCommonData>
                            <ClubName item xs>
                              <MatchText variant='inherit'>
                                {match.away.club.shortName}
                              </MatchText>
                            </ClubName>
                            <ClubCommonData item xs={2}>
                              <MatchText variant='inherit'>
                                {match.score.split(':')[1]}
                              </MatchText>
                            </ClubCommonData>
                          </Grid>
                        </Grid>
                      </Grid>
                    </MatchDetails>
                  </Match>
                ))}
              </LeagueMatchesSection>
            </LeagueItem>
          ))}
        </Carousel>
      </Container>
    </Wrapper>
  );
};

export default ScoresSection;