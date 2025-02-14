import React from 'react';
import { SchedulesFilters } from '../filters/';
import SubPageHeader from '../ui/SubPageHeader';
import { SchedulesTable } from '../tables/SchedulesTable/';


const Schedules: React.FC = () => {
  return (
    <>
      <SubPageHeader 
        title='Schedules' 
        link='schedules/new-schedule' 
      />
      <SchedulesFilters />
      <SchedulesTable />
    </>
  );
};

export default Schedules;