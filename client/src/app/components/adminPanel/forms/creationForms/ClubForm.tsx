import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { Box, Button, Grid, styled } from '@mui/material';
import { AppDispatch } from '../../../../../features/store';
import { ClubModel } from '../../../../models/components';
import { BackLink } from '../../ui/';
import { BackdropLoader, SelectField, TextInput } from '../../../ui/';
import { getCountries } from '../../../../services/countries';
import { createClub, updateClub } from '../../../../../features/clubs/asyncActions';
import { IClub } from '../../../../../features/clubs/types';
import { convertFileToString } from '../../../../utils/helpers';


interface INewClubFormProps {
  clubToUpdate?: IClub;
}

const Form = styled(Box)`
  margin-top: 20px;
`;

const FormRow = styled(Grid)`
  margin-bottom: 10px;
`;


const NewClubForm: React.FC<INewClubFormProps> = ({ clubToUpdate }) => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const { register, handleSubmit, control, formState: { errors }, reset } = useForm<ClubModel>();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const countries = getCountries().map(country => ({ label: country, value: country }));

  const handleFormSubmit = async (data: any) => {
    if(clubToUpdate) {
      setIsLoading(true);

      const clubLogoUrl = data.clubLogoUrl.length > 0 ? 
        await convertFileToString(data.clubLogoUrl[0]) : 
        clubToUpdate.clubLogoUrl;

      await dispatch(updateClub({
        ...data,
        _id: clubToUpdate._id,
        clubLogoUrl
      }));

      setIsLoading(false);
      navigate('/admin/clubs');
    } else {
      setIsLoading(true);

      const clubLogoUrl = await convertFileToString(data.clubLogoUrl[0]);

      await dispatch(createClub({
        ...data,
        clubLogoUrl
      }));
      
      setIsLoading(false);
      navigate('/admin/clubs');
    }
    reset();
  };

  useEffect(() => {
    if(clubToUpdate) {
      reset({
        fullName: clubToUpdate.fullName,
        commonName: clubToUpdate.commonName,
        shortName: clubToUpdate.shortName,
        stadium: clubToUpdate.stadium,
        country: clubToUpdate.country
      })
    }
  }, []);

  return (
    <Box>
      <BackLink link='/admin/clubs' title='Go back' />
      <Form data-testid='clubForm' component='form' onSubmit={handleSubmit(handleFormSubmit)}>
        <FormRow container spacing={3}>
          <Grid item xs={12} md={6}>
            <TextInput 
              name='fullName' 
              label='Full Name'
              type='text' 
              register={register}
              registerOptions={{ required: 'Full Name is required!' }}
              error={errors.fullName}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextInput 
              name='commonName' 
              label='Common Name'
              type='text' 
              register={register}
              registerOptions={{ required: 'Common Name is required!' }}
              error={errors.commonName}
            />
          </Grid>
        </FormRow>
        <FormRow container spacing={3}>
          <Grid item xs={12} md={6}>
            <TextInput 
              name='shortName' 
              label='Short Name'
              type='text' 
              register={register}
              registerOptions={{ required: 'Short Name is required!' }}
              error={errors.shortName}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextInput 
              name='stadium' 
              label='Home Stadium'
              type='text' 
              register={register}
              error={errors.commonName}
            />
          </Grid>
        </FormRow>
        <FormRow container spacing={3}>
          <Grid item xs={12} md={6}>
            <TextInput 
              name='clubLogoUrl' 
              label='Image'
              type='file'
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

export default NewClubForm;