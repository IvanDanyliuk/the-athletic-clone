import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Box, Button } from '@mui/material';
import { v4 as uuid } from 'uuid';
import { AppDispatch } from '../../../../../features/store';
import BackLink from '../../ui/BackLink';
import BackdropLoader from '../../../ui/BackdropLoader';
import { IMatch, IMatchweek, ISchedule } from '../../../../../features/schedules/types';
import { IClub } from '../../../../../features/clubs/types';
import { getAllCompetitions } from '../../../../../features/competitions/asyncActions';
import { ScheduleModel } from '../../../../models/components';
import ScheduleContext from '../../../../context/scheduleContext';
import ScheduleTitleForm from './ScheduleTitleForm';
import MatchweekForm from './MatchweekForm';
import ScheduleMatchweekList from './ScheduleMatchweekList';


interface IScheduleFormProps {
  scheduleToUpdate?: ISchedule
}


const ScheduleForm: React.FC<IScheduleFormProps> = ({ scheduleToUpdate }) => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [schedule, setSchedule] = useState<ScheduleModel>({
    competition: '',
    season: '',
    fixture: []
  });

  const addScheduleTitle = (data: any) => {
    setSchedule({
      ...schedule,
      competition: data.competition,
      season: data.season
    });
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

  const addMatch = (mwId: string, match: any) => {
    const matchweek = schedule.fixture.find(mw => mw.id === mwId);
    const updatedFixture = schedule.fixture.map(mw => mw.id === mwId ? mw.games.push(match) : mw);
    console.log(updatedFixture)
    // setSchedule({
    //   ...schedule,
    //   fixture: updatedFixture
    // })
  };

  const deleteMatchweek = (mwId: string) => {

  };

  const deleteMatch = (matchId: string) => {

  };

  const createNewSchedule = async () => {
    // if(scheduleTitle) {
    //   setIsLoading(true);
    //   await dispatch(createSchedule({
    //     ...scheduleTitle,
    //     fixture: matchweeks
    //   }));
    //   setIsLoading(false);
    // }
  };
  
  

  useEffect(() => {
    dispatch(getAllCompetitions());
    // if(scheduleToUpdate) {
    //   reset({
        
    //   });
    // }
  }, []);

  useEffect(() => {
    console.log('Schedule Context', schedule)
  }, [schedule]);

  return (
    <Box>
      <BackLink link='/admin/schedules' title='Go back' />
      <ScheduleContext.Provider value={{ schedule, addScheduleTitle, addMatchweek, addMatch, deleteMatchweek, deleteMatch }}>
        <ScheduleTitleForm />
        <MatchweekForm />
        <ScheduleMatchweekList />
      </ScheduleContext.Provider>
      <Button color='primary' onClick={createNewSchedule}>Create</Button>
      {/* <MatchweekForm 
        open={Boolean(scheduleTitle)}
        matchweeks={matchweeks}
        onSetMatchweek={handleAddMatchweek}
      />
       */}
      <BackdropLoader open={isLoading} />
    </Box>
  );
};

export default ScheduleForm;