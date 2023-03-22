import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { selectAllClubs } from '../../../../../features/clubs/selectors';
import { ClubForm } from '../creationForms';


const NewClubForm: React.FC = () => {
  const { id } = useParams();
  const clubs = useSelector(selectAllClubs);
  const clubToUpdate = clubs.find(club => club._id === id);

  return (
    <ClubForm clubToUpdate={clubToUpdate} />
  );
};

export default NewClubForm;