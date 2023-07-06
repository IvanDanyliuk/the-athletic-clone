import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Paper, Table } from '@mui/material';
import { UsersTableHead, UsersTableBody, UsersTableFooter } from './';
import { AppDispatch } from '../../../../../features/store';
import { 
  selectUserFilters, selectAllUsers, 
  selectAllUsersCount, selectUserStatus, selectUserError 
} from '../../../../../features/users/selectors';
import { getUsers } from '../../../../../features/users/asyncActions';
import { BackdropLoader, ErrorSnackbar } from '../../../ui/';
import { IUsersTableHeadCell } from '../../../../../features/users/types';
import { clearError } from '../../../../../features/users/reducers';
import { Order, StateStatus } from '../../../../../features/types';


const UsersTable: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const users = useSelector(selectAllUsers);
  const pageCount = useSelector(selectAllUsersCount);
  const filterData = useSelector(selectUserFilters);
  const status = useSelector(selectUserStatus);
  const error = useSelector(selectUserError);

  const [page, setPage] = useState<number>(0);
  const [activeCell, setActiveCell] = useState<IUsersTableHeadCell | null>(null);
  const [isErrorSnackbarOpen, setIsErrorSnackbarOpen] = useState<boolean>(false);

  const handleDataSort = (data: IUsersTableHeadCell) => {
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
    dispatch(getUsers({
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
        <UsersTableHead 
          activeCell={activeCell} 
          onSort={handleDataSort} 
        />
        <UsersTableBody 
          users={users} 
          page={page} 
          itemsPerPage={10}
        />
        <UsersTableFooter 
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

export default UsersTable;