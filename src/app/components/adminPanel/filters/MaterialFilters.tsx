import { faFilter, faFilterCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Box, Button, Grid, styled, Tooltip } from '@mui/material';
import dayjs from 'dayjs';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { getAllMaterials } from '../../../../features/materials/asyncActions';
import { clearFilters, setFilters } from '../../../../features/materials/reducers';
import { MaterialFilterData } from '../../../../features/materials/types';
import { AppDispatch } from '../../../../features/store';
import { MaterialType } from '../../../models/components';
import ControlledDatePicker from '../../ui/ControlledDatePicker';
import SelectField from '../../ui/SelectField';


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

const authors = [
  { label: 'John Doe', value: 'John Doe' }, 
  { label: 'Rowan Atkinson', value: 'Rowan Atkinson' }, 
  { label: 'Jack Sparrow', value: 'Jack Sparrow' }
];

const types = [
  { label: 'Article', value: MaterialType.article }, 
  { label: 'Note', value: MaterialType.note }, 
  { label: 'Post', value: MaterialType.post }
];


const MaterialFilters: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { register, handleSubmit, control, formState: { errors }, reset } = useForm<MaterialFilterData>();

  const sumbitFilterData = (data: any) => {
    dispatch(setFilters({
      ...data,
      dateFrom: dayjs(data.dateFrom).toISOString(),
      dateTo: dayjs(data.dateTo).toISOString(),
    }));
  };

  const clearFilterData = () => {
    reset();
    dispatch(clearFilters());
    dispatch(getAllMaterials({ page: 0, itemsPerPage: 10, filterData: null, sortData: null }));
  };

  return (
    <Form component='form' onSubmit={handleSubmit(sumbitFilterData)}>
      <FormRow container spacing={3}>
        <Grid item xs={12} md={4}>
          <SelectField 
            name='author'
            label='Author' 
            control={control}
            register={register}
            error={errors.author}
            defaultValue=''
            options={authors}
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
            name='type'
            label='Type' 
            control={control}
            register={register}
            error={errors.author}
            options={types}
          />
        </Grid>
        <BtnWrapper item xs={12} md={1}>
          <Tooltip title='Find' placement='top' arrow>
            <SubmitBtn type='submit' variant='outlined'>
              <FontAwesomeIcon icon={faFilter} />
            </SubmitBtn>
          </Tooltip>
        </BtnWrapper>
        <BtnWrapper item xs={12} md={1}>
          <Tooltip title='Clear filters' placement='top' arrow>
            <SubmitBtn type='button' variant='outlined' color='warning' onClick={clearFilterData}>
              <FontAwesomeIcon icon={faFilterCircleXmark} />
            </SubmitBtn>
          </Tooltip>
        </BtnWrapper>
      </FormRow>
    </Form>
  );
};

export default MaterialFilters;