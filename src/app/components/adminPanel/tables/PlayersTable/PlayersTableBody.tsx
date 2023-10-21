import React from 'react';
import { useDispatch } from 'react-redux';
import { TableBody, TableCell, TableRow } from '@mui/material';
import { v4 as uuid } from 'uuid';
import dayjs from 'dayjs';
import { IPlayer } from '../../../../../features/players/types';
import { RowActionButtons, TableLink } from '../../ui/';
import { AppDispatch } from '../../../../../features/store';
import { deletePlayer, getPlayers } from '../../../../../features/players/asyncActions';
import { EssenseType } from '../../../../models/components';


interface IPlayersTableBodyProps {
  players: IPlayer[];
  page: number;
  itemsPerPage: number;
}


const PlayersTableBody: React.FC<IPlayersTableBodyProps> = ({ players, page, itemsPerPage }) => {
  const dispatch = useDispatch<AppDispatch>();

  const handleClubDelete = (id: string) => {
    dispatch(deletePlayer(id));
    dispatch(getPlayers({ page, itemsPerPage }));
  };

  return (
    <TableBody>
      {
        players.map(player => (
          <TableRow key={uuid()}>
            <TableCell>
              <TableLink url={`/players/${player._id}`} label={player.firstName} />
            </TableCell>
            <TableCell>
              <TableLink url={`/players/${player._id}`} label={player.lastName} />
            </TableCell>
            <TableCell>
              {
                player.club ? (
                  <TableLink url={`/clubs/${player.club._id}`} label={player.club.commonName} />
                ) : '-'
              }
            </TableCell>
            <TableCell>{player.number}</TableCell>
            <TableCell>{player.position}</TableCell>
            <TableCell>{player.country}</TableCell>
            <TableCell>{dayjs(player.birthDate).format('DD/MM/YYYY')}</TableCell>
            <TableCell>
              <RowActionButtons 
                id={player._id} 
                type={EssenseType.players}
                onDelete={() => handleClubDelete(player._id)} 
              />
            </TableCell>
          </TableRow>
        ))
      }
    </TableBody>
  );
};

export default PlayersTableBody;