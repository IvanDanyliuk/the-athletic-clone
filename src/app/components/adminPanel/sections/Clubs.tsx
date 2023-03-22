import React from 'react';
import ClubsFilters from '../filters/ClubsFilters';
import ClubsTable from '../tables/ClubsTable/ClubsTable';
import SubPageHeader from '../ui/SubPageHeader';


const Clubs: React.FC = () => {
  return (
    <>
      <SubPageHeader 
        title='Clubs' 
        link='new-club' 
      />
      <ClubsFilters />
      <ClubsTable />
    </>
  );
};

export default Clubs;