import React, { useEffect, useContext } from 'react';
import { useSelector } from 'react-redux';
import { Box, Button, Grid, styled } from '@mui/material';
import { useForm } from 'react-hook-form';
import { selectAllCompetitions } from '../../../../../features/competitions/selectors';
import { TextInput, SelectField } from '../../../ui/';
import ScheduleContext, { ScheduleContextType } from '../../../../context/scheduleContext';


interface IScheduleTitle {
  competition: string;
  season: string;
}

const Form = styled(Box)`
  margin-top: 20px;
`;

const FormRow = styled(Grid)`
  margin-bottom: 10px;
`;

const BtnWrapper = styled(Grid)`
  display: flex;
  align-items: flex-end;
`;

const SubmitBtn = styled(Button)`
  width: 100%;
  height: 4em;
`;


const ScheduleTitleForm: React.FC = () => {
  const { register, handleSubmit, control, formState: { errors }, reset } = useForm<IScheduleTitle>();
  const { schedule, isUpdatingMode, addScheduleTitle } = useContext(ScheduleContext) as ScheduleContextType;

  const competitionsData = useSelector(selectAllCompetitions);
  const competitions = competitionsData
    .map(competition => ({ label: competition.fullName, value: competition._id }));

  useEffect(() => {
    if(isUpdatingMode) {
      reset({
        season: schedule.season
      });
    }
  }, [schedule.competition, schedule.season]);

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
            disabled={schedule.fixture.length > 0}
            placeholder='aaaaaaaaaaaa'
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
        <BtnWrapper item xs={12} md={2}>
          <SubmitBtn 
            type='submit'
            variant='contained'
            color='success'
          >
            {isUpdatingMode ? 'Update' : 'Next'}
          </SubmitBtn>
        </BtnWrapper>
      </FormRow>
    </Form>
  );
};

export default ScheduleTitleForm;