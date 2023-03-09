import React from 'react';
import { Box, Button, styled } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '../../../../../features/store';
import { useForm } from 'react-hook-form';
import { MaterialModel } from '../../../../models/components';
import TextInput from '../../../ui/TextInput';
import dayjs from 'dayjs';
import ControlledDatePicker from '../../../ui/ControlledDatePicker';
import TextEditor from '../../ui/TextEditor';
import { createMaterial } from '../../../../../features/materials/asyncActions';
import { selectUser } from '../../../../../features/users/selectors';


const Form = styled(Box)`

`;

const FormRow = styled(Box)`
  margin-bottom: 10px;
`;


const NewArticleForm: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { register, handleSubmit, control, formState: { errors }, reset } = useForm<MaterialModel>();

  const user = useSelector(selectUser);

  const handleFormSubmit = (data: any) => {
    dispatch(createMaterial({
      ...data,
      author: {
        name: `${user?.firstName} ${user?.lastName}`,
        photoUrl: user?.userPhotoUrl,
        organization: user?.organization,
        position: user?.position
      },
      type: 'article',
      image: data.image[0],
      publicationDate: dayjs(data.publicationDate).format('DD/MM/YYYY'),
      content: data.content,
      views: 0,
      likes: 0,
      comments: []
    }))
    // reset();
  };

  return (
    <Form component='form' onSubmit={handleSubmit(handleFormSubmit)}>
      <FormRow>
        <TextInput 
          name='title' 
          label='Title'
          type='text'
          register={register}
          registerOptions={{ required: 'Title is required!' }}
          error={errors.title}
        />
        <TextInput 
          name='image' 
          label='Image'
          type='file'
          register={register}
          registerOptions={{ required: 'Image is required!' }}
          error={errors.image}
        />
        <ControlledDatePicker 
          name='publicationDate'
          label='Publication Date'
          control={control}
          register={register}
          error={errors.publicationDate}
        />
      </FormRow>
      <FormRow>
        Label selection will be available soon!
      </FormRow>
      <FormRow>
        <TextEditor 
          name='content'
          control={control}
          register={register}
          error={errors.content}
        />
      </FormRow>
      <Button type='submit'>Submit</Button>
    </Form>
  );
};

export default NewArticleForm;