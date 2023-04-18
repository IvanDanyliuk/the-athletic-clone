import React from 'react';
import { Box, TableCell, TableHead, TableRow, TableSortLabel } from '@mui/material';
import { v4 as uuid } from 'uuid';
import { IContentTableHeadCell, Order } from '../../../../../features/content/types';


const cells: IContentTableHeadCell[] = [
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
    title: 'image', 
    isSortable: false,
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

interface IContentTableHeadProps {
  activeCell: IContentTableHeadCell | null,
  onSort: (data: IContentTableHeadCell) => void
}


const ContentTableHead: React.FC<IContentTableHeadProps> = ({
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

export default ContentTableHead;