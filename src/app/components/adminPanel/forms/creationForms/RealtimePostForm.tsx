import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { Box, Button, Grid, styled } from '@mui/material';
import dayjs from 'dayjs';
import { AppDispatch } from '../../../../../features/store';
import { MaterialModel, MaterialType } from '../../../../models/components';
import { BackdropLoader, ControlledDatePicker, MultiSelect, SelectField } from '../../../ui/';
import { createMaterial, updateMaterial } from '../../../../../features/materials/asyncActions';
import { selectUser } from '../../../../../features/users/selectors';
import { BackLink, TextEditor } from '../../ui/';
import { IMaterial } from '../../../../../features/materials/types';
import { selectClubsByCountry } from '../../../../../features/clubs/selectors';
import { selectAllCompetitions } from '../../../../../features/competitions/selectors';
import { getClubsByCountry } from '../../../../../features/clubs/asyncActions';
import { getAllCompetitions } from '../../../../../features/competitions/asyncActions';


interface INewRealTimePostFormProps {
  postToUpdate?: IMaterial;
}

const Form = styled(Box)`
  margin-top: 20px;
`;

const statusOptions = [
  { label: 'Published', value: 'published' },
  { label: 'Not Published', value: 'not-published' },
];


const NewRealTimePostForm: React.FC<INewRealTimePostFormProps> = ({ postToUpdate }) => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const location = useLocation();
  const { register, handleSubmit, control, formState: { errors }, reset } = useForm<MaterialModel>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [selectedLabels, setSelectedLabels] = useState<string[]>([]);

  const user = useSelector(selectUser);
  const clubsData = useSelector(selectClubsByCountry);
  const clubs = clubsData.map(club => ({ label: club.commonName, value: club.commonName }));
  const competitionsData = useSelector(selectAllCompetitions);
  const competitions = competitionsData.map(competition => ({ label: competition.fullName, value: competition.fullName }));

  const backPath = location.pathname.split('/').slice(0, -2).join('/');

  const handleLabelSelect = (event: any) => {
    const {
      target: { value },
    } = event;
    setSelectedLabels(
      typeof value === 'string' ? value.split(',') : value
    );
  };

  const handleFormSubmit = async (data: any) => {
    if(postToUpdate) {
      setIsLoading(true);
      await dispatch(updateMaterial({
        ...postToUpdate,
        publicationDate: dayjs(data.publicationDate).add(1, 'day').toISOString(),
        status: data.status,
        content: data.content,
        labels: selectedLabels,
      }));
      setIsLoading(false);
      navigate(backPath);
    } else {
      setIsLoading(true);
      await dispatch(createMaterial({
        ...data,
        author: user?._id,
        type: MaterialType.post,
        publicationDate: data.publicationDate ? dayjs(data.publicationDate).add(1, 'day') : new Date().toISOString(),
        content: data.content,
        labels: selectedLabels,
        views: 0,
        likes: [],
        comments: []
      }));
      setIsLoading(false);
      navigate(backPath);
    }
    reset();
  };

  useEffect(() => {
    dispatch(getClubsByCountry('International'));
    dispatch(getAllCompetitions());
    if(postToUpdate) {
      reset({
        publicationDate: dayjs(postToUpdate.publicationDate).subtract(1, 'day'),
        status: postToUpdate.status,
        content: postToUpdate.content
      });
      setSelectedLabels(postToUpdate.labels);
    }
  }, []);

  return (
    <Box>
      <BackLink link={backPath} title='Go back' />
      <Form data-testid='postForm' component='form' onSubmit={handleSubmit(handleFormSubmit)}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={3}>
            <ControlledDatePicker 
              name='publicationDate'
              label='Publication Date'
              control={control}
              register={register}
            />
          </Grid>
          <Grid item xs={12} md={3}>
            <MultiSelect 
              name='competitionLabel'
              label='Competition Label' 
              data={competitions} 
              checkedLabels={selectedLabels} 
              setLabels={handleLabelSelect} 
            />
          </Grid>
          <Grid item xs={12} md={3}>
            <MultiSelect 
              name='clubsLabel'
              label='Clubs Label' 
              data={clubs} 
              checkedLabels={selectedLabels} 
              setLabels={handleLabelSelect} 
            />
          </Grid>
          <Grid item xs={12} md={3}>
            <SelectField 
              name='status'
              label='Status' 
              control={control}
              register={register}
              registerOptions={{ required: 'Status is required!' }} 
              error={errors.status}
              defaultValue={statusOptions[0].value}
              options={statusOptions}
            />
          </Grid>
          <Grid item xs={12}>
            <TextEditor 
              name='content' 
              control={control}
              register={register}
              error={errors.content}
            />
          </Grid>
          <Grid item xs={12} md={2}>
            <Button 
              type='submit'
              variant='contained'
            >
              Submit
            </Button>
          </Grid>
        </Grid>
      </Form>
      <BackdropLoader open={isLoading} />
    </Box>
  );
};

export default NewRealTimePostForm;