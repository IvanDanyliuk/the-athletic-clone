import React from 'react';
import { Box, Checkbox, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography, styled } from '@mui/material';
import { v4 as uuid} from 'uuid';
import { ICompetition } from '../../../features/competitions/types';



interface ISearchFiltersProps {
  authors: string[];
  leagues: ICompetition[];
  checkedLabels: string[];
  onSetFilterData: (label: string) => void;
}

const Container = styled(Box)`
  padding: 1em 0;
`;

const FilterListItem = styled(ListItem)`
  padding: 0;
`;


const SearchFilters: React.FC<ISearchFiltersProps> = ({ authors, leagues, checkedLabels, onSetFilterData }) => {
  return (
    <Container>
      <List subheader={<Typography variant='h2_custom'>Authors</Typography>}>
        {authors.map(author => (
          <FilterListItem key={uuid()}>
            <ListItemButton role={undefined} onClick={() => onSetFilterData(author)} dense>
              <ListItemText id={author} primary={author} />
              <ListItemIcon>
                <Checkbox 
                  checked={checkedLabels.includes(author)} 
                />
              </ListItemIcon>
            </ListItemButton>
          </FilterListItem>
        ))}
      </List>
      <List subheader={<Typography variant='h2_custom'>Leagues</Typography>}>
        {leagues.map(league => (
          <FilterListItem key={uuid()}>
            <ListItemButton role={undefined} onClick={() => onSetFilterData(league.fullName)} dense>
              <ListItemText id={league.fullName} primary={league.fullName} />
              <ListItemIcon>
                <Checkbox 
                  checked={checkedLabels.includes(league.fullName)} 
                />
              </ListItemIcon>
            </ListItemButton>
          </FilterListItem>
        ))}
      </List>
    </Container>
  );
};

export default SearchFilters;