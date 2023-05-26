import { Box } from '@mui/material';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '../../../features/store';
import { getCurrentSeasonValue } from '../../utils/helpers';
import { getSchedule } from '../../../features/schedules/asyncActions';
import { selectCompetition } from '../../../features/competitions/selectors';
import { selectSchedulesStatus } from '../../../features/schedules/selectors';
import BackdropLoader from '../ui/BackdropLoader';
import DataNotFoundMessage from '../ui/DataNotFoundMessage';


const CompetitionScores: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();

  const currentSeason = getCurrentSeasonValue();
  const league = useSelector(selectCompetition);
  const scheduleStatus = useSelector(selectSchedulesStatus);

  useEffect(() => {
    dispatch(getSchedule({ season: currentSeason, leagueId: league?._id! }));
  }, []);

  if(!league) {
    return scheduleStatus === 'loading' ? 
      <BackdropLoader open={true} /> : 
      <DataNotFoundMessage message='Cannot find schedule' />;
  }

  return (
    <Box>
      <Box>Menu</Box>
      <Box>Schedule</Box>
    </Box>
  );
};

export default CompetitionScores;