import { Box, Tabs, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '../../../features/store';
import { getCurrentSeasonValue } from '../../utils/helpers';
import { getSchedule } from '../../../features/schedules/asyncActions';
import { selectCompetition } from '../../../features/competitions/selectors';
import { selectSchedule, selectSchedulesStatus } from '../../../features/schedules/selectors';
import BackdropLoader from '../ui/BackdropLoader';
import DataNotFoundMessage from '../ui/DataNotFoundMessage';
import { IMatch, IMatchweek } from '../../../features/schedules/types';
import MatchweekPicker from './MatchweekPicker';


const CompetitionScores: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();

  const currentSeason = getCurrentSeasonValue();
  const league = useSelector(selectCompetition);
  const scheduleStatus = useSelector(selectSchedulesStatus);
  const activeSchedule = useSelector(selectSchedule);

  const [currentMatchweek, setCurrentMatchweek] = useState<IMatchweek | null>(null);

  const handleCurrentMatchweekChange = (currentMatchweek: IMatchweek) => {
    setCurrentMatchweek(currentMatchweek);
  };

  useEffect(() => {
    if(activeSchedule) {
      const currentDate = new Date().getTime();
      const mw = activeSchedule.fixture.reduce((prev, curr) => {
        const a = Math.abs(new Date(curr.basicDate).getTime() - currentDate);
        const b = Math.abs(new Date(prev.basicDate).getTime() - currentDate);
        return a - b < 0 ? curr : prev;
      });
      setCurrentMatchweek(mw);
    }
  }, [activeSchedule]);

  useEffect(() => {
    dispatch(getSchedule({ season: currentSeason, leagueId: league?._id! }));
  }, []);

  if(!league && !activeSchedule) {
    return scheduleStatus === 'loading' ? 
      <BackdropLoader open={true} /> : 
      <DataNotFoundMessage message='Cannot find schedule' />;
  }

  return (
    <Box>
      <Box>
        <Typography>{currentMatchweek?.matchweekName}</Typography>
        {currentMatchweek && (
          <MatchweekPicker 
            matchweeks={activeSchedule!.fixture!} 
            setMatchweek={handleCurrentMatchweekChange} 
          />
        )}
      </Box>
      {currentMatchweek && (
        <Box>{currentMatchweek?.matchweekName!}</Box>
      )}
    </Box>
  );
};

export default CompetitionScores;