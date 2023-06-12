import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { selectAllUsers } from '../../../../../features/users/selectors';
import { AuthorForm } from '../creationForms';
import { BackLink } from '../../ui';


const UpdateUserForm: React.FC = () => {
  const { id } = useParams();
  const users = useSelector(selectAllUsers);
  const userToUpdate = users.find(user => user._id === id);

  return (
    <>
      <BackLink link='/admin/users' title='Go back' />
      <AuthorForm userToUpdate={userToUpdate} />
    </>
  );
};

export default UpdateUserForm;