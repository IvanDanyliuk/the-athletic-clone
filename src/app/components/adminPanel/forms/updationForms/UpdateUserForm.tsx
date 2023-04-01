import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { selectAllUsers } from '../../../../../features/users/selectors';
import { AuthorForm } from '../creationForms';


const UpdateUserForm: React.FC = () => {
  const { id } = useParams();
  const users = useSelector(selectAllUsers);
  const userToUpdate = users.find(user => user._id === id);

  return (
    <AuthorForm userToUpdate={userToUpdate} />
  );
};

export default UpdateUserForm;