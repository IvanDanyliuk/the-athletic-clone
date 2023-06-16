import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { 
  Box, Container, Dialog, Divider, Grid, Icon, 
  IconButton, Input, Typography, styled 
} from '@mui/material';
import { Close, Search } from '@mui/icons-material';
import { AppDispatch } from '../../../features/store';
import { searchMaterials } from '../../../features/materials/asyncActions';


interface ISearchField {
  search: string;
}

const SearchIcon = styled(IconButton)`
  color: #ffffff;
`;

const SearchDialog = styled(Dialog)`
  .MuiDialog-paper {
    margin: 0;
    position: absolute;
    top: 0;
    max-width: 100vw;
    width: 100vw;
    height: 7vh;
    border-radius: 0;
    background: #181818;
  }
`;

const SearchFormContainer = styled(Container)`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
`;

const SearchForm = styled(Box)`
  width: 100%;
`;

const SearchFieldContainer = styled(Box)`
  width: 100%;
`;

const SearchField = styled(Input)`
  width: 100%;
  font-size: .8em;
  color: #cccccc;
`;

const TableSection = styled(Grid)`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ErrorMessage = styled(Typography)`
  font-size: .7em;
  color: #9e2c2c;
`;

const VerticalDivider = styled(Divider)`
  margin: 0 1em;
  background: #ffffff;
`;


const SearchHeaderField: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const { register, handleSubmit, formState: { errors }, reset } = useForm<ISearchField>();
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleSearchMenuOpen = () => {
    setIsOpen(!isOpen);
    reset();
  };

  const handleSearchFormSubmit = async (data: ISearchField) => {
    await dispatch(searchMaterials({ value: data.search, type: ['article', 'note'] }));
    reset();
    navigate('/search');
    handleSearchMenuOpen();
  };

  return (
    <>
      <SearchIcon onClick={handleSearchMenuOpen}>
        <Icon component={Search} />
      </SearchIcon>
      <SearchDialog open={isOpen} onClose={handleSearchMenuOpen}>
        <SearchFormContainer maxWidth='xl'>
          <SearchForm component='form' onSubmit={handleSubmit(handleSearchFormSubmit)}>
            <Grid container alignItems='center'>
              <TableSection item xs={11}>
                <SearchFieldContainer>
                  <SearchField 
                    autoFocus
                    disableUnderline 
                    placeholder='Search for writers or stories'
                    { ...register('search', { required: 'What do you need to find?' }) } 
                    aria-invalid={errors.search ? 'true' : 'false'}
                  />
                  <ErrorMessage>{errors.search?.message}</ErrorMessage>
                </SearchFieldContainer>
              </TableSection>
              <TableSection item xs={1}>
                <SearchIcon type='submit'>
                  <Icon component={Search} />
                </SearchIcon>
                <VerticalDivider orientation='vertical' flexItem />
                <SearchIcon onClick={handleSearchMenuOpen}>
                  <Icon component={Close} />
                </SearchIcon>
              </TableSection>
            </Grid>
          </SearchForm>
        </SearchFormContainer>
      </SearchDialog>
    </>
  );
};

export default SearchHeaderField;