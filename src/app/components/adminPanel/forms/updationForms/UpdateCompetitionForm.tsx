import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { selectAllCompetitions } from '../../../../../features/competitions/selectors';
import { CompetitionForm } from '../creationForms';


const NewCompetitionForm: React.FC = () => {
  const { id } = useParams();
  const competitions = useSelector(selectAllCompetitions);
  const competitionToUpdate = competitions.find(competition => competition._id === id);
  
  return (
    <CompetitionForm 
      competitionToUpdate={competitionToUpdate} 
    />
  );
};

export default NewCompetitionForm;