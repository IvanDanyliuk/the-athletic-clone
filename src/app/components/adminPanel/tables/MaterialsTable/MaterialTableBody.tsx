import React from 'react';
import { TableBody, TableCell, TableRow } from '@mui/material';
import { v4 as uuid } from 'uuid';
import { IMaterialResponse } from '../../../../../features/materials/types';
import RowActionButtons from './RowActionButtons';


interface IMaterialsTableBodyProps {
  materials: IMaterialResponse[]
}


const MaterialTableBody: React.FC<IMaterialsTableBodyProps> = ({ materials }) => {
  const handleMaterialEdit = (id: string) => {
    console.log('Edit', id);
  };

  const handleMaterialDelete = (id: string) => {
    console.log('Edit', id);
  };

  return (
    <TableBody>
      {
        materials.map(({ _id, title, labels, type, author, status, publicationDate }) => (
          <TableRow key={uuid()}>
            <TableCell>ID</TableCell>
            <TableCell>{title}</TableCell>
            <TableCell>{labels.length ? labels[0] : '-'}</TableCell>
            <TableCell>{type}</TableCell>
            <TableCell>{author.name}</TableCell>
            <TableCell>{status}</TableCell>
            <TableCell>{publicationDate}</TableCell>
            <TableCell>
              <RowActionButtons 
                onEdit={() => handleMaterialEdit(_id)} 
                onDelete={() => handleMaterialDelete(_id)} 
              />
            </TableCell>
          </TableRow>
        ))
      }
    </TableBody>
  );
};

export default MaterialTableBody;