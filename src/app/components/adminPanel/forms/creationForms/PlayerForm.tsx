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


const Form = styled(Box)`
  margin-top: 20px;
`;

const FormRow = styled(Grid)`
  margin-bottom: 10px;
`;

interface IPlayerFormProps {
  playerToUpdate?: IPlayer
}

const position = [
  { label: PlayerPosition.goalkeeper, value: PlayerPosition.goalkeeper },
  { label: PlayerPosition.defender, value: PlayerPosition.defender },
  { label: PlayerPosition.midfielder, value: PlayerPosition.midfielder },
  { label: PlayerPosition.attack, value: PlayerPosition.attack },
];


const PlayerForm: React.FC<IPlayerFormProps> = ({ playerToUpdate }) => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const { register, handleSubmit, control, formState: { errors }, reset } = useForm<PlayerModel>();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const countries = getCountries().map(country => ({ label: country, value: country }));
  const clubData = useSelector(selectClubsByCountry);
  const clubs = clubData.map(club => ({ label: club.commonName, value: club.commonName }))

  const handleFormSubmit = async (data: any) => {
    if(playerToUpdate) {
      setIsLoading(true);
      await dispatch(updatePlayer({
        _id: playerToUpdate._id,
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
    dispatch(getClubsByCountry('International'));
    if(playerToUpdate) {
      reset({
        firstName: playerToUpdate.firstName,
        lastName: playerToUpdate.lastName,
        country: playerToUpdate.country,
        club: playerToUpdate.club,
        number: playerToUpdate.number,
        position: playerToUpdate.position,
        birthDate: playerToUpdate.birthDate,
        photoUrl: playerToUpdate.photoUrl
      });
    }
  }, []);

  return (
    <Box>
      <BackLink link='/admin/players' title='Go back' />
      <Form component='form' onSubmit={handleSubmit(handleFormSubmit)}>
        <FormRow container spacing={3}>
          <Grid item xs={12} md={6}>
            <TextInput 
              name='firstName' 
              label='First Name'
              type='text' 
              register={register}
              error={errors.firstName}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextInput 
              name='lastName' 
              label='Last Name'
              type='text' 
              register={register}
              registerOptions={{ required: 'Last Name is required!' }}
              error={errors.lastName}
            />
          </Grid>
        </FormRow>
        <FormRow container spacing={3}>
          <Grid item xs={12} md={6}>
            <ControlledDatePicker 
              name='birthDate'
              label='Birth Date'
              control={control}
              register={register}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <SelectField 
              name='country'
              label='Country' 
              control={control}
              register={register}
              registerOptions={{ required: 'Country is required!' }} 
              error={errors.country}
              options={countries}
            />
          </Grid>
        </FormRow>
        <FormRow container spacing={3}>
          <Grid item xs={12} md={6}>
            <TextInput 
              name='photoUrl' 
              label='Image'
              type='file'
              register={register}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <SelectField 
              name='position'
              label='Position' 
              control={control}
              register={register}
              registerOptions={{ required: 'Position is required!' }} 
              error={errors.country}
              options={position}
            />
          </Grid>
        </FormRow>
        <FormRow container spacing={3}>
          <Grid item xs={12} md={6}>
            <TextInput 
              name='number' 
              label='Number'
              type='number' 
              register={register}
              inputProps={{
                min: 1, max: 99
              }}
              error={errors.number}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <SelectField 
              name='club'
              label='Club' 
              control={control}
              register={register}
              error={errors.club}
              options={clubs}
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

export default PlayerForm;