import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { selectAllSchedules } from '../../../../../features/schedules/selectors';
import { ScheduleForm } from '../creationForms';


const NewScheduleForm: React.FC = () => {
  const { id } = useParams();
  const schedules = useSelector(selectAllSchedules);
  const scheduleToUpdate = schedules.find(schedule => schedule._id === id);

  return (
    <ScheduleForm scheduleToUpdate={scheduleToUpdate} />
  );
};

export default NewScheduleForm;