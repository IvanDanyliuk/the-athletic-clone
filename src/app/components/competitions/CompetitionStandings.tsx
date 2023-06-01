import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { 
  Grid, Paper, Table, TableBody, TableCell, TableContainer, 
  TableHead, TableRow, styled 
} from '@mui/material';
import { v4 as uuid } from 'uuid';
import { AppDispatch } from '../../../features/store';
import { getSchedule } from '../../../features/schedules/asyncActions';
import { countStandingTableData, getCurrentSeasonValue } from '../../utils/helpers';
import { clearSchedule } from '../../../features/schedules/reducers';
import { selectCompetition } from '../../../features/competitions/selectors';
import { IClub } from '../../../features/clubs/types';
import { selectSchedule } from '../../../features/schedules/selectors';
import LatestGamesScores from './LatestGamesScores';


interface StandingItem {
  club: IClub;
  playedMatches: number;
  points: number,
  goalsFor: number,
  goalsAgainst: number,
  goalDifference: number,
  wins: number,
  loses: number,
  draws: number,
  latestGames: string[]
}

const CustomCell = styled(TableCell)`
  min-width: 10em;
`;

const ClubLogo = styled('img')`
  height: 1.5em;
`;


const CompetitionStandings: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();

  const currentSeason = getCurrentSeasonValue();
  const league = useSelector(selectCompetition);
  const schedule = useSelector(selectSchedule);

  const [standings, setStandings] = useState<StandingItem[]>([]);

  useEffect(() => {
    if(schedule) {
      const standing = countStandingTableData(schedule);
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
            <CustomCell>Team</CustomCell>
            <TableCell>GP</TableCell>
            <TableCell>W</TableCell>
            <TableCell>L</TableCell>
            <TableCell>D</TableCell>
            <TableCell>GF</TableCell>
            <TableCell>GA</TableCell>
            <TableCell>GD</TableCell>
            <TableCell>PTS</TableCell>
            <CustomCell></CustomCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {standings.map(item => (
            <TableRow key={uuid()}>
              <CustomCell>
                <Grid container spacing={5} alignItems='center'>
                  <Grid item xs={1} justifyContent='center'>
                    <ClubLogo src={item.club.clubLogoUrl} alt={item.club.shortName} />
                  </Grid>
                  <Grid item xs>
                    {item.club.commonName}
                  </Grid>
                </Grid>
              </CustomCell>
              <TableCell>{item.playedMatches}</TableCell>
              <TableCell>{item.wins}</TableCell>
              <TableCell>{item.loses}</TableCell>
              <TableCell>{item.draws}</TableCell>
              <TableCell>{item.goalsFor}</TableCell>
              <TableCell>{item.goalsAgainst}</TableCell>
              <TableCell>{item.goalDifference}</TableCell>
              <TableCell>{item.points}</TableCell>
              <CustomCell>
                <LatestGamesScores scores={item.latestGames} />
              </CustomCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default CompetitionStandings;