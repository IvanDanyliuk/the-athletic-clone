import React from 'react';
import { 
  Grid, Paper, Table, TableBody, TableCell, 
  TableContainer, TableHead, TableRow, styled 
} from '@mui/material';
import dayjs from 'dayjs';
import { v4 as uuid } from 'uuid';
import { IMatchweek } from '../../../features/schedules/types';


interface IMatchweekTable {
  matchweek: IMatchweek;
}

const Cell = styled(TableCell)`
  min-width: 10em;
`;

const ClubLogo = styled('img')`
  height: 1.5em;
`;


const MatchweekTable: React.FC<IMatchweekTable> = ({ matchweek }) => {
  return (
    <TableContainer component={Paper}>
      <Table stickyHeader>
        <TableHead>
          <TableRow>
            <TableCell>Home</TableCell>
            <TableCell>Away</TableCell>
            <TableCell>Score</TableCell>
            <TableCell>Date</TableCell>
            <TableCell>Location</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {matchweek.games.map(match => {
            const { home, away, score, date, location } = match;
            return (
              <TableRow key={uuid()}>
                <Cell>
                  <Grid container spacing={5} alignItems='center'>
                    <Grid item xs={1} justifyContent='center'>
                      <ClubLogo src={home.club.clubLogoUrl} alt={home.club.shortName} />
                    </Grid>
                    <Grid item xs>
                      {home.club.commonName}
                    </Grid>
                  </Grid>
                </Cell>
                <Cell>
                  <Grid container spacing={5} alignItems='center'>
                    <Grid item xs={1} justifyContent='center'>
                      <ClubLogo src={away.club.clubLogoUrl} alt={away.club.shortName} />
                    </Grid>
                    <Grid item xs>
                      {away.club.commonName}
                    </Grid>
                  </Grid>
                </Cell>
                <Cell>{score}</Cell>
                <Cell>{dayjs(date).format('DD/MM/YYYY')}</Cell>
                <Cell>{location}</Cell>
              </TableRow>
            )
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default MatchweekTable;