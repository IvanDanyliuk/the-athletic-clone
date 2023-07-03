import React from 'react';
import { 
  Paper, Table, TableBody, TableCell, 
  TableContainer, TableHead, TableRow, styled 
} from '@mui/material';
import dayjs from 'dayjs';
import { v4 as uuid } from 'uuid';
import { IMatchweek } from '../../../features/schedules/types';
import { ClubLabel } from '../ui/';


interface IMatchweekTable {
  matchweek: IMatchweek;
}

const Cell = styled(TableCell)`
  min-width: 10em;
  @media (max-width: 640px) {
    font-size: .8em;
  }
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
                  <ClubLabel 
                    clubId={home.club._id}
                    logo={home.club.clubLogoUrl} 
                    name={home.club.commonName} 
                    altText={home.club.shortName} 
                  />
                </Cell>
                <Cell>
                  <ClubLabel 
                    clubId={away.club._id}
                    logo={away.club.clubLogoUrl} 
                    name={away.club.commonName} 
                    altText={away.club.shortName} 
                  />
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