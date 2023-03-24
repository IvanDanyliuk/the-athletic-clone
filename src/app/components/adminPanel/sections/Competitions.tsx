import React from 'react';
import CompetitionsTable from '../tables/CompetitionsTable/CompetitionsTable';
import SubPageHeader from '../ui/SubPageHeader';


const Competitions: React.FC = () => {
  return (
    <>
      <SubPageHeader 
        title='Competitions' 
        link='new-competition' 
      />
      <CompetitionsTable />
    </>
  );
};

export default Competitions;