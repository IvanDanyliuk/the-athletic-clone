import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box } from '@mui/material';

import { AppDispatch } from '../../../features/store';
import { selectClub } from '../../../features/clubs/selectors';
import { selectAllPlayers } from '../../../features/players/selectors';
import { getPlayers } from '../../../features/players/asyncActions';
import PlayersTable from './PlayersTable';
import { IPlayer } from '../../../features/players/types';


interface IRoster {
  goalkeepers: IPlayer[];
  defenders: IPlayer[];
  midfielders: IPlayer[];
  attack: IPlayer[];
}

const ClubRoster: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();

  const club = useSelector(selectClub);
  const players = useSelector(selectAllPlayers);

  const [roster, setRoster] = useState<IRoster>({
    goalkeepers: [],
    defenders: [],
    midfielders: [],
    attack: []
  });

  useEffect(() => {
    if(players.length === 0) {
      dispatch(getPlayers({ filterData: { club: club?.commonName } }));
    }
  }, [dispatch, club]);

  useEffect(() => {
    const goalkeepers = players.filter(player => player.position === 'GK');
    const defenders = players.filter(player => player.position === 'D');
    const midfielders = players.filter(player => player.position === 'M');
    const attack = players.filter(player => player.position === 'A');
    setRoster({ goalkeepers, defenders, midfielders, attack });
  }, [players]);

  return (
    <Box>
      <PlayersTable title='Goalkeepers' players={roster.goalkeepers} />
      <PlayersTable title='Defenders' players={roster.defenders} />
      <PlayersTable title='Midfielders' players={roster.midfielders} />
      <PlayersTable title='Attack' players={roster.attack} />
    </Box>
  );
};

export default ClubRoster;