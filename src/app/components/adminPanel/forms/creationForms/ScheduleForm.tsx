import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Box, Button, styled } from '@mui/material';
import { AppDispatch } from '../../../../../features/store';
import { BackLink } from '../../ui/';
import { BackdropLoader } from '../../../ui/';
import { IMatch, IMatchweek, ISchedule } from '../../../../../features/schedules/types';
import { getAllCompetitions } from '../../../../../features/competitions/asyncActions';
import ScheduleContext from '../../../../context/scheduleContext';
import { MatchweekForm, ScheduleTitleForm, ScheduleMatchweekList } from './';
import { createSchedule, updateSchedule } from '../../../../../features/schedules/asyncActions';
import { checkScheduleData } from '../../../../utils/helpers';


interface IScheduleFormProps {
  scheduleToUpdate?: ISchedule
}

const initialState: ISchedule = {
  competition: '',
  season: '',
  fixture: []
};

const SubmitBtn = styled(Button)`
  margin-top: 1em;
  width: 12em;
  height: 4em;
  @media (max-width: 640px) {
    width: 100%;
  }
`;


const ScheduleForm: React.FC<IScheduleFormProps> = ({ scheduleToUpdate }) => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isSubmitBtnDisabled, setIsSubmitBtnDisabled] = useState<boolean>(true);
  const [schedule, setSchedule] = useState<ISchedule>(initialState);

  const isUpdatingMode = Boolean(scheduleToUpdate);

  const addScheduleTitle = (data: any) => {
    if(scheduleToUpdate) {
      setSchedule({
        ...schedule,
        season: data.season
      });
    } else {
      setSchedule({
        ...schedule,
        competition: data.competition,
        season: data.season
      });
    }
  };

  const addMatchweek = (mwData: IMatchweek) => {
    setSchedule({
      ...schedule,
      fixture: [
        ...schedule.fixture,
        mwData
      ]
    });
  };

  const addMatch = (mwId: string, match: IMatch) => {
    setSchedule({
      ...schedule,
      fixture: schedule
        .fixture
        .map(mw => mw.id === mwId ? 
          ({ ...mw, games: [ ...mw.games, match ] }) : 
          mw
        )
    });
  };

  const deleteMatchweek = (mwId: string) => {
    setSchedule({
      ...schedule,
      fixture: schedule.fixture.filter(mw => mw.id !== mwId)
    });
  };

  const deleteMatch = (mwId: string, matchId: string) => {
    setSchedule({
      ...schedule,
      fixture: schedule
        .fixture
        .map(mw => mw.id === mwId ? 
          ({ ...mw, games: mw.games.filter(game => game.id !== matchId) }) : 
          mw
        )
    });
  };

  const createNewSchedule = async () => {
    setIsLoading(true);
    if(scheduleToUpdate) {
      await dispatch(updateSchedule(schedule));
    } else {
      await dispatch(createSchedule(schedule));
    }
    setSchedule(initialState);
    setIsLoading(false);
    navigate('/admin/schedules');
  };

  useEffect(() => {
    dispatch(getAllCompetitions());
    if(scheduleToUpdate) {
      setSchedule(scheduleToUpdate);
    }
  }, []);

  useEffect(() => {
    const isDisabled = checkScheduleData(schedule);
    setIsSubmitBtnDisabled(!isDisabled);
  }, [schedule]);

  return (
    <Box data-testid='scheduleForm'>
      <BackLink link='/admin/schedules' title='Go back' />
      <ScheduleContext.Provider 
        value={{ schedule, isUpdatingMode, addScheduleTitle, addMatchweek, addMatch, deleteMatchweek, deleteMatch }}
      >
        <ScheduleTitleForm />
        <MatchweekForm />
        <ScheduleMatchweekList />
      </ScheduleContext.Provider>
      <SubmitBtn 
        variant='contained'
        color='primary' 
        disabled={isSubmitBtnDisabled}
        onClick={createNewSchedule}
      >
        {isUpdatingMode ? 'Update' : 'Create'}
      </SubmitBtn>
      <BackdropLoader open={isLoading} />
    </Box>
  );
};

export default ScheduleForm;