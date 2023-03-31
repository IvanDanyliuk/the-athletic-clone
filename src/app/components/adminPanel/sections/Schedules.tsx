import React from 'react';
import SchedulesFilters from '../filters/SchedulesFilters';
import SchedulesTable from '../tables/SchedulesTable/SchedulesTable';
import SubPageHeader from '../ui/SubPageHeader';


const Schedules: React.FC = () => {
  return (
    <>
      <SubPageHeader 
        title='Schedules' 
        link='new-schedule' 
      />
      <SchedulesFilters />
      <SchedulesTable />
    </>
  );
};

export default Schedules;