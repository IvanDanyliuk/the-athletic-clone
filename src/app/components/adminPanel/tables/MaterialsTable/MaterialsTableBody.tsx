import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, TableBody, TableCell, TableRow, styled } from '@mui/material';
import { v4 as uuid } from 'uuid';
import { IMaterial } from '../../../../../features/materials/types';
import RowActionButtons, { EssenseType } from '../../ui/RowActionButtons';
import { AppDispatch } from '../../../../../features/store';
import { deleteMaterial } from '../../../../../features/materials/asyncActions';
import dayjs from 'dayjs';
import { selectContentModeStatus, selectMaterialsToContent } from '../../../../../features/content/selectors';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faXmark } from '@fortawesome/free-solid-svg-icons';
import { addMaterialToContent } from '../../../../../features/content/reducers';


interface IMaterialsTableBodyProps {
  materials: IMaterial[],
  page: number,
  itemsPerPage: number
}

const AddBtn = styled(Button)`

`;


const MaterialTableBody: React.FC<IMaterialsTableBodyProps> = ({ materials, page, itemsPerPage }) => {
  const dispatch = useDispatch<AppDispatch>();

  const isContentEditMode = useSelector(selectContentModeStatus);
  const selectedMaterials = useSelector(selectMaterialsToContent);

  const handleMaterialAddToContent = (id: string) => {
    dispatch(addMaterialToContent(id));
  };

  const handleMaterialDelete = (id: string) => {
    dispatch(deleteMaterial({ id, page, itemsPerPage }));
  };

  return (
    <TableBody>
      {
        materials.map(({ _id, title, labels, type, author, status, publicationDate }) => (
          <TableRow key={uuid()} sx={{ background: selectedMaterials.includes(_id) ? '#eeeeee' : '#ffffff' }}>
            <TableCell>{title ? title : '-'}</TableCell>
            <TableCell>{labels.length ? labels[0] : '-'}</TableCell>
            <TableCell>{type}</TableCell>
            <TableCell>{author.name}</TableCell>
            <TableCell>{status}</TableCell>
            <TableCell>{dayjs(publicationDate).subtract(1, 'day').format('DD/MM/YYYY')}</TableCell>
            <TableCell>
              {
                isContentEditMode ? (
                  <AddBtn
                    data-testid='addBtn' 
                    onClick={() => handleMaterialAddToContent(_id)}>
                    <FontAwesomeIcon icon={selectedMaterials.includes(_id) ? faXmark : faPlus} />
                  </AddBtn>
                ) : (
                  <RowActionButtons 
                    id={_id} 
                    type={EssenseType.materials}
                    onDelete={() => handleMaterialDelete(_id)} 
                  />
                )
              }
            </TableCell>
          </TableRow>
        ))
      }
    </TableBody>
  );
};

export default MaterialTableBody;