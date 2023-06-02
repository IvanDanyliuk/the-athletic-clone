import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Paper, Table } from '@mui/material';
import { ClubsTableHead, ClubsTableBody, ClubsTableFooter } from './';
import { AppDispatch } from '../../../../../features/store';
import { 
  selectFilters, selectAllClubs, selectClubsCount, 
  selectClubsStatus, selectClubsError 
} from '../../../../../features/clubs/selectors';
import { getClubs } from '../../../../../features/clubs/asyncActions';
import { BackdropLoader, ErrorSnackbar } from '../../../ui/';
import { IClubsTableHeadCell, Order } from '../../../../../features/clubs/types';
import { clearError } from '../../../../../features/clubs/reducers';


const ClubsTable: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const clubs = useSelector(selectAllClubs);
  const pageCount = useSelector(selectClubsCount);
  const filterData = useSelector(selectFilters);
  const status = useSelector(selectClubsStatus);
  const error = useSelector(selectClubsError);

  const [page, setPage] = useState<number>(0);
  const [activeCell, setActiveCell] = useState<IClubsTableHeadCell | null>(null);
  const [isErrorSnackbarOpen, setIsErrorSnackbarOpen] = useState<boolean>(false);

  const handleDataSort = (data: IClubsTableHeadCell) => {
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
    dispatch(getClubs({
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
        <ClubsTableHead 
          activeCell={activeCell} 
          onSort={handleDataSort} 
        />
        <ClubsTableBody 
          clubs={clubs} 
          page={page} 
          itemsPerPage={10}
        />
        <ClubsTableFooter 
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

export default ClubsTable;