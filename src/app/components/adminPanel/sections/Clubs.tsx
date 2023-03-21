import React from 'react';
import ClubsTable from '../tables/ClubsTable/ClubsTable';
import SubPageHeader from '../ui/SubPageHeader';


const Clubs: React.FC = () => {
  return (
    <>
      <SubPageHeader 
        title='Clubs' 
        link='new-club' 
      />
      <ClubsTable />
    </>
  );
};

export default Clubs;