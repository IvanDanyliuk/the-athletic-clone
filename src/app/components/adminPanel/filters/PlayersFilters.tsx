import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { faFilter, faFilterCircleXmark, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Box, Button, Grid, IconButton, Snackbar, styled, Tooltip } from '@mui/material';
import dayjs from 'dayjs';
import { clearFilters, setFilters } from '../../../../features/players/reducers';
import { AppDispatch } from '../../../../features/store';
import ControlledDatePicker from '../../ui/ControlledDatePicker';
import SelectField from '../../ui/SelectField';
import { checkFilterTimeInterval } from '../../../utils/helpers';
import { IPlayersFilters, PlayerPosition } from '../../../../features/players/types';
import { getPlayers } from '../../../../features/players/asyncActions';
import { getCountries } from '../../../services/countries';
import { selectClubsByCountry } from '../../../../features/clubs/selectors';
import { getClubsByCountry } from '../../../../features/clubs/asyncActions';


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

const position = [
  { label: PlayerPosition.goalkeeper, value: PlayerPosition.goalkeeper },
  { label: PlayerPosition.defender, value: PlayerPosition.defender },
  { label: PlayerPosition.midfielder, value: PlayerPosition.midfielder },
  { label: PlayerPosition.attack, value: PlayerPosition.attack },
];


const PlayersFilters: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { register, handleSubmit, control, formState: { errors }, reset } = useForm<IPlayersFilters>();
  const [dateError, setDateError] = useState<string | null>(null);

  const countries = getCountries().map(country => ({ label: country, value: country }));
  const clubData = useSelector(selectClubsByCountry);
  const clubs = clubData.map(club => ({ label: club.commonName, value: club.commonName }));

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
    dispatch(getPlayers({ page: 0, itemsPerPage: 10, filterData: null, sortData: null }));
  };

  const handleDateError = (value: string) => {
    setDateError(value);
  };

  const clearDateError = () => {
    setDateError('');
  };

  useEffect(() => {
    dispatch(getClubsByCountry('International'));
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
        <Grid item xs={12} md={3}>
          <SelectField 
            name='country'
            label='Country' 
            control={control}
            register={register}
            error={errors.country}
            options={countries}
          />
        </Grid>
        <Grid item xs={12} md={2}>
          <SelectField 
            name='club'
            label='Club' 
            control={control}
            register={register}
            error={errors.club}
            options={clubs}
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
        <Grid item xs={12} md={1}>
          <SelectField 
            name='position'
            label='Position' 
            control={control}
            register={register}
            error={errors.country}
            options={position}
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

export default PlayersFilters;