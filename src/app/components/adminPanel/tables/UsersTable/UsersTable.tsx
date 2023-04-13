import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Paper, Table } from '@mui/material';
import UsersTableHead from './UsersTableHead';
import { AppDispatch } from '../../../../../features/store';
import { selectUserFilters, selectAllUsers, selectAllUsersCount, selectUserStatus } from '../../../../../features/users/selectors';
import { getUsers } from '../../../../../features/users/asyncActions';
import UsersTableBody from './UsersTableBody';
import UsersTableFooter from './UsersTableFooter';
import BackdropLoader from '../../../ui/BackdropLoader';
import { IUsersTableHeadCell, Order } from '../../../../../features/users/types';


const UsersTable: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const users = useSelector(selectAllUsers);
  const pageCount = useSelector(selectAllUsersCount);
  const filterData = useSelector(selectUserFilters);
  const status = useSelector(selectUserStatus);

  const [page, setPage] = useState<number>(0);
  const [activeCell, setActiveCell] = useState<IUsersTableHeadCell | null>(null);

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

  if(status === 'loading') {
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
    </Paper>
  );
};

export default UsersTable;