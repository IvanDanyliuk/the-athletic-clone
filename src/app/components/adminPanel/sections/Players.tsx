import React from 'react';
import { PlayersFilters } from '../filters/';
import { PlayersTable } from '../tables/PlayersTable/';
import SubPageHeader from '../ui/SubPageHeader';


const Players: React.FC = () => {
  return (
    <>
      <SubPageHeader 
        title='Players' 
        link='players/new-player' 
      />
      <PlayersFilters />
      <PlayersTable />
    </>
  );
};

export default Players;