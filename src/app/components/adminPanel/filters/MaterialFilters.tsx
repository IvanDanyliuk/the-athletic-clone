import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { faFilter, faFilterCircleXmark, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Box, Button, Grid, IconButton, Snackbar, styled, Tooltip } from '@mui/material';
import dayjs from 'dayjs';
import { getAuthors, getMaterials } from '../../../../features/materials/asyncActions';
import { clearFilters, setFilters } from '../../../../features/materials/reducers';
import { MaterialFilterData } from '../../../../features/materials/types';
import { AppDispatch } from '../../../../features/store';
import { MaterialType } from '../../../models/components';
import ControlledDatePicker from '../../ui/ControlledDatePicker';
import SelectField from '../../ui/SelectField';
import { checkFilterTimeInterval } from '../../../utils/helpers';
import { selectAuthors } from '../../../../features/materials/selectors';


const Form = styled(Box)`
  margin-top: 20px;
`;

const FormRow = styled(Grid)`
  margin-bottom: 10px;
`;

const BtnWrapper = styled(Grid)`
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

// const authors = [
//   { label: 'John Doe', value: 'John Doe' }, 
//   { label: 'Rowan Atkinson', value: 'Rowan Atkinson' }, 
//   { label: 'Jack Sparrow', value: 'Jack Sparrow' }
// ];

const types = [
  { label: 'Article', value: MaterialType.article }, 
  { label: 'Note', value: MaterialType.note }, 
  { label: 'Post', value: MaterialType.post }
];


const MaterialFilters: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { register, handleSubmit, control, formState: { errors }, reset } = useForm<MaterialFilterData>();
  const [dateError, setDateError] = useState<string | null>(null);

  const authorsData = useSelector(selectAuthors);
  const authors = authorsData.map(author => ({ label: author, value: author }));

  const sumbitFilterData = (data: any) => {
    const isDatesValid = checkFilterTimeInterval(data.dateFrom, data.dateTo, handleDateError);
    if(isDatesValid) {
      dispatch(setFilters({
        ...data,
        dateFrom: data.dateFrom ? dayjs(data.dateFrom).toISOString() : '',
        dateTo: data.dateTo ? dayjs(data.dateTo).toISOString() : '',
      }));
    }
  };

  const clearFilterData = () => {
    reset();
    dispatch(clearFilters());
    dispatch(getMaterials({ page: 0, itemsPerPage: 10, filterData: null, sortData: null }));
  };

  const handleDateError = (value: string) => {
    setDateError(value);
  };

  const clearDateError = () => {
    setDateError('');
  };

  useEffect(() => {
    dispatch(getAuthors());
  }, []);

  const action = (
    <IconButton
      size="small"
      aria-label="close"
      color="inherit"
      onClick={clearDateError}
    >
      <FontAwesomeIcon icon={faXmark} />
    </IconButton>
  );

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
            <SubmitBtn 
              data-testid='submitFilterDataBtn'
              type='submit' 
              variant='outlined'
            >
              <FontAwesomeIcon icon={faFilter} />
            </SubmitBtn>
          </Tooltip>
        </BtnWrapper>
        <BtnWrapper item xs={12} md={1}>
          <Tooltip title='Clear filters' placement='top' arrow>
            <SubmitBtn 
              data-testid='clearFilterDataBtn'
              type='button' 
              variant='outlined' 
              color='warning' 
              onClick={clearFilterData}
            >
              <FontAwesomeIcon icon={faFilterCircleXmark} />
            </SubmitBtn>
          </Tooltip>
        </BtnWrapper>
      </FormRow>
      <Snackbar
        open={Boolean(dateError)}
        autoHideDuration={6000}
        onClose={clearDateError}
        message={dateError}
        action={action}
      />
    </Form>
  );
};

export default MaterialFilters;