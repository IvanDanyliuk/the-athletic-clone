import React from 'react';
import { Box, Button, styled } from '@mui/material';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../../../../features/store';
import { useForm } from 'react-hook-form';
import { MaterialModel } from '../../../../models/components';
import TextInput from '../../../ui/TextInput';
import dayjs from 'dayjs';
import ControlledDatePicker from '../../../ui/ControlledDatePicker';


const Form = styled(Box)`

`;

const FormRow = styled(Box)`

`;


const NewArticleForm: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { register, handleSubmit, control, formState: { errors }, getValues, reset } = useForm<MaterialModel>();

  const handleFormSubmit = (data: any) => {
    console.log({
      ...data,
      image: data.image[0],
      publicationDate: dayjs(data.publicationDate).format('DD/MM/YYYY')
    })
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
      <Button type='submit'>Submit</Button>
    </Form>
  );
};

export default NewArticleForm;