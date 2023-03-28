import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { Box, Button, Grid, List, ListItem, styled, Typography } from '@mui/material';
import { v4 as uuid } from 'uuid';
import { AppDispatch } from '../../../../../features/store';
import TextInput from '../../../ui/TextInput';
import BackLink from '../../ui/BackLink';
import SelectField from '../../../ui/SelectField';
import BackdropLoader from '../../../ui/BackdropLoader';
import { ISchedule } from '../../../../../features/schedules/types';
import MatchweekForm from './MatchweekForm';
import { IClub } from '../../../../../features/clubs/types';
import { selectAllCompetitions } from '../../../../../features/competitions/selectors';
import { getAllCompetitions } from '../../../../../features/competitions/asyncActions';
import MatchForm from './MatchForm';
import { createSchedule } from '../../../../../features/schedules/asyncActions';



const Form = styled(Box)`
  margin-top: 20px;
`;

const FormRow = styled(Grid)`
  margin-bottom: 10px;
`;

interface IScheduleFormProps {
  scheduleToUpdate?: ISchedule
}

interface IScheduleTitle {
  competition: string,
  season: string
}

interface IMatchweek {
  matchweekName: string,
  games: {
    home: IClub,
    away: IClub,
    date: string,
    location: string,
    score: string
  }[]
}


const ScheduleForm: React.FC<IScheduleFormProps> = ({ scheduleToUpdate }) => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const { register, handleSubmit, control, formState: { errors }, watch, getValues } = useForm<IScheduleTitle>();

  const competitionsData = useSelector(selectAllCompetitions);
  const competitions = competitionsData.map(competition => ({ label: competition.fullName, value: competition._id }));
  const [clubs, setClubs] = useState<IClub[]>([]);
  
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [scheduleTitle, setScheduleTitle] = useState<IScheduleTitle | null>(null);
  const [matchweeks, setMatchweeks] = useState<IMatchweek[]>([]);

  const handleFormSubmit = (data: any) => {
    setScheduleTitle(data);
  };

  const handleAddMatchweek = (mwData: any) => {
    setMatchweeks([
      ...matchweeks,
      mwData
    ]);
  };

  const handleAddMatch = (mwName: string, match: any) => {
    setMatchweeks([
      ...matchweeks.map(mw => mw.matchweekName === mwName ? 
        { ...mw, games: [ ...mw.games, match ] } : 
        mw)
    ])
  };

  const createNewSchedule = async () => {
    if(scheduleTitle) {
      setIsLoading(true);
      await dispatch(createSchedule({
        ...scheduleTitle,
        fixture: matchweeks
      }));
      setIsLoading(false);
    }
  };
  
  useEffect(() => {
    const league = competitionsData
      .find(competition => competition._id === getValues().competition);
    league ? 
      setClubs(league!.clubs!) : 
      setClubs([]);
  }, [watch('competition')]);

  useEffect(() => {
    dispatch(getAllCompetitions());
    // if(scheduleToUpdate) {
    //   reset({
        
    //   });
    // }
  }, []);

  return (
    <Box>
      <BackLink link='/admin/schedules' title='Go back' />
      <Form component='form' onSubmit={handleSubmit(handleFormSubmit)}>
        <FormRow container spacing={3}>
          <Grid item xs={12} md={5}>
            <SelectField 
              name='competition'
              label='Competition' 
              control={control}
              register={register}
              registerOptions={{ required: 'Competition is required!' }} 
              error={errors.competition}
              options={competitions}
            />
          </Grid>
          <Grid item xs={12} md={5}>
            <TextInput 
              name='season' 
              label='Season'
              type='text' 
              register={register}
              registerOptions={{ required: 'Season name is required!' }} 
              error={errors.season}
            />
          </Grid>
          <Grid item xs={12} md={2}>
            <Button 
              type='submit'
              variant='contained'
              color='success'
            >
              Next
            </Button>
          </Grid>
        </FormRow>
      </Form>
      <Button color='primary' onClick={createNewSchedule}>Create</Button>
      <MatchweekForm 
        open={Boolean(scheduleTitle)}
        matchweeks={matchweeks}
        onSetMatchweek={handleAddMatchweek}
      />
      <List>
        {matchweeks.map(mw => (
          <ListItem key={uuid()}>
            <Typography>{mw.matchweekName}</Typography>
            <MatchForm clubs={clubs} mwName={mw.matchweekName} setMatch={handleAddMatch} />
          </ListItem>
        ))}
      </List>
      <BackdropLoader open={isLoading} />
    </Box>
  );
};

export default ScheduleForm;