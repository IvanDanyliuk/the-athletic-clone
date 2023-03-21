import React from 'react';
import { useDispatch } from 'react-redux';
import { TableBody, TableCell, TableRow } from '@mui/material';
import { v4 as uuid } from 'uuid';
import { IClub } from '../../../../../features/clubs/types';
import RowActionButtons, { EssenseType } from '../../ui/RowActionButtons';
import { AppDispatch } from '../../../../../features/store';
import { deleteClub } from '../../../../../features/clubs/asyncActions';


interface IClubsTableBodyProps {
  clubs: IClub[],
  page: number,
  itemsPerPage: number
}


const ClubsTableBody: React.FC<IClubsTableBodyProps> = ({ clubs, page, itemsPerPage }) => {
  const dispatch = useDispatch<AppDispatch>();

  const handleClubDelete = (id: string) => {
    dispatch(deleteClub({ id, page, itemsPerPage }));
  };

  return (
    <TableBody>
      {
        clubs.map(({ _id, commonName, country, createdAt }) => (
          <TableRow key={uuid()}>
            <TableCell>{commonName}</TableCell>
            <TableCell>{country}</TableCell>
            <TableCell>{createdAt}</TableCell>
            <TableCell>
              <RowActionButtons 
                id={_id} 
                type={EssenseType.clubs}
                onDelete={() => handleClubDelete(_id)} 
              />
            </TableCell>
          </TableRow>
        ))
      }
    </TableBody>
  );
};

export default ClubsTableBody;