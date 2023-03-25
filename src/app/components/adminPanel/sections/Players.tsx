import React from 'react';
import PlayersTable from '../tables/PlayersTable/PlayersTable';
import SubPageHeader from '../ui/SubPageHeader';


const Players: React.FC = () => {
  return (
    <>
      <SubPageHeader 
        title='Players' 
        link='new-player' 
      />
      <PlayersTable />
    </>
  );
};

export default Players;