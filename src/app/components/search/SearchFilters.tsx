import React, { useState } from 'react';
import { 
  Box, Checkbox, Dialog, DialogContent, DialogTitle, Divider, 
  Icon, IconButton, List, ListItem, ListItemButton, ListItemIcon, 
  ListItemText, Typography, styled, useMediaQuery 
} from '@mui/material';
import { Close, ExpandMore } from '@mui/icons-material';
import { v4 as uuid} from 'uuid';
import { ICompetition } from '../../../features/competitions/types';


interface ISearchFiltersProps {
  authors: {
    name: string;
    userId: string;
  }[];
  leagues: ICompetition[];
  checkedLabels: string[];
  onSetFilterData: (label: string) => void;
}

const Container = styled(Box)`
  padding: 1em 0;
  @media (max-width: 640px) {
    padding: 0;
  }
`;

const MobileFiltersContainer = styled(Box)`
  display: flex;
  justify-content: center;
`;

const FilterListItem = styled(ListItem)`
  padding: 0;
`;

const FilterListItemButton = styled(ListItemButton)`
  padding: .5em 0;
`;

const ListDivider = styled(Divider)`
  margin: 1em 0;
`;


const SearchFilters: React.FC<ISearchFiltersProps> = ({ authors, leagues, checkedLabels, onSetFilterData }) => {
  const isMobile = useMediaQuery('(max-width:640px)');
  const [isMobileFiltersOpen, setIsMobileFiltersOpen] = useState<boolean>(false);

  const handleFiltersMobileOpen = () => {
    setIsMobileFiltersOpen(!isMobileFiltersOpen);
  };

  return (
    <Container>
      {isMobile ? (
        <MobileFiltersContainer>
          <IconButton onClick={handleFiltersMobileOpen}>
            <Icon component={ExpandMore} />
          </IconButton>
          <Dialog open={isMobileFiltersOpen} onClose={handleFiltersMobileOpen}>
            <DialogTitle display='flex' justifyContent='flex-end'>
              <IconButton onClick={handleFiltersMobileOpen}>
                <Icon component={Close} />
              </IconButton>
            </DialogTitle>
            <DialogContent sx={{ padding: '0 3em' }}>
              <List subheader={<Typography variant='h2_custom'>Authors</Typography>}>
                {authors.map(author => (
                  <FilterListItem key={uuid()}>
                    <FilterListItemButton role={undefined} onClick={() => onSetFilterData(author.userId)} dense>
                      <ListItemText id={author.userId} primary={author.name} />
                      <ListItemIcon>
                        <Checkbox 
                          checked={checkedLabels.includes(author.userId)} 
                        />
                      </ListItemIcon>
                    </FilterListItemButton>
                  </FilterListItem>
                ))}
              </List>
              <ListDivider orientation='horizontal' flexItem />
              <List subheader={<Typography variant='h2_custom'>Leagues</Typography>}>
                {leagues.map(league => (
                  <FilterListItem key={uuid()}>
                    <FilterListItemButton role={undefined} onClick={() => onSetFilterData(league.fullName)} dense>
                      <ListItemText id={league.fullName} primary={league.fullName} />
                      <ListItemIcon>
                        <Checkbox 
                          checked={checkedLabels.includes(league.fullName)} 
                        />
                      </ListItemIcon>
                    </FilterListItemButton>
                  </FilterListItem>
                ))}
              </List>
            </DialogContent>
          </Dialog>
        </MobileFiltersContainer>
      ) : (
        <>
          <List subheader={<Typography variant='h2_custom'>Authors</Typography>}>
            {authors.map(author => (
              <FilterListItem key={uuid()}>
                <FilterListItemButton role={undefined} onClick={() => onSetFilterData(author.userId)} dense>
                  <ListItemText id={author.userId} primary={author.name} />
                  <ListItemIcon>
                    <Checkbox 
                      checked={checkedLabels.includes(author.userId)} 
                    />
                  </ListItemIcon>
                </FilterListItemButton>
              </FilterListItem>
            ))}
          </List>
          <ListDivider orientation='horizontal' flexItem />
          <List subheader={<Typography variant='h2_custom'>Leagues</Typography>}>
            {leagues.map(league => (
              <FilterListItem key={uuid()}>
                <FilterListItemButton role={undefined} onClick={() => onSetFilterData(league.fullName)} dense>
                  <ListItemText id={league.fullName} primary={league.fullName} />
                  <ListItemIcon>
                    <Checkbox 
                      checked={checkedLabels.includes(league.fullName)} 
                    />
                  </ListItemIcon>
                </FilterListItemButton>
              </FilterListItem>
            ))}
          </List>
        </>
      )}
    </Container>
  );
};

export default SearchFilters;