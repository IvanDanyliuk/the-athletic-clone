import React, { useState, useEffect } from 'react';
import { Box, TableCell, TableHead, TableRow, TableSortLabel } from '@mui/material';
import { v4 as uuid } from 'uuid';


enum Order {
  asc = 'asc',
  desc = 'desc'
}

interface ITableHeadCell {
  title: string,
  isSortable: boolean,
  sortKey?: string,
  order?: Order
}

const cells: ITableHeadCell[] = [
  {
    title: 'Material ID', 
    isSortable: false
  },
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
];


const MaterialsTableHead: React.FC = () => {
  const [activeCell, setActiveCell] = useState<ITableHeadCell | null>(null);

  const handleDataSort = (data: ITableHeadCell) => {
    if(!activeCell || activeCell.sortKey !== data.sortKey) {
      setActiveCell({
        ...data,
        order: Order.desc
      });
    }
    if(activeCell?.sortKey === data.sortKey && activeCell?.order === Order.desc) {
      setActiveCell({
        ...data,
        order: Order.asc
      });
    }
    if(activeCell?.sortKey === data.sortKey && activeCell?.order === Order.asc) {
      setActiveCell({
        ...data,
        order: Order.desc
      });
    }
  };

  useEffect(() => {
    //Place dispatching the async action for sorting materials here
    console.log(activeCell)
  }, [activeCell]);

  return (
    <TableHead>
      <TableRow>
        {cells.map(cell => (
          <TableCell key={uuid()}>
            {cell.isSortable ? (
              <TableSortLabel 
                active={activeCell?.sortKey === cell.sortKey}
                direction={activeCell?.sortKey === cell.sortKey ? activeCell?.order : cell.order} 
                onClick={() => handleDataSort(cell)}
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