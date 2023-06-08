import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Avatar, Paper, Table, TableBody, TableCell, 
  TableHead, TableRow, Typography, styled 
} from '@mui/material';
import dayjs from 'dayjs';
import { v4 as uuid } from 'uuid';
import { IPlayer } from '../../../features/players/types';


interface IPlayersTableProps {
  title: string;
  players: IPlayer[];
}

const Container = styled(Paper)`
  margin-top: 2em;
  padding: 1em;
  max-width: 100%;
  overflow: auto;
`;

const NameCell = styled(TableCell)`
  width: 30em;
`;

const CountryCell = styled(TableCell)`
  width: 20em;
`;

const PlayerLink = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #000000;
  p {
    margin-left: 1em;
    font-weight: 500;
  }
`;

const PlayersTable: React.FC<IPlayersTableProps> = ({ title, players }) => {
  return (
    <Container>
      <Typography variant='h2_custom'>{title}</Typography>
      <Table stickyHeader>
        <TableHead>
          <TableRow>
            <NameCell>Name</NameCell>
            <TableCell>POS</TableCell>
            <TableCell>DOB</TableCell>
            <TableCell>NUM</TableCell>
            <CountryCell>NAT</CountryCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {players.map(player => (
            <TableRow key={uuid()} hover>
              <NameCell>
                <PlayerLink to={`/players/${player._id}`}>
                  <Avatar src={player.photoUrl} />
                  <Typography>{`${player.firstName} ${player.lastName}`}</Typography>
                </PlayerLink>
              </NameCell>
              <TableCell>{player.position}</TableCell>
              <TableCell>{dayjs(player.birthDate).format('DD/MM/YYYY')}</TableCell>
              <TableCell>{player.number}</TableCell>
              <CountryCell>{player.country}</CountryCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Container>
  );
};

export default PlayersTable;