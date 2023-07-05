import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { 
  Avatar,
  Box, Divider, Grid, List, ListItem, Table, TableBody, 
  TableCell, TableHead, TableRow, Typography, styled 
} from '@mui/material';
import dayjs from 'dayjs';
import { v4 as uuid } from 'uuid';
import { AppDispatch } from '../../../features/store';
import { selectClub } from '../../../features/clubs/selectors';
import { getLeagueMaterials } from '../../../features/materials/asyncActions';
import { selectMaterials, selectMaterialsStatus } from '../../../features/materials/selectors';
import { BackdropLoader, ClubLabel, DataNotFoundMessage, SeeMoreLink } from '../ui';
import { ContentSectionMaterials } from '../homepage';
import { getAllCompetitions } from '../../../features/competitions/asyncActions';
import { selectAllCompetitions } from '../../../features/competitions/selectors';
import { getSchedule } from '../../../features/schedules/asyncActions';
import { countStandingTableData, getCurrentSeasonValue, getRandomElements, setNearestItems } from '../../utils/helpers';
import { selectSchedule } from '../../../features/schedules/selectors';
import { IMatch, IMatchweek } from '../../../features/schedules/types';
import { StandingItem } from '../../../features/competitions/types';
import { getPlayers } from '../../../features/players/asyncActions';
import { selectAllPlayers } from '../../../features/players/selectors';
import { IPlayer } from '../../../features/players/types';
import { LOADING_STATUS } from '../../constants/common';


const Container = styled(Box)`
  padding-top: 1em;
  width: 100%;
  height: 100%;
`;

const DetailsSections = styled(Grid)`
  margin-top: 3em;
  @media (max-width: 640px) {
    margin-top: 0;
  }
`;

const SectionHeader = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const SectionTitle = styled(Typography)`
  font-size: 1em;
`;

const VerticalDivider = styled(Divider)`
  margin: 0 1em;
`;

const HorizontalDivider = styled(Divider)`
  margin: 1em 0;
`;

const DataList = styled(List)`
  margin-top: .5em;
`;

const DataListItem = styled(ListItem)`
  padding: 0;
  display: flex;
  flex-direction: column;
`;

const RowWrapper = styled(Box)`
  width: 100%;
  height: 2em;
  display: flex;
  align-items: center;
`;

const MatchStatus = styled(Typography)`
  font-size: .9em;
  font-weight: 600;
`;

const MatchDate = styled(Typography)`
  font-size: .7em;
  color: #4e4e4e;
`;

const PlayerName = styled(Typography)`
  font-weight: 600;
`;

const PlayerNumber = styled(Typography)`
  font-size: .8em;
  color: #505050;
`;

const PlayerLink = styled(Link)`
  width: 100%;
  text-decoration: none;
  color: inherit;
`;

const Cell = styled(TableCell)`
  @media (max-width: 640px) {
    font-size: .8em;
    p {
      font-size: 1em;
    }
  }
`;


