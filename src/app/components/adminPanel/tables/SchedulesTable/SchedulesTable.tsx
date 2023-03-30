import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Paper, Table } from '@mui/material';
import SchedulesTableHead from './SchedulesTableHead';
import { AppDispatch } from '../../../../../features/store';
import { selectSchedulesFilters, selectAllSchedules, selectSchedulesCount } from '../../../../../features/schedules/selectors';
import { getSchedules } from '../../../../../features/schedules/asyncActions';
import SchedulesTableBody from './SchedulesTableBody';
import SchedulesTableFooter from './SchedulesTableFooter';
import BackdropLoader from '../../../ui/BackdropLoader';
import { ISchedulesTableHeadCell, Order } from '../../../../../features/schedules/types';


const SchedulesTable: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const schedules = useSelector(selectAllSchedules);
  const pageCount = useSelector(selectSchedulesCount);
  const filterData = useSelector(selectSchedulesFilters);

  const [page, setPage] = useState<number>(0);
  const [activeCell, setActiveCell] = useState<ISchedulesTableHeadCell | null>(null);

  const handleDataSort = (data: ISchedulesTableHeadCell) => {
    if(!activeCell || activeCell.sortKey !== data.sortKey) {
      setActiveCell({
        ...data,
        order: Order.desc
      });
    }
    if(activeCell?.sortKey === data.sortKey && activeCell?.order === Order.desc) {
      setActiveCell({
        ...data,
        order: Order.asc
      });
    }
    if(activeCell?.sortKey === data.sortKey && activeCell?.order === Order.asc) {
      setActiveCell({
        ...data,
        order: Order.desc
      });
    }
  };

  const handleCurrentPageChange = (e: unknown, newPage: number) => {
    setPage(newPage);
  };

  useEffect(() => {
    dispatch(getSchedules({
      page, 
      itemsPerPage: 10, 
      filterData: filterData,
      sortData: activeCell ? { 
        indicator: activeCell?.sortKey!, 
        order: activeCell?.order! 
        } : null
    }));
  }, [dispatch, page, activeCell, filterData]);

  if(!schedules) {
    return (
      <BackdropLoader open={true} />
    );
  }

  return (
    <Paper sx={{ maxWidth: '100%', overflow: 'auto' }}>
      <Table stickyHeader>
        <SchedulesTableHead 
          activeCell={activeCell} 
          onSort={handleDataSort} 
        />
        <SchedulesTableBody 
          schedules={schedules} 
          page={page} 
          itemsPerPage={10}
        />
        <SchedulesTableFooter 
          pageCount={pageCount} 
          page={page} 
          onPageChange={handleCurrentPageChange} 
        />
      </Table>
    </Paper>
  );
};

export default SchedulesTable;