import React from 'react';
import { Box, TableCell, TableHead, TableRow, TableSortLabel } from '@mui/material';
import { v4 as uuid } from 'uuid';
import { ISchedulesTableHeadCell, Order } from '../../../../../features/schedules/types';


const cells: ISchedulesTableHeadCell[] = [
  {
    title: 'Name', 
    isSortable: false
  },
  {
    title: 'Type', 
    isSortable: true,
    sortKey: 'type',
    order: Order.asc
  },
  {
    title: 'Country', 
    isSortable: true,
    sortKey: 'country',
    order: Order.asc
  },
  {
    title: 'Teams Number', 
    isSortable: true,
    sortKey: 'teamsNumber',
    order: Order.asc
  },
  {
    title: 'Season', 
    isSortable: true,
    sortKey: 'season',
    order: Order.asc
  },
  {
    title: 'Created At', 
    isSortable: true,
    sortKey: 'createdAt',
    order: Order.asc
  },
  {
    title: '', 
    isSortable: false
  },
];


interface ISchedulesTableHeadProps {
  activeCell: ISchedulesTableHeadCell | null,
  onSort: (data: ISchedulesTableHeadCell) => void
}


const SchedulesTableHead: React.FC<ISchedulesTableHeadProps> = ({
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

export default SchedulesTableHead;