const ClubHome: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();

  const club = useSelector(selectClub);
  const leagues = useSelector(selectAllCompetitions);
  const players = useSelector(selectAllPlayers);
  const clubLeague = leagues.find(item => item.country !== 'International' && 
    item.clubs.find(clubItem => clubItem._id === club?._id)
  );
  const schedule = useSelector(selectSchedule);
  const materials = useSelector(selectMaterials);
  const materialsStatus = useSelector(selectMaterialsStatus);
  const currentSeason = getCurrentSeasonValue();

  const [nearestGames, setNearestGames] = useState<IMatch[]>([]);
  const [standings, setStandings] = useState<StandingItem[]>([]);
  const [roster, setRoster] = useState<IPlayer[]>([]);

  useEffect(() => {
    if(schedule) {
      const currentDate = new Date().getTime();
      const currentMatchweek = schedule.fixture.reduce((prev, curr) => {
        const a = Math.abs(new Date(curr.basicDate).getTime() - currentDate);
        const b = Math.abs(new Date(prev.basicDate).getTime() - currentDate);
        return a - b < 0 ? curr : prev;
      });

      const matchweeks = setNearestItems(schedule.fixture, currentMatchweek._id!, 5);
      const games = matchweeks
        .map((mw: IMatchweek) => mw.games)
        .flat()
        .filter((match: IMatch) => match.home.club._id === club?._id || match.away.club._id === club?._id);
      setNearestGames(games);

      const standingData = countStandingTableData(schedule);
      const currentTeamPosition = standingData.find((item: StandingItem) => item.club._id! === club?._id!);
      const standing = setNearestItems(standingData, currentTeamPosition._id, 8);
      setStandings(standing);
    }
    if(players) {
      const randomPlayers = getRandomElements(players, 5);
      setRoster(randomPlayers);
    }
  }, [club, schedule]);

  useEffect(() => {
    if(clubLeague) {
      dispatch(getSchedule({ 
        season: currentSeason, 
        leagueId: clubLeague?._id 
      }));
    }
  }, [clubLeague, currentSeason, dispatch]);

  useEffect(() => {
    dispatch(getLeagueMaterials({ value: club?.commonName!, type: ['article', 'note'], materialsNum: 5 }));
    dispatch(getAllCompetitions());
    dispatch(getPlayers({ filterData: { club: club?._id! } }));
  }, [dispatch, club]);

  return (
    <Container>
      {materialsStatus === LOADING_STATUS ? (
        <BackdropLoader open={true} />
      ) : materials.length === 0 ? (
        <DataNotFoundMessage message='Cannot find materials' />
      ) : (
        <ContentSectionMaterials materials={materials!} />
      )}
      <DetailsSections container spacing={3}>
        <Grid item xs={12} md={4}>
          <SectionHeader>
            <SectionTitle variant='h2_custom'>Schedule</SectionTitle>
            <SeeMoreLink 
              url={`/clubs/${club?._id}/scores-and-schedules`} 
              label='Full Schedule' 
            />
          </SectionHeader>
          <DataList>
            {nearestGames.map((match, i) => (
              <DataListItem key={uuid()}>
                <Grid container>
                  <Grid item xs={7}>
                    <RowWrapper>
                      <ClubLabel 
                        clubId={match.home.club._id}
                        logo={match.home.club.clubLogoUrl} 
                        name={match.home.club.commonName} 
                        altText={match.home.club.shortName} 
                      />
                    </RowWrapper>
                    <RowWrapper>
                      <ClubLabel 
                        clubId={match.away.club._id}
                        logo={match.away.club.clubLogoUrl} 
                        name={match.away.club.commonName} 
                        altText={match.away.club.shortName} 
                      />
                    </RowWrapper>
                  </Grid>
                  <Grid item xs>
                    <RowWrapper>
                      <Typography>{match.home.goalsFor}</Typography>
                    </RowWrapper>
                    <RowWrapper>
                      <Typography>{match.away.goalsFor}</Typography>
                    </RowWrapper>
                  </Grid>
                  <VerticalDivider orientation='vertical' flexItem />
                  <Grid item xs={3}>
                    <RowWrapper>
                      {match.score !== '-:-' && <MatchStatus>FT</MatchStatus>}
                    </RowWrapper>
                    <RowWrapper>
                      <MatchDate>
                        {dayjs(match.date).format('DD/MM/YYYY')}
                      </MatchDate>
                    </RowWrapper>
                  </Grid>
                </Grid>
                {i !== nearestGames.length - 1 && (
                  <HorizontalDivider orientation='horizontal' flexItem />
                )}
              </DataListItem>
            ))}
          </DataList>
        </Grid>
        <VerticalDivider orientation='vertical' flexItem />
        <Grid item xs={12} md>
          <SectionHeader>
            <SectionTitle variant='h2_custom'>{clubLeague?.fullName}</SectionTitle>
            <SeeMoreLink 
              url={`/competitions/${clubLeague?._id}/scores-and-schedules`} 
              label='Full Standings' 
            />
          </SectionHeader>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Team</TableCell>
                <TableCell>GP</TableCell>
                <TableCell>GD</TableCell>
                <TableCell>PTS</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {standings.map(item => (
                <TableRow key={uuid()}>
                  <Cell>
                    <ClubLabel 
                      clubId={item.club._id}
                      logo={item.club.clubLogoUrl} 
                      name={item.club.commonName} 
                      altText={item.club.shortName} 
                    />
                  </Cell>
                  <Cell>{item.playedMatches}</Cell>
                  <Cell>{item.goalDifference}</Cell>
                  <Cell>{item.points}</Cell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Grid>
        <VerticalDivider orientation='vertical' flexItem />
        <Grid item xs={12} md>
          <SectionHeader>
            <SectionTitle variant='h2_custom'>Team Leaders</SectionTitle>
            <SeeMoreLink 
              url={`/clubs/${club?._id}/roster`} 
              label='Full Squad' 
            />
          </SectionHeader>
          <DataList>
            {roster.map((player, i) => (
              <DataListItem key={uuid()}>
                <PlayerLink to={`/players/${player._id}`}>
                  <Grid container>
                    <Grid item xs={10}>
                      <PlayerName>{`${player.firstName} ${player.lastName}`}</PlayerName>
                      <PlayerNumber>{`#${player.number}, ${player.position}`}</PlayerNumber>
                    </Grid>
                    <Grid item xs={2} display='flex' justifyContent='flex-end'>
                      <Avatar src={player.photoUrl} />
                    </Grid>
                  </Grid>
                </PlayerLink>
                {i !== roster.length - 1 && (
                  <HorizontalDivider orientation='horizontal' flexItem />
                )}
              </DataListItem>
            ))}
          </DataList>
        </Grid>
      </DetailsSections>
    </Container>
  );
};

export default ClubHome;