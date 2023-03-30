import React, { useContext, useEffect, useState} from 'react';
import { Box, Button, Dialog, Grid, styled, Tooltip } from '@mui/material';
import { useForm } from 'react-hook-form';
import { v4 as uuid } from 'uuid';
import SelectField from '../../../ui/SelectField';
import ControlledDatePicker from '../../../ui/ControlledDatePicker';
import TextInput from '../../../ui/TextInput';
import ScheduleContext, { ScheduleContextType } from '../../../../context/scheduleContext';
import { useDispatch, useSelector } from 'react-redux';
import { selectAllCompetitions } from '../../../../../features/competitions/selectors';
import { AppDispatch } from '../../../../../features/store';
import { getAllCompetitions } from '../../../../../features/competitions/asyncActions';


interface IMatchFormProps {
  mwId: string,
}

interface IFormData {
  matchweekName: string,
  home: string,
  away: string,
  date: string,
  location: string,
  score: string
}

const Form = styled(Box)`
  padding: 20px;
`;


const MatchForm: React.FC<IMatchFormProps> = ({ mwId }) => {
  const dispatch = useDispatch<AppDispatch>();
  const { register, handleSubmit, control, formState: { errors }, getValues, watch, setValue } = useForm<IFormData>();
  const { schedule, addMatch } = useContext(ScheduleContext) as ScheduleContextType;

  const competitions = useSelector(selectAllCompetitions);
  const competition = competitions.find(comp => comp._id === schedule.competition);
  const clubs = competition?.clubs
  const clubSelectOptions = clubs!.map(club => ({ label: club.commonName, value: club._id }));

  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleFormOpen = () => {
    setIsOpen(true);
  };

  const handleFormClose = () => {
    setIsOpen(false);
  };

  const handleMatchCreate = (data: any) => {
    addMatch(mwId, {
      ...data,
      id: uuid(),
      home: clubs!.find(club => club._id === data.home),
      away: clubs!.find(club => club._id === data.away),
    });
  };

  useEffect(() => {
    dispatch(getAllCompetitions());
  }, []);

  useEffect(() => {
    const homeClub = clubs?.find(club => club._id === getValues().home)
    setValue('location', homeClub?.stadium!)
  }, [watch('home')]);

  return (
    <>
      <Tooltip title='Create a new match' placement='top' arrow>
        <Button 
          type='button' 
          variant='outlined'
          disabled={clubs!.length < 1}
          onClick={handleFormOpen}
        >
          Add Match
        </Button>
      </Tooltip>
      <Dialog open={isOpen} onClose={handleFormClose}>
        <Form component='form' onSubmit={handleSubmit(handleMatchCreate)}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <SelectField
                name='home'
                label='Home'
                control={control}
                register={register}
                registerOptions={{ required: 'Home team is required!' }}
                options={clubSelectOptions}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <SelectField
                name='away'
                label='Away'
                control={control}
                register={register}
                registerOptions={{ required: 'Away team is required!' }}
                options={clubSelectOptions}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <ControlledDatePicker 
                name='date'
                label='Date'
                control={control}
                register={register}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextInput 
                name='score' 
                label='Score'
                type='text' 
                defaultValue='0:0'
                register={register}
                error={errors.score}
              />
            </Grid>
            <Grid item xs={12}>
              <TextInput 
                name='location' 
                label='Stadium'
                type='text' 
                register={register}
                registerOptions={{ required: 'Location is required!' }}
                error={errors.location}
              />
            </Grid>
            <Grid item xs={12}>
              <Button type='submit' variant='outlined'>Add</Button>
            </Grid>
          </Grid>
        </Form>
      </Dialog>
    </>
  );
};

export default MatchForm;