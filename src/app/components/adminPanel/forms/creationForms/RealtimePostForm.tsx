import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { Box, Button, Grid, styled, Typography } from '@mui/material';
import dayjs from 'dayjs';
import { AppDispatch } from '../../../../../features/store';
import { MaterialModel, MaterialType } from '../../../../models/components';
import ControlledDatePicker from '../../../ui/ControlledDatePicker';
import TextEditor from '../../ui/TextEditor';
import { createMaterial, updateMaterial } from '../../../../../features/materials/asyncActions';
import { selectUser } from '../../../../../features/users/selectors';
import BackLink from '../../ui/BackLink';
import SelectField from '../../../ui/SelectField';
import BackdropLoader from '../../../ui/BackdropLoader';
import { IMaterial } from '../../../../../features/materials/types';



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

interface INewRealTimePostFormProps {
  postToUpdate?: IMaterial
}


const NewRealTimePostForm: React.FC<INewRealTimePostFormProps> = ({ postToUpdate }) => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const { register, handleSubmit, control, formState: { errors }, reset } = useForm<MaterialModel>();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const user = useSelector(selectUser);

  const handleFormSubmit = async (data: any) => {
    if(postToUpdate) {
      setIsLoading(true);
      await dispatch(updateMaterial({
        ...postToUpdate,
        publicationDate: data.publicationDate,
        status: data.status,
        content: data.content
      }));
      setIsLoading(false);
      navigate('/admin/materials');
    } else {
      setIsLoading(true);
      await dispatch(createMaterial({
        ...data,
        author: {
          name: `${user?.firstName} ${user?.lastName}`,
          photoUrl: user?.userPhotoUrl,
          organization: user?.organization,
          position: user?.position
        },
        type: MaterialType.post,
        publicationDate: dayjs(data.publicationDate).format('DD/MM/YYYY'),
        content: data.content,
        views: 0,
        likes: 0,
        comments: []
      }));
      setIsLoading(false);
    }
    reset();
  };

  useEffect(() => {
    if(postToUpdate) {
      reset({
        publicationDate: postToUpdate.publicationDate,
        status: postToUpdate.status,
        content: postToUpdate.content
      })
    }
  }, []);

  return (
    <Box>
      <BackLink link='/admin/materials' title='Go back' />
      <Form component='form' onSubmit={handleSubmit(handleFormSubmit)}>
        <FormRow container spacing={3}>
          <Grid item xs={12} md={4}>
            <ControlledDatePicker 
              name='publicationDate'
              label='Publication Date'
              control={control}
              register={register}
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography>Labels will be here soon!</Typography>
          </Grid>
          <Grid item xs={12} md={4}>
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
        >
          Submit
        </Button>
      </Form>
      <BackdropLoader open={isLoading} />
    </Box>
  );
};

export default NewRealTimePostForm;