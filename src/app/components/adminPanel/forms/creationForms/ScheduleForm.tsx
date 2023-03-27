import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { Box, Button, Grid, styled } from '@mui/material';
import { AppDispatch } from '../../../../../features/store';
import { PlayerModel } from '../../../../models/components';
import TextInput from '../../../ui/TextInput';
import { uploadImage } from '../../../../services/uploadImage';
import BackLink from '../../ui/BackLink';
import SelectField from '../../../ui/SelectField';
import BackdropLoader from '../../../ui/BackdropLoader';
import { getCountries } from '../../../../services/countries';
import { createPlayer, updatePlayer } from '../../../../../features/players/asyncActions';
import { IPlayer, PlayerPosition } from '../../../../../features/players/types';
import { getClubsByCountry } from '../../../../../features/clubs/asyncActions';
import { selectClubsByCountry } from '../../../../../features/clubs/selectors';
import ControlledDatePicker from '../../../ui/ControlledDatePicker';
import { ICompetition } from '../../../../../features/competitions/types';
import { selectAllCompetitions } from '../../../../../features/competitions/selectors';
import { ISchedule } from '../../../../../features/schedules/types';
import { getCompetitions } from '../../../../../features/competitions/asyncActions';



const Form = styled(Box)`
  margin-top: 20px;
`;

const FormRow = styled(Grid)`
  margin-bottom: 10px;
`;

interface IScheduleFormProps {
  scheduleToUpdate?: ISchedule
}


const ScheduleForm: React.FC<IScheduleFormProps> = ({ scheduleToUpdate }) => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const { register, handleSubmit, control, formState: { errors }, reset } = useForm<ICompetition>();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const competitionsData = useSelector(selectAllCompetitions);
  const competitions = competitionsData.map(competition => ({ label: competition.fullName, value: competition._id }))

  const handleFormSubmit = async (data: any) => {
    if(scheduleToUpdate) {
      setIsLoading(true);
      await dispatch(updatePlayer({
        _id: scheduleToUpdate._id,
        ...data
      }));
      setIsLoading(false);
      navigate('/admin/players');
    } else {
      setIsLoading(true);
      const photoUrl = data.photoUrl.length > 0 ? await uploadImage(data.photoUrl[0]) : '';
      await dispatch(createPlayer({
        ...data,
        photoUrl,
      }));
      setIsLoading(false);
    }
    reset();
  };

  useEffect(() => {
    // dispatch(getAllCompetitions());
    if(scheduleToUpdate) {
      reset({
        
      });
    }
  }, []);

  return (
    <Box>
      <BackLink link='/admin/players' title='Go back' />
      <Form component='form' onSubmit={handleSubmit(handleFormSubmit)}>
        <FormRow container spacing={3}>
          <Grid item xs={12} md={6}>
            <SelectField 
              name='competition'
              label='Competition' 
              control={control}
              register={register}
              registerOptions={{ required: 'Competition is required!' }} 
              error={errors.country}
              options={competitions}
            />
          </Grid>
        </FormRow>
        <Button 
          type='submit'
          variant='contained'
        >
          Submit
        </Button>
      </Form>
      <BackdropLoader open={isLoading} />
    </Box>
  );
};

export default ScheduleForm;