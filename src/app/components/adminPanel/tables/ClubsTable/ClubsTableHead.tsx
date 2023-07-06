import React from 'react';
import { Box, TableCell, TableHead, TableRow, TableSortLabel } from '@mui/material';
import { v4 as uuid } from 'uuid';
import { IClubsTableHeadCell } from '../../../../../features/clubs/types';
import { Order } from '../../../../../features/types';


interface IClubsTableHeadProps {
  activeCell: IClubsTableHeadCell | null;
  onSort: (data: IClubsTableHeadCell) => void;
}

const cells: IClubsTableHeadCell[] = [
  {
    title: 'Name', 
    isSortable: false
  },
  {
    title: 'Country', 
    isSortable: true,
    sortKey: 'country',
    order: Order.asc
  },
  {
    title: 'Creation Date', 
    isSortable: true,
    sortKey: 'createdAt',
    order: Order.asc
  },
  {
    title: '', 
    isSortable: false
  },
];


const ClubsTableHead: React.FC<IClubsTableHeadProps> = ({
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

export default ClubsTableHead;