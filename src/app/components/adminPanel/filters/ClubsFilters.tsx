import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { faFilter, faFilterCircleXmark, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Box, Button, Grid, IconButton, Snackbar, styled, Tooltip } from '@mui/material';
import { getAllClubs } from '../../../../features/clubs/asyncActions';
import { clearFilters, setFilters } from '../../../../features/clubs/reducers';
import { IClubFilters } from '../../../../features/clubs/types';
import { AppDispatch } from '../../../../features/store';
import SelectField from '../../ui/SelectField';
import { checkFilterTimeInterval } from '../../../utils/helpers';
import { getCountries } from '../../../services/countries';



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


const ClubsFilters: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { register, handleSubmit, control, formState: { errors }, reset } = useForm<IClubFilters>();
  const [dateError, setDateError] = useState<string | null>(null);

  const countries = getCountries().map(country => ({ label: country, value: country }));

  const sumbitFilterData = (data: any) => {
    const isDatesValid = checkFilterTimeInterval(data.dateFrom, data.dateTo, handleDateError);
    if(isDatesValid) {
      dispatch(setFilters(data));
    }
  };

  const clearFilterData = () => {
    reset();
    dispatch(clearFilters());
    dispatch(getAllClubs({ page: 0, itemsPerPage: 10, filterData: null, sortData: null }));
  };

  const handleDateError = (value: string) => {
    setDateError(value);
  };

  const clearDateError = () => {
    setDateError('');
  };

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
        <Grid item xs={12} md={5}>
          <SelectField 
            name='country'
            label='Country' 
            control={control}
            register={register}
            error={errors.country}
            defaultValue=''
            options={countries}
          />
        </Grid>
        <BtnWrapper item xs={12} md={1}>
          <Tooltip title='Find' placement='top' arrow>
            <SubmitBtn 
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

export default ClubsFilters;