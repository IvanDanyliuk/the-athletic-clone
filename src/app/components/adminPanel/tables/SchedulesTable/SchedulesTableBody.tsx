import React from 'react';
import { useDispatch } from 'react-redux';
import { TableBody, TableCell, TableRow } from '@mui/material';
import { v4 as uuid } from 'uuid';
import RowActionButtons, { EssenseType } from '../../ui/RowActionButtons';
import { AppDispatch } from '../../../../../features/store';
import { deleteSchedule } from '../../../../../features/schedules/asyncActions';
import { ISchedule } from '../../../../../features/schedules/types';


interface ISchedulesTableBodyProps {
  schedules: ISchedule[],
  page: number,
  itemsPerPage: number
}


const SchedulesTableBody: React.FC<ISchedulesTableBodyProps> = ({ schedules, page, itemsPerPage }) => {
  const dispatch = useDispatch<AppDispatch>();

  const handleScheduleDelete = (id: string) => {
    dispatch(deleteSchedule({ id, page, itemsPerPage }));
  };

  return (
    <TableBody>
      {
        schedules.map(({ _id, competition, season, createdAt }) => (
          <TableRow key={uuid()}>
            <TableCell>{competition.fullName}</TableCell>
            <TableCell>{competition.type}</TableCell>
            <TableCell>{competition.country}</TableCell>
            <TableCell>{competition.clubs.length}</TableCell>
            <TableCell>{season}</TableCell>
            <TableCell>{createdAt}</TableCell>
            <TableCell>
              <RowActionButtons 
                id={_id} 
                type={EssenseType.players}
                onDelete={() => handleScheduleDelete(_id)} 
              />
            </TableCell>
          </TableRow>
        ))
      }
    </TableBody>
  );
};

export default SchedulesTableBody;