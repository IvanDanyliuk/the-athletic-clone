import React, { useContext } from 'react';
import { Box, Button, Collapse, Grid, styled } from '@mui/material';
import { useForm } from 'react-hook-form';
import { v4 as uuid } from 'uuid';
import ScheduleContext, { ScheduleContextType } from '../../../../context/scheduleContext';
import { ControlledDatePicker, TextInput } from '../../../ui/';


interface ITitle {
  matchweekName: string;
  basicDate: string;
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


const MatchweekForm: React.FC = () => {
  const { register, handleSubmit, control, formState: { errors }, reset } = useForm<ITitle>();
  const { schedule, addMatchweek } = useContext(ScheduleContext) as ScheduleContextType;

  const handleMatchweekTitle = (data: any) => {
    addMatchweek({
      ...data,
      id: uuid(),
      games: []
    });
    reset();
  };

  return (
    <Collapse in={Boolean(schedule.competition)}>
      <Form component='form' onSubmit={handleSubmit(handleMatchweekTitle)}>
        <FormRow container spacing={3}>
          <Grid item xs={12} md={5}>
            <TextInput 
              name='matchweekName' 
              label='Matchweek Title'
              type='text' 
              register={register}
              registerOptions={{ required: 'Matchweek name is required!' }} 
              error={errors.matchweekName}
            />
          </Grid>
          <Grid item xs={12} md={5}>
            <ControlledDatePicker
              name='basicDate'
              label='Matchweek Basic Date'
              control={control}
              register={register}
            />
          </Grid>
          <BtnWrapper item xs={12} md={2}>
            <SubmitBtn 
              data-testid='submitMwFormBtn'
              type='submit'
              variant='contained'
              color='success'
            >
              Add
            </SubmitBtn>
          </BtnWrapper>
        </FormRow>
      </Form>
    </Collapse>
  );
};

export default MatchweekForm;