import React from 'react';
import { useDispatch } from 'react-redux';
import { TableBody, TableCell, TableRow } from '@mui/material';
import { v4 as uuid } from 'uuid';
import dayjs from 'dayjs';
import { IPlayer } from '../../../../../features/players/types';
import RowActionButtons, { EssenseType } from '../../ui/RowActionButtons';
import { AppDispatch } from '../../../../../features/store';
import { deletePlayer } from '../../../../../features/players/asyncActions';


interface IPlayersTableBodyProps {
  players: IPlayer[],
  page: number,
  itemsPerPage: number
}


const PlayersTableBody: React.FC<IPlayersTableBodyProps> = ({ players, page, itemsPerPage }) => {
  const dispatch = useDispatch<AppDispatch>();

  const handleClubDelete = (id: string) => {
    dispatch(deletePlayer({ id, page, itemsPerPage }));
  };

  return (
    <TableBody>
      {
        players.map(({ _id, firstName, lastName, club, number, position, country, birthDate }) => (
          <TableRow key={uuid()}>
            <TableCell>{firstName}</TableCell>
            <TableCell>{lastName}</TableCell>
            <TableCell>{club.commonName}</TableCell>
            <TableCell>{number}</TableCell>
            <TableCell>{position}</TableCell>
            <TableCell>{country}</TableCell>
            <TableCell>{dayjs(birthDate).format('DD/MM/YYYY')}</TableCell>
            <TableCell>
              <RowActionButtons 
                id={_id} 
                type={EssenseType.players}
                onDelete={() => handleClubDelete(_id)} 
              />
            </TableCell>
          </TableRow>
        ))
      }
    </TableBody>
  );
};

export default PlayersTableBody;