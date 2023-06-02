import React from 'react';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { faFilter, faFilterCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Box, Button, Grid, styled, Tooltip } from '@mui/material';
import { clearFilters, setFilters } from '../../../../features/competitions/reducers';
import { ICompetitionsFilters } from '../../../../features/competitions/types';
import { AppDispatch } from '../../../../features/store';
import { SelectField } from '../../ui/';
import { getCountries } from '../../../services/countries';
import { getCompetitions } from '../../../../features/competitions/asyncActions';


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

enum CompetitionTypes {
  league = 'league',
  cup = 'cup'
}

const competitionTypeOptions = [
  { label: 'League', value: CompetitionTypes.league },
  { label: 'Cup', value: CompetitionTypes.cup }
];


const CompetitionsFilters: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { register, handleSubmit, control, formState: { errors }, reset } = useForm<ICompetitionsFilters>();

  const countries = getCountries().map(country => ({ label: country, value: country }));
  countries.unshift({ label: 'International', value: 'International' });

  const sumbitFilterData = (data: any) => {
    dispatch(setFilters(data));
  };

  const clearFilterData = () => {
    reset();
    dispatch(clearFilters());
    dispatch(getCompetitions({ page: 0, itemsPerPage: 10, filterData: null, sortData: null }));
  };

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
        <Grid item xs={12} md={5}>
          <SelectField 
            name='type'
            label='Type' 
            control={control}
            register={register}
            error={errors.type}
            defaultValue=''
            options={competitionTypeOptions}
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
    </Form>
  );
};

export default CompetitionsFilters;