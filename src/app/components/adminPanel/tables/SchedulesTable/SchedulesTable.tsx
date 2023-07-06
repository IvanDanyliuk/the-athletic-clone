import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Paper, Table } from '@mui/material';
import { SchedulesTableHead, SchedulesTableBody, SchedulesTableFooter } from './';
import { AppDispatch } from '../../../../../features/store';
import { 
  selectSchedulesFilters, selectAllSchedules, selectSchedulesCount, 
  selectSchedulesStatus, selectSchedulesError 
} from '../../../../../features/schedules/selectors';
import { getSchedules } from '../../../../../features/schedules/asyncActions';
import { BackdropLoader, ErrorSnackbar } from '../../../ui/';
import { ISchedulesTableHeadCell } from '../../../../../features/schedules/types';
import { clearError } from '../../../../../features/schedules/reducers';
import { Order, StateStatus } from '../../../../../features/types';


const SchedulesTable: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const schedules = useSelector(selectAllSchedules);
  const pageCount = useSelector(selectSchedulesCount);
  const filterData = useSelector(selectSchedulesFilters);
  const status = useSelector(selectSchedulesStatus);
  const error = useSelector(selectSchedulesError);

  const [page, setPage] = useState<number>(0);
  const [activeCell, setActiveCell] = useState<ISchedulesTableHeadCell | null>(null);
  const [isErrorSnackbarOpen, setIsErrorSnackbarOpen] = useState<boolean>(false);

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

  const handleErrorSnackbarClose = () => {
    setIsErrorSnackbarOpen(false);
    dispatch(clearError());
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

  useEffect(() => {
    if(error) {
      setIsErrorSnackbarOpen(true);
    }
  }, [error]);

  if(status === StateStatus.Loading) {
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
      <ErrorSnackbar
        isOpen={isErrorSnackbarOpen}
        message={error}
        onClose={handleErrorSnackbarClose}
      />
    </Paper>
  );
};

export default SchedulesTable;