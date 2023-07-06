import React from 'react';
import { Box, TableCell, TableHead, TableRow, TableSortLabel } from '@mui/material';
import { v4 as uuid } from 'uuid';
import { ICompetitionsTableHeadCell } from '../../../../../features/competitions/types';
import { Order } from '../../../../../features/types';


const cells: ICompetitionsTableHeadCell[] = [
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
    title: 'Type', 
    isSortable: true,
    sortKey: 'type',
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


interface ICompetitionsTableHeadProps {
  activeCell: ICompetitionsTableHeadCell | null,
  onSort: (data: ICompetitionsTableHeadCell) => void
}


const CompetitionsTableHead: React.FC<ICompetitionsTableHeadProps> = ({
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

export default CompetitionsTableHead;