import React from 'react';
import { Box, TableCell, TableHead, TableRow, TableSortLabel } from '@mui/material';
import { v4 as uuid } from 'uuid';
import { IUsersTableHeadCell } from '../../../../../features/users/types';
import { Order } from '../../../../../features/types';


interface IUsersTableHeadProps {
  activeCell: IUsersTableHeadCell | null;
  onSort: (data: IUsersTableHeadCell) => void;
}

const cells: IUsersTableHeadCell[] = [
  {
    title: 'First Name', 
    isSortable: true,
    sortKey: 'firstName',
    order: Order.asc
  },
  {
    title: 'Last Name', 
    isSortable: true,
    sortKey: 'lastName',
    order: Order.asc
  },
  {
    title: 'Role', 
    isSortable: true,
    sortKey: 'role',
    order: Order.asc
  },
  {
    title: 'Club/Media', 
    isSortable: true,
    sortKey: 'organization',
    order: Order.asc
  },
  {
    title: 'Position', 
    isSortable: false
  },
  {
    title: 'Country', 
    isSortable: true,
    sortKey: 'location',
    order: Order.asc
  },
  {
    title: 'Registration Date', 
    isSortable: true,
    sortKey: 'createdAt',
    order: Order.asc
  },
  {
    title: '', 
    isSortable: false,
  }
];


const AuthorsTableHead: React.FC<IUsersTableHeadProps> = ({
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

export default AuthorsTableHead;