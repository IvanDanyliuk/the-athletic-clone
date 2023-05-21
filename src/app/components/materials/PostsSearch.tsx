import React, { useState } from 'react';
import { Box, Button, Icon, IconButton, TextField, Typography, styled } from '@mui/material';
import { ChevronLeft, Search, TrendingUp } from '@mui/icons-material';


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
  height: 4em;
  text-transform: none;
  color: #121212;

  svg {
    margin-right: 1em;
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


const PostsSearch: React.FC = () => {
  const [isSearchModeActive, setIsSearchModeActive] = useState<boolean>(false);
  const [searchRequest, setSearchRequest] = useState<string>('');

  const handleSearchMode = () => {
    setIsSearchModeActive(!isSearchModeActive);
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTimeout(() => {
      console.log(e.target.value)
    }, 1000)
  }

  return (
    <Container>
      <SearchSection>
        {isSearchModeActive ? (
          <>
            <IconButton onClick={handleSearchMode}>
              <Icon component={ChevronLeft} />
            </IconButton>
            <SearchField variant='standard' onChange={handleSearch} />
          </>
        ) : (
          <>
            <Label variant='h2_custom'>Filter by</Label>
            <IconButton value={searchRequest} onClick={handleSearchMode}>
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
    </Container>
  );
};

export default PostsSearch;