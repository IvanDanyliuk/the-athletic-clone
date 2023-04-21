import React from 'react';
import CompetitionsFilters from '../filters/CompetitionsFilters';
import CompetitionsTable from '../tables/CompetitionsTable/CompetitionsTable';
import SubPageHeader from '../ui/SubPageHeader';


const Competitions: React.FC = () => {
  return (
    <>
      <SubPageHeader 
        title='Competitions' 
        link='competitions/new-competition' 
      />
      <CompetitionsFilters />
      <CompetitionsTable />
    </>
  );
};

export default Competitions;