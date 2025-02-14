import React from 'react';
import { CompetitionsFilters } from '../filters/';
import { CompetitionsTable } from '../tables/CompetitionsTable/';
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