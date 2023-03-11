import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Backdrop, Box, Button, CircularProgress, Grid, styled, Typography } from '@mui/material';
import { useForm } from 'react-hook-form';
import { AppDispatch } from '../../../../../features/store';
import { MaterialModel } from '../../../../models/components';
import TextInput from '../../../ui/TextInput';
import dayjs from 'dayjs';
import ControlledDatePicker from '../../../ui/ControlledDatePicker';
import TextEditor from '../../ui/TextEditor';
import { createMaterial } from '../../../../../features/materials/asyncActions';
import { selectUser } from '../../../../../features/users/selectors';
import { uploadImage } from '../../../../services/uploadImage';
import BackLink from '../../ui/BackLink';
import SelectField from '../../../ui/SelectField';


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


const NewArticleForm: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { register, handleSubmit, control, formState: { errors }, reset } = useForm<MaterialModel>();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const user = useSelector(selectUser);

  const handleFormSubmit = async (data: any) => {
    setIsLoading(true);
    const imageUrl = data.image[0] ? await uploadImage(data.image[0]) : '';
    dispatch(createMaterial({
      ...data,
      author: {
        name: `${user?.firstName} ${user?.lastName}`,
        photoUrl: user?.userPhotoUrl,
        organization: user?.organization,
        position: user?.position
      },
      type: 'article',
      image: imageUrl,
      publicationDate: dayjs(data.publicationDate).format('DD/MM/YYYY'),
      content: data.content,
      views: 0,
      likes: 0,
      comments: []
    }));
    setIsLoading(false);
    reset();
  };

  return (
    <Box>
      <BackLink link='/admin/materials' title='Go back' />
      <Form component='form' onSubmit={handleSubmit(handleFormSubmit)}>
        <FormRow container>
          <Grid item xs={12}>
            <TextInput 
              name='title' 
              label='Title'
              type='text'
              register={register}
              registerOptions={{ required: 'Title is required!' }}
              error={errors.title}
            />
          </Grid>
        </FormRow>
        <FormRow container spacing={3}>
          <Grid item xs={12} md={3}>
            <TextInput 
              name='image' 
              label='Image'
              type='file'
              register={register}
              registerOptions={{ required: 'Image is required!' }}
              
            />
          </Grid>
          <Grid item xs={12} md={3}>
            <ControlledDatePicker 
              name='publicationDate'
              label='Publication Date'
              control={control}
              register={register}
              error={errors.publicationDate}
            />
          </Grid>
          <Grid item xs={12} md={3}>
            <Typography>Labels will be here soon!</Typography>
          </Grid>
          <Grid item xs={12} md={3}>
            <SelectField 
              name='status'
              label='Status'
              control={control}
              register={register}
              registerOptions={{ required: 'Status is required!' }} 
              error={errors.status}
              options={statusOptions}
            />
          </Grid>
        </FormRow>
        <FormRow container>
          <Grid item xs={12}>
            <TextEditor 
              name='content'
              control={control}
              register={register}
              error={errors.content}
            />
          </Grid>
        </FormRow>
        <Button 
          type='submit'
          variant='contained'
        >Submit</Button>
      </Form>
      <Backdrop
        sx={{ color: '#fff', zIndex: 1 }}
        open={isLoading}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </Box>
  );
};

export default NewArticleForm;