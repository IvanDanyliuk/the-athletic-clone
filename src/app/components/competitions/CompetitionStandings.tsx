import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuid } from 'uuid';
import { AppDispatch } from '../../../features/store';
import { getSchedule } from '../../../features/schedules/asyncActions';
import { getCurrentSeasonValue } from '../../utils/helpers';
import { clearSchedule } from '../../../features/schedules/reducers';
import { selectCompetition } from '../../../features/competitions/selectors';
import { IClub } from '../../../features/clubs/types';
import { selectSchedule } from '../../../features/schedules/selectors';
import { Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, styled } from '@mui/material';


interface StandingItem {
  club: IClub;
  playedMatches: number;
  points: number,
  goalsFor: number,
  goalsAgainst: number,
  goalDifference: number,
  wins: number,
  loses: number,
  draws: number
}

const Cell = styled(TableCell)`
  min-width: 10em;
`;

const ClubLogo = styled('img')`
  height: 1.5em;
`;


const CompetitionTable: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();

  const currentSeason = getCurrentSeasonValue();
  const league = useSelector(selectCompetition);
  const schedule = useSelector(selectSchedule);

  const [standings, setStandings] = useState<StandingItem[]>([]);

  useEffect(() => {
    if(schedule) {
      const clubs = schedule.competition.clubs.map((club: IClub) => ({ club, points: 0, goals: 0 }));
      const matches = schedule.fixture.map(mw => mw.games.map(club => ([club.home, club.away])))
      const flattedMatches = matches.flat(2);
      const standing = clubs.map((club: any) => {
        const participants = flattedMatches.filter(item => item.club._id === club.club._id);
        const points = participants.reduce((acc, cur) => acc + cur.points, 0);
        const goalsFor = participants.reduce((acc, cur) => acc + cur.goalsFor, 0);
        const goalsAgainst = participants.reduce((acc, cur) => acc + cur.goalsAgainst, 0);
        const goalDifference = goalsFor - goalsAgainst;
        const wins = flattedMatches.filter(item => club.club._id === item.club._id && item.final === 'W');
        const loses = flattedMatches.filter(item => club.club._id === item.club._id && item.final === 'L');
        const draws = flattedMatches.filter(item => club.club._id === item.club._id && item.final === 'D');
        return { 
          club: club.club, 
          playedMatches: participants.length, 
          points, 
          goalsFor, 
          goalsAgainst, 
          goalDifference, 
          wins: wins.length, 
          loses: loses.length, 
          draws: draws.length 
        };
      }).sort((acc: StandingItem, cur: StandingItem) => cur.points - acc.points);
      setStandings(standing);
    }
  }, [schedule]);

  useEffect(() => {
    dispatch(getSchedule({ season: currentSeason, leagueId: league?._id! }));
    return () => { dispatch(clearSchedule()) }
  }, []);

  return (
    <TableContainer component={Paper}>
      <Table stickyHeader>
        <TableHead>
          <TableRow>
            <Cell>Team</Cell>
            <Cell>GP</Cell>
            <Cell>W</Cell>
            <Cell>L</Cell>
            <Cell>D</Cell>
            <Cell>GF</Cell>
            <Cell>GA</Cell>
            <Cell>GD</Cell>
            <Cell>PTS</Cell>
            <Cell>PTS</Cell>
          </TableRow>
        </TableHead>
        <TableBody>
          {standings.map(item => (
            <TableRow key={uuid()}>
              <Cell>
                <Grid container spacing={5} alignItems='center'>
                  <Grid item xs={1} justifyContent='center'>
                    <ClubLogo src={item.club.clubLogoUrl} alt={item.club.shortName} />
                  </Grid>
                  <Grid item xs>
                    {item.club.commonName}
                  </Grid>
                </Grid>
              </Cell>
              <Cell>{item.playedMatches}</Cell>
              <Cell>{item.wins}</Cell>
              <Cell>{item.loses}</Cell>
              <Cell>{item.draws}</Cell>
              <Cell>{item.goalsFor}</Cell>
              <Cell>{item.goalsAgainst}</Cell>
              <Cell>{item.goalDifference}</Cell>
              <Cell>{item.points}</Cell>
              <Cell>PTS</Cell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default CompetitionTable;