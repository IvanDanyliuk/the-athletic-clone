import React, { useContext, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Box, Button, Grid, styled } from '@mui/material';
import { useForm } from 'react-hook-form';
import { selectAllCompetitions } from '../../../../../features/competitions/selectors';
import SelectField from '../../../ui/SelectField';
import { IClub } from '../../../../../features/clubs/types';
import TextInput from '../../../ui/TextInput';
import ScheduleContext, { ScheduleContextType } from '../../../../context/scheduleContext';


interface IScheduleTitle {
  competition: string,
  season: string
}


const Form = styled(Box)`
  margin-top: 20px;
`;

const FormRow = styled(Grid)`
  margin-bottom: 10px;
`;

const ScheduleTitleForm: React.FC = () => {

  const { register, handleSubmit, control, formState: { errors }, watch, getValues } = useForm<IScheduleTitle>();

  const { addScheduleTitle } = useContext(ScheduleContext) as ScheduleContextType;

  const competitionsData = useSelector(selectAllCompetitions);
  const competitions = competitionsData.map(competition => ({ label: competition.fullName, value: competition._id }));
  const [clubs, setClubs] = useState<IClub[]>([]);


  useEffect(() => {
    const league = competitionsData
      .find(competition => competition._id === getValues().competition);
    league ? 
      setClubs(league!.clubs!) : 
      setClubs([]);
  }, [watch('competition')]);

  return (
    <Form component='form' onSubmit={handleSubmit(addScheduleTitle)}>
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
  )
}

export default ScheduleTitleForm