import React from 'react';
import SchedulesTable from '../tables/SchedulesTable/SchedulesTable';
import SubPageHeader from '../ui/SubPageHeader';


const Schedules: React.FC = () => {
  return (
    <>
      <SubPageHeader 
        title='Schedules' 
        link='new-schedule' 
      />
      <SchedulesTable />
    </>
  );
};

export default Schedules;