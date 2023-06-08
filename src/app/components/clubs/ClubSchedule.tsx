import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '../../../features/store';
import { selectClub } from '../../../features/clubs/selectors';
import { selectAllSchedules } from '../../../features/schedules/selectors';
import { getCurrentSeasonValue } from '../../utils/helpers';
import { getSchedulesByClub } from '../../../features/schedules/asyncActions';
import { Table, TableCell, TableHead, TableRow } from '@mui/material';


const ClubSchedule: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();

  const club = useSelector(selectClub);
  const season = getCurrentSeasonValue();
  const schedules = useSelector(selectAllSchedules);

  console.log(schedules)
  
  useEffect(() => {
    if(club) {
      dispatch(getSchedulesByClub({ season, clubId: club?._id! }));
    }
  }, [club, season, dispatch]);

  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Date</TableCell>
          <TableCell>Opponent</TableCell>
          <TableCell>Result</TableCell>
          <TableCell>Competition</TableCell>   
          <TableCell>Location</TableCell>   
          <TableCell></TableCell>   
          <TableCell></TableCell>   
        </TableRow>
      </TableHead>
    </Table>
  );
};

export default ClubSchedule;