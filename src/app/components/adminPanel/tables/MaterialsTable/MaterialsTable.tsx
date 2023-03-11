import React from 'react';
import { Table, TableBody, TableCell, TableRow } from '@mui/material';
import { v4 as uuid } from 'uuid';
import { MaterialModel } from '../../../../models/components';
import MaterialsTableHead from './MaterialsTableHead';


interface IMaterialsTableProps {
  materials: MaterialModel[],
  onEdit: () => void,
  onDelete: () => void
}

const MaterialsTable: React.FC<IMaterialsTableProps> = ({ materials, onEdit, onDelete }) => {

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
    </Table>
  );
};

export default MaterialsTable;