import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { AppDispatch } from '../../features/store';
import { getAuthors, searchMaterials } from '../../features/materials/asyncActions';
import { Box, Divider, Grid, Icon, IconButton, Input, Typography, styled } from '@mui/material';
import { SearchFilters, SearchResults } from '../components/search';
import { getAllCompetitions } from '../../features/competitions/asyncActions';
import { selectAuthors, selectSearchedMaterials } from '../../features/materials/selectors';
import { selectAllCompetitions } from '../../features/competitions/selectors';
import { DataNotFoundMessage } from '../components/ui';
import { clearSearch } from '../../features/materials/reducers';
import { ManageSearch } from '@mui/icons-material';


interface ISearchField {
  search: string;
}

const Container = styled(Grid)`
  padding: 1em 0;
`;

const SearchForm = styled(Box)`
  display: flex;
  align-items: center;
`;

const SearchField = styled(Input)`
  width: 100%;
  font-size: .8em;
  color: #5c5c5c;
`;

const ErrorMessage = styled(Typography)`
  font-size: .7em;
  color: #9e2c2c;
`;

const SearchIcon = styled(IconButton)`
  margin-right: 1em;
  color: #4a4a4a;
`;

const SectionDivider = styled(Divider)`
  margin: 1em 0;
`;


const Search: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { register, handleSubmit, formState: { errors }, clearErrors, reset } = useForm<ISearchField>();

  const authors = useSelector(selectAuthors);
  const leagues = useSelector(selectAllCompetitions);
  const searchResults = useSelector(selectSearchedMaterials);

  const [filterData, setFilterData] = useState<string[]>([]);

  const handleSetFilterData = (label: string) => {
    if(filterData.includes(label)) {
      setFilterData(filterData.filter(item => item !== label));
    } else {
      setFilterData([...filterData, label]);
    }
    if(filterData.length) {
      dispatch(clearSearch());
    }
    if(errors.search) {
      clearErrors();
    }
  };

  const handleSearchFormSubmit = async (data: ISearchField) => {
    await dispatch(searchMaterials({ value: data.search, type: ['article', 'note'] }));
    reset();
  };

  useEffect(() => {
    if(filterData.length > 0) {
      dispatch(searchMaterials({ value: filterData, type: ['article', 'note'] }));
    }
  }, [filterData, dispatch]);

  useEffect(() => {
    dispatch(getAuthors());
    dispatch(getAllCompetitions());
  }, []);

  return (
    <Container container spacing={3}>
      <Grid item xs={3}>
        {authors && leagues ? (
          <SearchFilters 
            authors={authors} 
            leagues={leagues} 
            checkedLabels={filterData} 
            onSetFilterData={handleSetFilterData} 
          />
        ) : (
          <DataNotFoundMessage message='Cannot find available authors and leagues' />
        )}
      </Grid>
      <Grid item xs={9}>
        <SearchForm component='form' onSubmit={handleSubmit(handleSearchFormSubmit)}>
          <SearchIcon type='submit'>
            <Icon component={ManageSearch} />
          </SearchIcon>
          <SearchField 
            autoFocus
            disableUnderline 
            placeholder='Search for writers or stories'
            { ...register('search', { required: 'What do you need to find?' }) } 
            aria-invalid={errors.search ? 'true' : 'false'}
          />
        </SearchForm>
        <ErrorMessage>{errors.search?.message}</ErrorMessage>
        <SectionDivider orientation='horizontal' flexItem />
        {searchResults && (
          <SearchResults materials={searchResults} />
        )}
      </Grid>
    </Container>
  );
};

export default Search;