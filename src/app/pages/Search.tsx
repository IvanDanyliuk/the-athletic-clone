import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { AppDispatch } from '../../features/store';
import { getAuthors, searchMaterials } from '../../features/materials/asyncActions';
import { Grid } from '@mui/material';
import { SearchFilters, SearchResults } from '../components/search';
import { getAllCompetitions } from '../../features/competitions/asyncActions';
import { selectAuthors, selectSearchedMaterials } from '../../features/materials/selectors';
import { selectAllCompetitions } from '../../features/competitions/selectors';
import { DataNotFoundMessage } from '../components/ui';
import { clearSearch } from '../../features/materials/reducers';


interface ISearchField {
  search: string;
}

const Search: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { register, handleSubmit, formState: { errors }, reset } = useForm<ISearchField>();

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
    <Grid container>
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
        {searchResults && (
          <SearchResults materials={searchResults} />
        )}
      </Grid>
    </Grid>
  );
};

export default Search;