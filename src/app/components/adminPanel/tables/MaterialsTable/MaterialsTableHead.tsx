import React from 'react';
import { Box, TableCell, TableHead, TableRow, TableSortLabel } from '@mui/material';
import { v4 as uuid } from 'uuid';
import { IMaterialsTableHeadCell } from '../../../../../features/materials/types';
import { Order } from '../../../../../features/types';


const cells: IMaterialsTableHeadCell[] = [
  {
    title: 'Title', 
    isSortable: false
  },
  {
    title: 'Subject', 
    isSortable: true,
    sortKey: 'title',
    order: Order.asc
  },
  {
    title: 'Type', 
    isSortable: true,
    sortKey: 'type',
    order: Order.asc
  },
  {
    title: 'Author', 
    isSortable: true,
    sortKey: 'author',
    order: Order.asc
  },
  {
    title: 'Status', 
    isSortable: true,
    sortKey: 'status',
    order: Order.asc
  },
  {
    title: 'Publication Date', 
    isSortable: true,
    sortKey: 'publicationDate',
    order: Order.asc
  },
  {
    title: '', 
    isSortable: false,
    sortKey: 'actions',
    order: Order.asc
  }
];


interface IMaterialsTableHeadProps {
  activeCell: IMaterialsTableHeadCell | null,
  onSort: (data: IMaterialsTableHeadCell) => void
}


const MaterialsTableHead: React.FC<IMaterialsTableHeadProps> = ({
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

export default MaterialsTableHead;