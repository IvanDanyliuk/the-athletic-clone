import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Box, Button, Grid, styled } from '@mui/material';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../../../features/store';
import ControlledDatePicker from '../../ui/ControlledDatePicker';
import SelectField from '../../ui/SelectField';
import TextInput from '../../ui/TextInput';


interface MaterialFilterData {
  title?: string,
  dateFrom?: string,
  dateTo?: string,
  author?: string
}

const Form = styled(Box)`
  margin-top: 20px;
`;

const FormRow = styled(Grid)`
  margin-bottom: 10px;
`;

const BtnWrapper = styled(Grid)`
  padding: 10px 0;
  display: flex;
  justify-content: center;
  align-items: flex-end;
`;

const SubmitBtn = styled(Button)`
  width: 100%;
  height: 4em;
  svg {
    font-size: 1.5em;
  }
`;

const MaterialFilters = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { register, handleSubmit, control, formState: { errors }, reset } = useForm<MaterialFilterData>();

  const authors = [{ label: 'John Doe', value: 'John Doe' }, { label: 'Rowan Atkinson', value: 'Rowan Atkinson' }];

  const sumbitFilterData = (data: any) => {
    console.log(data)
  };

  return (
    <Form component='form' onSubmit={handleSubmit(sumbitFilterData)}>
      <FormRow container spacing={3}>
        <Grid item xs={12} md={5}>
          <TextInput 
            name='title' 
            label='Title'
            type='text' 
            register={register}
            error={errors.title}
          />
        </Grid>
        <Grid item xs={12} md={2}>
          <ControlledDatePicker 
            name='dateFrom'
            label='From'
            control={control}
            register={register}
          />
        </Grid>
        <Grid item xs={12} md={2}>
          <ControlledDatePicker 
            name='dateTo'
            label='To'
            control={control}
            register={register}
          />
        </Grid>
        <Grid item xs={12} md={2}>
          <SelectField 
            name='author'
            label='Author' 
            control={control}
            register={register}
            error={errors.author}
            options={authors}
          />
        </Grid>
        <BtnWrapper item xs={12} md={1}>
          <SubmitBtn type='submit' variant='outlined'>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </SubmitBtn>
        </BtnWrapper>
      </FormRow>
    </Form>
  );
};

export default MaterialFilters;