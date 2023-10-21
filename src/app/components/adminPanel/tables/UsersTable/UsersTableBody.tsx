import React from 'react';
import { useDispatch } from 'react-redux';
import { TableBody, TableCell, TableRow } from '@mui/material';
import { v4 as uuid } from 'uuid';
import dayjs from 'dayjs';
import { IUser } from '../../../../../features/users/types';
import { RowActionButtons } from '../../ui/';
import { AppDispatch } from '../../../../../features/store';
import { deleteUser, getUsers } from '../../../../../features/users/asyncActions';
import { EssenseType } from '../../../../models/components';


interface IUserTableBodyProps {
  users: IUser[];
  page: number;
  itemsPerPage: number;
}


const UserTableBody: React.FC<IUserTableBodyProps> = ({ users, page, itemsPerPage }) => {
  const dispatch = useDispatch<AppDispatch>();

  const handleUserDelete = (id: string) => {
    dispatch(deleteUser(id));
    dispatch(getUsers({ page, itemsPerPage }))
  };

  return (
    <TableBody>
      {
        users.map(({ _id, firstName, lastName, location, organization, position, role, createdAt }) => (
          <TableRow key={uuid()}>
            <TableCell>{firstName ? firstName : '-'}</TableCell>
            <TableCell>{lastName ? lastName : '-'}</TableCell>
            <TableCell>{role}</TableCell>
            <TableCell>{organization}</TableCell>
            <TableCell>{position}</TableCell>
            <TableCell>{location}</TableCell>
            <TableCell>{dayjs(createdAt).format('DD/MM/YYYY')}</TableCell>
            <TableCell>
              <RowActionButtons 
                id={_id!} 
                type={EssenseType.users}
                onDelete={() => handleUserDelete(_id!)} 
              />
            </TableCell>
          </TableRow>
        ))
      }
    </TableBody>
  );
};

export default UserTableBody;