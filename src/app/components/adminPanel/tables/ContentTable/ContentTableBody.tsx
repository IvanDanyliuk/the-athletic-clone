import React from 'react';
import { useDispatch } from 'react-redux';
import { Button, TableBody, TableCell, TableRow } from '@mui/material';
import dayjs from 'dayjs';
import { v4 as uuid } from 'uuid';
import { IMaterial } from '../../../../../features/materials/types';
import { AppDispatch } from '../../../../../features/store';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';


interface IContentTableBodyProps {
  materials: IMaterial[],
  page: number,
  itemsPerPage: number
}

const ContentTableBody: React.FC<IContentTableBodyProps> = ({ materials, page, itemsPerPage }) => {
  const dispatch = useDispatch<AppDispatch>();

  const handleMaterialDelete = (id: string) => {
    
  };

  return (
    <TableBody>
      {
        materials.map(({ _id, title, image, labels, type, author, status, publicationDate }) => (
          <TableRow key={uuid()}>
            <TableCell>{title ? title : '-'}</TableCell>
            <TableCell>{image ? image : '-'}</TableCell>
            <TableCell>{labels.length ? labels[0] : '-'}</TableCell>
            <TableCell>{type}</TableCell>
            <TableCell>{author.name}</TableCell>
            <TableCell>{status}</TableCell>
            <TableCell>{dayjs(publicationDate).subtract(1, 'day').format('DD/MM/YYYY')}</TableCell>
            <TableCell>
              <Button onClick={() => handleMaterialDelete(_id)}>
                <FontAwesomeIcon icon={faPlus} />
              </Button>
            </TableCell>
          </TableRow>
        ))
      }
    </TableBody>
  );
};

export default ContentTableBody;