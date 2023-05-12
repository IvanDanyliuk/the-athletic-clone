import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Button, Container, Grid, Typography, styled } from '@mui/material';
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
    padding: 1em 4em .5em 4em;
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
  background: #ffffff;
  &:hover {
    background: #ffffff;
  }
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
        partialVisbile={false}
        containerClass='carousel-container'
        removeArrowOnDeviceType={['tablet', 'mobile']}
        dotListClass='custom-dot-list-style'
        itemClass='carousel-item-padding-40-px'
      >
        {matches.map(item => (
          <Grid key={uuid()} container spacing={1}>
            <Grid item xs='auto'>
              <LeagueName variant='inherit'>
                {item.league}
              </LeagueName>
            </Grid>
            <Grid item xs sx={{ display: 'flex' }}>
              <Grid container spacing={2} sx={{ width: 'fix-content' }}>
                {item.matches.map(match => (
                  <Grid item key={uuid()} xs>
                    <Grid container spacing={0.7}>
                      <Grid item xs={12}>
                        <Date variant='inherit'>
                          {dayjs(match.date).format('DD/MM/YYYY')}
                        </Date>
                      </Grid>
                      <Grid item xs={12}>
                        <Grid container spacing={1}>
                          <Grid item xs={12}>
                            <Grid container spacing={1}>
                              <ClubCommonData item xs={4}>
                                <ClubLogo src={match.home.clubLogoUrl} />
                              </ClubCommonData>
                              <ClubName item xs>
                                <MatchText variant='inherit'>
                                  {match.home.shortName}
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
                                <ClubLogo src={match.away.clubLogoUrl} />
                              </ClubCommonData>
                              <ClubName item xs>
                                <MatchText variant='inherit'>
                                  {match.away.shortName}
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
                      </Grid>
                    </Grid>
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
        ))}
      </ScoreCarousel>
    </Container>
  );
};

export default ScoresSection;