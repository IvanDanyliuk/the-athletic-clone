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

const ClubLogo = styled('img')`
  height: 1.5em;
`;


const MatchweekTable: React.FC<IMatchweekTable> = ({ matchweek }) => {
  return (
    <TableContainer component={Paper}>
      <Table>
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
                <TableCell>
                  <Grid container spacing={5} alignItems='center'>
                    <Grid item xs={1} justifyContent='center'>
                      <ClubLogo src={home.clubLogoUrl} alt={home.shortName} />
                    </Grid>
                    <Grid item xs>
                      {home.commonName}
                    </Grid>
                  </Grid>
                </TableCell>
                <TableCell>
                  <Grid container spacing={5} alignItems='center'>
                    <Grid item xs={1} justifyContent='center'>
                      <ClubLogo src={away.clubLogoUrl} alt={away.shortName} />
                    </Grid>
                    <Grid item xs>
                      {away.commonName}
                    </Grid>
                  </Grid>
                </TableCell>
                <TableCell>{score}</TableCell>
                <TableCell>{dayjs(date).format('DD/MM/YYYY')}</TableCell>
                <TableCell>{location}</TableCell>
              </TableRow>
            )
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default MatchweekTable;