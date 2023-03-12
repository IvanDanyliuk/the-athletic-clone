import React, { useState } from 'react';
import { styled, Table, TableBody, TableCell, TablePagination, TableRow } from '@mui/material';
import { v4 as uuid } from 'uuid';
import { MaterialModel } from '../../../../models/components';
import MaterialsTableHead from './MaterialsTableHead';


interface IMaterialsTableProps {
  materials: MaterialModel[],
  page: number,
  pageCount: number,
  onPageChange: (e: unknown, newPage: number) => void,
  onEdit: () => void,
  onDelete: () => void
}


const MaterialsTablePagination = styled(TablePagination)`
  width: 100%;
`;


const MaterialsTable: React.FC<IMaterialsTableProps> = ({ 
  materials, 
  page, 
  pageCount, 
  onPageChange, 
  onEdit, 
  onDelete 
}) => {

  return (
    <Table>
      <MaterialsTableHead />
      <TableBody>
        {
          materials.map(({ title, labels, type, author, status, publicationDate }) => (
            <TableRow key={uuid()}>
              <TableCell>ID</TableCell>
              <TableCell>{title}</TableCell>
              <TableCell>{labels.length ? labels[0] : '-'}</TableCell>
              <TableCell>{type}</TableCell>
              <TableCell>{author.name}</TableCell>
              <TableCell>{status}</TableCell>
              <TableCell>{publicationDate}</TableCell>
            </TableRow>
          ))
        }
      </TableBody>
      <MaterialsTablePagination
        rowsPerPageOptions={[]}
        count={pageCount}
        rowsPerPage={10}
        page={page}
        onPageChange={onPageChange}
      />
    </Table>
  );
};

export default MaterialsTable;