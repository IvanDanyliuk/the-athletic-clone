import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { AppDispatch } from '../../features/store';
import { getCompetition } from '../../features/competitions/asyncActions';
import { clearCompetition } from '../../features/competitions/reducers';


const Competition: React.FC = () => {
  const { id } = useParams();
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getCompetition(id!));
    return () => { dispatch(clearCompetition()) };
  }, []);

  return (
    <div>Competition</div>
  );
};

export default Competition;