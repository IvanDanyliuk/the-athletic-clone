import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { Box, Button, Grid, styled } from '@mui/material';
import dayjs from 'dayjs';
import { AppDispatch } from '../../../../../features/store';
import { MaterialModel, MaterialType } from '../../../../models/components';
import TextInput from '../../../ui/TextInput';
import ControlledDatePicker from '../../../ui/ControlledDatePicker';
import TextEditor from '../../ui/TextEditor';
import { createMaterial, updateMaterial } from '../../../../../features/materials/asyncActions';
import { selectUser } from '../../../../../features/users/selectors';
import { uploadImage } from '../../../../services/uploadImage';
import BackLink from '../../ui/BackLink';
import SelectField from '../../../ui/SelectField';
import BackdropLoader from '../../../ui/BackdropLoader';
import { IMaterial } from '../../../../../features/materials/types';
import { selectClubsByCountry } from '../../../../../features/clubs/selectors';
import { selectAllCompetitions } from '../../../../../features/competitions/selectors';
import { getClubsByCountry } from '../../../../../features/clubs/asyncActions';
import { getAllCompetitions } from '../../../../../features/competitions/asyncActions';
import LabelSelect from '../../../ui/LabelSelect';



const Form = styled(Box)`
  margin-top: 20px;
`;

const FormRow = styled(Grid)`
  margin-bottom: 10px;
`;

const statusOptions = [
  { label: 'Published', value: 'published' },
  { label: 'Not Published', value: 'not-published' },
];

interface INewNoteFormProps {
  noteToUpdate?: IMaterial
}


const NewNoteForm: React.FC<INewNoteFormProps> = ({ noteToUpdate }) => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const { register, handleSubmit, control, formState: { errors }, reset } = useForm<MaterialModel>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [selectedLabels, setSelectedLabels] = useState<string[]>([]);

  const user = useSelector(selectUser);
  const clubsData = useSelector(selectClubsByCountry);
  const clubs = clubsData.map(club => ({ label: club.commonName, value: club.commonName }));
  const competitionsData = useSelector(selectAllCompetitions);
  const competitions = competitionsData.map(competition => ({ label: competition.fullName, value: competition.fullName }));

  const handleLabelSelect = (event: any) => {
    const {
      target: { value },
    } = event;
    setSelectedLabels(
      typeof value === 'string' ? value.split(',') : value
    );
  };

  const handleFormSubmit = async (data: any) => {
    if(noteToUpdate) {
      setIsLoading(true);
      await dispatch(updateMaterial({
        ...noteToUpdate,
        title: data.title,
        image: data.image,
        publicationDate: dayjs(data.publicationDate).add(1, 'day').toISOString(),
        status: data.status,
        content: data.content,
        labels: selectedLabels,
      }));
      setIsLoading(false);
      navigate('/admin/materials');
    } else {
      setIsLoading(true);
      const imageUrl = data.image.length > 0 ? await uploadImage(data.image[0]) : '';
      await dispatch(createMaterial({
        ...data,
        author: {
          name: `${user?.firstName} ${user?.lastName}`,
          photoUrl: user?.userPhotoUrl,
          organization: user?.organization,
          position: user?.position
        },
        type: MaterialType.note,
        image: imageUrl,
        publicationDate: dayjs(data.publicationDate).add(1, 'day').toISOString(),
        content: data.content,
        views: 0,
        likes: 0,
        labels: selectedLabels,
        comments: []
      }));
      setIsLoading(false);
    }
    reset();
  };

  useEffect(() => {
    dispatch(getClubsByCountry('International'));
    dispatch(getAllCompetitions());
    if(noteToUpdate) {
      reset({
        title: noteToUpdate.title,
        image: noteToUpdate.image,
        publicationDate: dayjs(noteToUpdate.publicationDate).subtract(1, 'day'),
        status: noteToUpdate.status,
        content: noteToUpdate.content
      });
      setSelectedLabels(noteToUpdate.labels);
    }
  }, []);

  return (
    <Box>
      <BackLink link='/admin/materials' title='Go back' />
      <Form component='form' onSubmit={handleSubmit(handleFormSubmit)}>
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
          <Grid item xs={12} md={3}>
            <LabelSelect 
              name='Competition Label' 
              data={competitions} 
              checkedLabels={selectedLabels} 
              setLabels={handleLabelSelect} 
            />
          </Grid>
          <Grid item xs={12} md={3}>
            <LabelSelect 
              name='Clubs Label' 
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

export default NewNoteForm;