import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { selectAllPlayers } from '../../../../../features/players/selectors';
import { PlayerForm } from '../creationForms';


const NewPlayerForm: React.FC = () => {
  const { id } = useParams();
  const players = useSelector(selectAllPlayers);
  const playerToUpdate = players.find(player => player._id === id);
  
  return (
    <PlayerForm playerToUpdate={playerToUpdate} />
  );
};

export default NewPlayerForm;