import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Paper, Table } from '@mui/material';
import CompetitionsTableHead from './CompetitionsTableHead';
import { AppDispatch } from '../../../../../features/store';
import { 
  selectCompetitionsFilters, selectAllCompetitions, selectCompetitionsCount, 
  selectCompetitionsStatus, selectCompetitionsError 
} from '../../../../../features/competitions/selectors';
import CompetitionsTableBody from './CompetitionsTableBody';
import CompetitionsTableFooter from './CompetitionsTableFooter';
import BackdropLoader from '../../../ui/BackdropLoader';
import { ICompetitionsTableHeadCell, Order } from '../../../../../features/competitions/types';
import { getCompetitions } from '../../../../../features/competitions/asyncActions';
import { clearError } from '../../../../../features/competitions/reducers';
import ErrorSnackbar from '../../../ui/ErrorSnackbar';


const CompetitionsTable: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const competitons = useSelector(selectAllCompetitions);
  const pageCount = useSelector(selectCompetitionsCount);
  const filterData = useSelector(selectCompetitionsFilters);
  const status = useSelector(selectCompetitionsStatus);
  const error = useSelector(selectCompetitionsError);

  const [page, setPage] = useState<number>(0);
  const [activeCell, setActiveCell] = useState<ICompetitionsTableHeadCell | null>(null);
  const [isErrorSnackbarOpen, setIsErrorSnackbarOpen] = useState<boolean>(false);

  const handleDataSort = (data: ICompetitionsTableHeadCell) => {
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
    dispatch(getCompetitions({
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
  
  if(status === 'loading') {
    return (
      <BackdropLoader open={true} />
    );
  }

  return (
    <Paper sx={{ maxWidth: '100%', overflow: 'auto' }}>
      <Table stickyHeader>
        <CompetitionsTableHead 
          activeCell={activeCell} 
          onSort={handleDataSort} 
        />
        <CompetitionsTableBody 
          competitions={competitons} 
          page={page} 
          itemsPerPage={10}
        />
        <CompetitionsTableFooter 
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

export default CompetitionsTable;