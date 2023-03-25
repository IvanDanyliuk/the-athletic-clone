import React from 'react';
import { Box, TableCell, TableHead, TableRow, TableSortLabel } from '@mui/material';
import { v4 as uuid } from 'uuid';
import { IPlayersTableHeadCell, Order } from '../../../../../features/players/types';


const cells: IPlayersTableHeadCell[] = [
  {
    title: 'First Name', 
    isSortable: false
  },
  {
    title: 'Last Name', 
    isSortable: false
  },
  {
    title: 'Club', 
    isSortable: true,
    sortKey: 'club',
    order: Order.asc
  },
  {
    title: 'Number', 
    isSortable: false
  },
  {
    title: 'Position', 
    isSortable: true,
    sortKey: 'position',
    order: Order.asc
  },
  {
    title: 'Country', 
    isSortable: true,
    sortKey: 'country',
    order: Order.asc
  },
  {
    title: 'Birth Date', 
    isSortable: true,
    sortKey: 'birthDate',
    order: Order.asc
  },
  {
    title: '', 
    isSortable: false
  },
];


interface IPlayersTableHeadProps {
  activeCell: IPlayersTableHeadCell | null,
  onSort: (data: IPlayersTableHeadCell) => void
}


const PlayersTableHead: React.FC<IPlayersTableHeadProps> = ({
  activeCell, 
  onSort
}) => {
  return (
    <TableHead>
      <TableRow>
        {cells.map(cell => (
          <TableCell key={uuid()}>
            {cell.isSortable ? (
              <TableSortLabel 
                active={activeCell?.sortKey === cell.sortKey}
                direction={activeCell?.sortKey === cell.sortKey ? activeCell?.order : cell.order} 
                onClick={() => onSort(cell)}
              >
                {cell.title}
              </TableSortLabel>
            ) : (
              <Box component='span'>{cell.title}</Box>
            )}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
};

export default PlayersTableHead;