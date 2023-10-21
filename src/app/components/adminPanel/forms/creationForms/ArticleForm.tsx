import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { Box, Button, Grid, styled } from '@mui/material';
import dayjs from 'dayjs';
import { AppDispatch } from '../../../../../features/store';
import { MaterialModel, MaterialType } from '../../../../models/components';
import { createMaterial, updateMaterial } from '../../../../../features/materials/asyncActions';
import { selectUser } from '../../../../../features/users/selectors';
import { uploadImage } from '../../../../services/uploadImage';
import { BackLink, TextEditor } from '../../ui/';
import { 
  BackdropLoader, Checkbox, ControlledDatePicker, 
  MultiSelect, SelectField, TextInput 
} from '../../../ui/';
import { IMaterial, MaterialPublicationStatus } from '../../../../../features/materials/types';
import { selectClubsByCountry } from '../../../../../features/clubs/selectors';
import { getClubsByCountry } from '../../../../../features/clubs/asyncActions';
import { getAllCompetitions } from '../../../../../features/competitions/asyncActions';
import { selectAllCompetitions } from '../../../../../features/competitions/selectors';


const Form = styled(Box)`
  margin-top: 20px;
`;

const SubmitBtn = styled(Button)`
  width: 100%;
  height: 4em;
`;

const statusOptions = [
  { label: 'Published', value: MaterialPublicationStatus.Published },
  { label: 'Not Published', value: MaterialPublicationStatus.NotPublished },
];

interface INewArticleFormProps {
  articleToUpdate?: IMaterial;
}


const NewArticleForm: React.FC<INewArticleFormProps> = ({ articleToUpdate }) => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const location = useLocation();
  const { 
    register, 
    handleSubmit, 
    control, 
    formState: { errors }, 
    getValues,
    reset 
  } = useForm<MaterialModel>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [selectedLabels, setSelectedLabels] = useState<string[]>([]);

  const user = useSelector(selectUser);
  const clubsData = useSelector(selectClubsByCountry);
  const clubs = clubsData.map(club => ({ 
    label: club.commonName, 
    value: club.commonName 
  }));
  const competitionsData = useSelector(selectAllCompetitions);
  const competitions = competitionsData.map(competition => ({ 
    label: competition.fullName, 
    value: competition.fullName 
  }));

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
    if(articleToUpdate) {
      setIsLoading(true);
      const imageUrl = data.image.length > 0 ? await uploadImage(data.image[0]) : articleToUpdate.image;
      await dispatch(updateMaterial({
        ...articleToUpdate,
        title: data.title,
        image: imageUrl,
        isMain: data.isMain,
        publicationDate: dayjs(data.publicationDate).add(1, 'day').toISOString(),
        status: data.status,
        content: data.content,
        preview: data.preview,
        labels: selectedLabels,
      }));
      setIsLoading(false);
      navigate(backPath);
    } else {
      setIsLoading(true);
      const imageUrl = data.image.length > 0 ? await uploadImage(data.image[0]) : '';
      await dispatch(createMaterial({
        ...data,
        author: user?._id,
        type: MaterialType.article,
        image: imageUrl,
        publicationDate: data.publicationDate ? dayjs(data.publicationDate).add(1, 'day') : new Date().toISOString(),
        views: 0,
        likes: [],
        labels: selectedLabels,
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
    if(articleToUpdate) {
      reset({
        title: articleToUpdate.title,
        // image: articleToUpdate.image,
        isMain: articleToUpdate.isMain,
        publicationDate: dayjs(articleToUpdate.publicationDate).subtract(1, 'day'),
        status: articleToUpdate.status,
        content: articleToUpdate.content,
        preview: articleToUpdate.preview,
      });
      setSelectedLabels(articleToUpdate.labels);
    }
  }, []);

  return (
    <Box>
      <BackLink link={backPath} title='Go back' />
      <Form data-testid='articleForm' component='form' onSubmit={handleSubmit(handleFormSubmit)}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={9}>
            <TextInput 
              name='title' 
              label='Title'
              type='text' 
              register={register}
              registerOptions={{ required: 'Title is required!' }}
              error={errors.title}
            />
          </Grid>
          <Grid item xs={12} md={3}>
            <TextInput 
              name='image' 
              label='Image'
              type='file'
              register={register}
            />
          </Grid>
          <Grid item xs={11}>
            <TextInput 
              name='preview' 
              label='Preview'
              type='text' 
              register={register}
              registerOptions={{ required: 'Preview is required!' }}
              error={errors.title}
            />
          </Grid>
          <Grid item xs={1}>
            <Checkbox 
              name='isMain'
              label='Main Article'
              control={control}
              checked={getValues('isMain')!}
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
            <ControlledDatePicker 
              name='publicationDate'
              label='Publication Date'
              control={control}
              register={register}
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
            <SubmitBtn 
              type='submit'
              variant='contained'
            >
              Submit
            </SubmitBtn>
          </Grid>
        </Grid>
      </Form>
      <BackdropLoader open={isLoading} />
    </Box>
  );
};

export default NewArticleForm;