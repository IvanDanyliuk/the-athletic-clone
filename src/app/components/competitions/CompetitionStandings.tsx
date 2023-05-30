import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '../../../features/store';
import { getSchedule } from '../../../features/schedules/asyncActions';
import { getCurrentSeasonValue } from '../../utils/helpers';
import { clearSchedule } from '../../../features/schedules/reducers';
import { selectCompetition } from '../../../features/competitions/selectors';
import { IClub } from '../../../features/clubs/types';


interface StandingItem {
  club: IClub;
  points: number,
  goals: number
}


const CompetitionTable: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();

  const currentSeason = getCurrentSeasonValue();
  const league = useSelector(selectCompetition);

  const [standings, setStandings] = useState<StandingItem[]>([]);

  useEffect(() => {
    dispatch(getSchedule({ season: currentSeason, leagueId: league?._id! }));
    return () => { dispatch(clearSchedule()) }
  }, []);

  return (
    <div>CompetitionTable</div>
  );
};

export default CompetitionTable;