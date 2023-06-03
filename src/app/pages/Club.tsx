import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { AppDispatch } from '../../features/store';
import { selectClub } from '../../features/clubs/selectors';
import { getClub } from '../../features/clubs/asyncActions';
import { clearClub } from '../../features/clubs/reducers';
import { BackdropLoader } from '../components/ui';


const Club: React.FC = () => {
  const { id } = useParams();
  const dispatch = useDispatch<AppDispatch>();

  const club = useSelector(selectClub);

  useEffect(() => {
    dispatch(getClub(id!));
    return () => { dispatch(clearClub()) };
  }, []);

  if(!club) {
    return <BackdropLoader open={true} />;
  }

  return (
    <div>{club?._id}</div>
  );
};

export default Club;