import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { Box, Button, Grid, styled } from '@mui/material';
import { AppDispatch } from '../../../../../features/store';
import { uploadImage } from '../../../../services/uploadImage';
import { BackLink } from '../../ui/';
import { BackdropLoader, MultiSelect, SelectField, TextInput } from '../../../ui/';
import { getCountries } from '../../../../services/countries';
import { CompetitionTypes, ICompetition } from '../../../../../features/competitions/types';
import { getClubsByCountry } from '../../../../../features/clubs/asyncActions';
import { selectClubsByCountry } from '../../../../../features/clubs/selectors';
import { createCompetition, updateCompetition } from '../../../../../features/competitions/asyncActions';
import { IClub } from '../../../../../features/clubs/types';


interface ICompetitionFormProps {
  competitionToUpdate?: ICompetition;
}

interface FormData {
  fullName: string;
  shortName: string;
  country: string;
  clubs: IClub[];
  logoUrl: string;
  type: string;
}

const Form = styled(Box)`
  margin-top: 20px;
`;

const FormRow = styled(Grid)`
  margin-bottom: 10px;
`;

const typeOptions = [
  { label: 'League', value: CompetitionTypes.league },
  { label: 'Cup', value: CompetitionTypes.cup }
];


const CompetitionForm: React.FC<ICompetitionFormProps> = ({ competitionToUpdate }) => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const { register, handleSubmit, control, formState: { errors }, reset, getValues, watch } = useForm<FormData>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [selectedClubs, setSelectedClubs] = useState<string[]>([]);

  const countries = getCountries().map(country => ({ label: country, value: country }));
  countries.unshift({ label: 'International', value: 'International' });
  const clubsData = useSelector(selectClubsByCountry);
  const clubs = clubsData.map(club => ({ label: club.commonName, value: club._id }));

  const handleClubSelect = (event: any) => {
    const {
      target: { value },
    } = event;
    setSelectedClubs(
      typeof value === 'string' ? value.split(',') : value
    );
  };

  const handleFormSubmit = async (data: any) => {
    if(competitionToUpdate) {
      setIsLoading(true);
      const logoUrl = data.logoUrl.length > 0 ? await uploadImage(data.logoUrl[0]) : competitionToUpdate.logoUrl;

      await dispatch(updateCompetition({
        ...data,
        _id: competitionToUpdate._id,
        logoUrl
      }));
      setIsLoading(false);
      navigate('/admin/competitions');
    } else {
      setIsLoading(true);
      const logoUrl = data.logoUrl.length > 0 ? await uploadImage(data.logoUrl[0]) : '';
      await dispatch(createCompetition({
        ...data,
        logoUrl,
        clubs: selectedClubs
      }));
      setSelectedClubs([]);
      setIsLoading(false);
      navigate('/admin/competitions');
    }
    reset();
  };

  useEffect(() => {
    if(competitionToUpdate) {
      console.log(competitionToUpdate)
      reset({
        fullName: competitionToUpdate.fullName,
        shortName: competitionToUpdate.shortName,
        country: competitionToUpdate.country,
        clubs: competitionToUpdate.clubs,
        type: competitionToUpdate.type
      });
    }
  }, []);

  useEffect(() => {
    if(getValues().country) {
      dispatch(getClubsByCountry(getValues().country));
    }
  }, [watch('country')]);

  return (
    <Box>
      <BackLink link='/admin/competitions' title='Go back' />
      <Form data-testid='competitionForm' component='form' onSubmit={handleSubmit(handleFormSubmit)}>
        <FormRow container spacing={3}>
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
          <Grid item xs={12} md={6}>
            <MultiSelect
              name='clubs'
              label='Clubs'
              data={clubs}
              checkedLabels={selectedClubs}
              disabled={!Boolean(getValues().country)}
              setLabels={handleClubSelect}
            />
          </Grid>
        </FormRow>
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
              name='shortName' 
              label='Short Name'
              type='text' 
              register={register}
              registerOptions={{ required: 'Short Name is required!' }}
              error={errors.shortName}
            />
          </Grid>
        </FormRow>
        <FormRow container spacing={3}>
          <Grid item xs={12} md={6}>
            <SelectField 
              name='type'
              label='Type' 
              control={control}
              register={register}
              registerOptions={{ required: 'Type is required!' }} 
              error={errors.type}
              options={typeOptions}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextInput 
              name='logoUrl' 
              label='Image'
              type='file'
              register={register}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            
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

export default CompetitionForm;