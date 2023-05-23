import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { 
  Box, Button, Icon, IconButton, List, ListItem, 
  TextField, Typography, styled 
} from '@mui/material';
import { ChevronLeft, Close, Search, TrendingUp } from '@mui/icons-material';
import { v4 as uuid } from 'uuid';
import { selectSearchValues } from '../../../features/materials/selectors';
import { AppDispatch } from '../../../features/store';
import { getSearchValues, searchMaterials } from '../../../features/materials/asyncActions';
import { ICompetition } from '../../../features/competitions/types';
import { IClub } from '../../../features/clubs/types';
import { IUser } from '../../../features/users/types';
import { clearSearchValues } from '../../../features/materials/reducers';
import SearchItem from './SearchItem';
import { useNavigate } from 'react-router-dom';


const Container = styled(Box)`
  padding: 1em 0;
  width: 100%;
`;

const SearchSection = styled(Box)`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const Label = styled(Typography)`
  font-weight: 700;
  font-size: 1.5em;
`;

const SearchField = styled(TextField)`
  max-width: 100%;
  flex: 1;
`;

const FilterButton = styled(Button)`
  margin: .5em 0;
  width: 100%;
  height: 3em;
  text-transform: none;
  color: #121212;

  svg {
    margin-right: 1em;
    font-size: 1.5em;
    border: 1px solid #121212;
    border-radius: 50%;
  }
`;

const LatestIcon = styled(Typography)`
  margin-right: 1em;
  font-family: 'Arvo', serif;
  font-size: 1.5em;
  font-weight: 800;
  line-height: 1em;
`;

const SearchListItem = styled(ListItem)`
  transition: .5s;

  &:hover {
    cursor: pointer;
    background: #f4f4f4;
  }
`;


const PostsSearch: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const [isSearchModeActive, setIsSearchModeActive] = useState<boolean>(false);
  const [searchRequest, setSearchRequest] = useState<string>('');

  const searchValues = useSelector(selectSearchValues);

  const handleSearchMode = () => {
    setIsSearchModeActive(!isSearchModeActive);
  };

  const handleSearchValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchRequest(e.target.value);
  };

  const handleClearSearchValues = () => {
    setSearchRequest('');
    dispatch(clearSearchValues());
  };

  const handleSearchPosts = async (value: string, type?: string) => {
    if(type) {
      await dispatch(searchMaterials({ value, type }));
      navigate('/posts/search');
    }
  };

  useEffect(() => {
    const searchRequestTimeout = setTimeout(() => {
      if(searchRequest !== '') {
        dispatch(getSearchValues(searchRequest));
      }
    }, 1000);
    return () => clearTimeout(searchRequestTimeout);
  }, [searchRequest, dispatch]);

  return (
    <Container>
      <SearchSection>
        {isSearchModeActive ? (
          <>
            <IconButton onClick={handleSearchMode}>
              <Icon component={ChevronLeft} />
            </IconButton>
            <SearchField 
              value={searchRequest} 
              variant='standard' 
              onChange={handleSearchValueChange} 
            />
            {searchValues && (
              <IconButton onClick={handleClearSearchValues}>
                <Icon component={Close} />
              </IconButton>
            )}
          </>
        ) : (
          <>
            <Label variant='h2_custom'>Filter by</Label>
            <IconButton onClick={handleSearchMode}>
              <Icon component={Search} />
            </IconButton>
          </>
        )}
      </SearchSection>
      <Box>
        <FilterButton>
          <Icon component={TrendingUp} />
          <Typography>Trending</Typography>
        </FilterButton>
        <FilterButton>
          <LatestIcon variant='inherit'>A</LatestIcon>
          <Typography>Latest</Typography>
        </FilterButton>
      </Box>
      {searchValues && (
        <List>
          {searchValues.competitions.length > 0 && searchValues.competitions.map((competition: ICompetition) => (
            <SearchListItem key={uuid()} onClick={() => handleSearchPosts(competition.fullName, 'post')}>
              <SearchItem 
                image={competition.logoUrl} 
                label={competition.fullName} 
                altText={competition.shortName} 
              />
            </SearchListItem>
          ))}
          {searchValues.clubs.length > 0 && searchValues.clubs.map((club: IClub) => (
            <SearchListItem key={uuid()} onClick={() => handleSearchPosts(club.commonName, 'post')}>
              <SearchItem 
                image={club.clubLogoUrl} 
                label={club.commonName} 
                altText={club.shortName} 
              />
            </SearchListItem>
          ))}
          {searchValues.authors.length > 0 && searchValues.authors.map((author: IUser) => (
            <SearchListItem key={uuid()} onClick={() => handleSearchPosts(`${author.firstName} ${author.lastName}`, 'post')}>
              <SearchItem 
                image={author.userPhotoUrl!} 
                label={`${author.firstName} ${author.lastName}`} 
                altText={author.lastName} 
              />
            </SearchListItem>
          ))}
        </List>
      )}
    </Container>
  );
};

export default PostsSearch;