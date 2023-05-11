import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Avatar, Box, Button, Container, Grid, Typography, styled } from '@mui/material';
import dayjs from 'dayjs';
import { v4 as uuid } from 'uuid';
import { IMatch } from '../../../features/schedules/types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';


interface IScoresSectionProps {
  matches: {
    league: string,
    matches: IMatch[]
  }[]
}

const ScoreCarousel = styled(Carousel)`
  &.react-multi-carousel-list {
    padding: 1em 5em .5em 5em;
  }
`;

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

const ArrowBtn = styled(Button)`
  position: absolute;
  width: 2em;
  height: 100%;
`;

const ClubData = styled(Grid)`
  display: flex;
  align-items: center;
`;

const ClubLogo = styled('img')`
  height: 1.5em;
`;

const CustomRightArrow = ({ onClick, ...rest }: any) => {
  const {
    onMove,
    carouselState: { currentSlide, deviceType }
  } = rest;
  return (
    <ArrowBtn onClick={() => onClick()} sx={{ right: 0 }}>
      <FontAwesomeIcon icon={faAngleRight} />
    </ArrowBtn>
  );
};

const CustomLeftArrow = ({ onClick, ...rest }: any) => {
  const {
    onMove,
    carouselState: { currentSlide, deviceType }
  } = rest;
  // onMove means if dragging or swiping in progress.
  return (
    <ArrowBtn onClick={() => onClick()} sx={{ left: 0 }}>
      <FontAwesomeIcon icon={faAngleLeft} />
    </ArrowBtn>
  );
};


const ScoresSection: React.FC<IScoresSectionProps> = ({ matches }) => {
  const responsive = {
    seperLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: matches.length
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: matches.length
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: matches.length
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: matches.length
    }
  }
  return (
    <Container maxWidth='xl'>
      <ScoreCarousel
        swipeable={false}
        draggable={false}
        showDots={false}
        responsive={responsive}
        infinite={true}
        autoPlaySpeed={1000}
        keyBoardControl={true}
        customTransition='all .5'
        customLeftArrow={<CustomLeftArrow />}
        customRightArrow={<CustomRightArrow />}
        renderButtonGroupOutside={true}
        transitionDuration={500}
        containerClass='carousel-container'
        removeArrowOnDeviceType={['tablet', 'mobile']}
        dotListClass='custom-dot-list-style'
        itemClass='carousel-item-padding-40-px'
      >
        {matches.map(item => (
          <Grid key={uuid()} container>
            <Grid item xs={1} sx={{ margin: 0, padding: 0 }}>
              <LeagueName variant='inherit'>
                {item.league}
              </LeagueName>
            </Grid>
            <Grid item xs sx={{ display: 'flex' }}>
              {item.matches.map(match => (
                <Box key={uuid()} sx={{ marginRight: '1em' }}>
                  <Date variant='inherit'>
                    {dayjs(match.date).format('DD/MM/YYYY')}
                  </Date>
                  <Box >
                    <Grid container spacing={5} alignItems='center'>
                      <ClubData item xs={6}>
                        <ClubLogo src={match.home.clubLogoUrl} />
                        <MatchText variant='inherit'>
                          {match.home.shortName}
                        </MatchText>
                      </ClubData>
                      <Grid item xs={6}>
                        <MatchText variant='inherit'>
                          {match.score.split(':')[0]}
                        </MatchText>
                      </Grid>
                    </Grid>
                    <Grid container spacing={5} alignItems='center'>
                      <ClubData item xs={6}>
                        <ClubLogo src={match.away.clubLogoUrl} />
                        <MatchText variant='inherit'>
                          {match.away.shortName}
                        </MatchText>
                      </ClubData>
                      <Grid item xs={6}>
                        <MatchText variant='inherit'>
                          {match.score.split(':')[1]}
                        </MatchText>
                      </Grid>
                    </Grid>
                  </Box>
                </Box>
              ))}
            </Grid>
          </Grid>
        ))}
      </ScoreCarousel>
    </Container>
  );
};

export default ScoresSection;