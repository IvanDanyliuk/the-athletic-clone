import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { AppDispatch } from '../../features/store';
import { getPlayer } from '../../features/players/asyncActions';
import { selectPlayer } from '../../features/players/selectors';
import { getClub } from '../../features/clubs/asyncActions';


const Player: React.FC = () => {
  const { id } = useParams();
  const dispatch = useDispatch<AppDispatch>();

  const player = useSelector(selectPlayer);

  useEffect(() => {
    if(id) {
      dispatch(getPlayer(id));
    }
  }, [id, dispatch]);

  // useEffect(() => {
  //   if(player) {
  //     dispatch(getClub(player.club))
  //   }
  // }, [player]);

  return (
    <div>{player?.lastName}</div>
  );
};

export default Player;