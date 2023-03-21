import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Paper, Table } from '@mui/material';
import ClubsTableHead from './ClubsTableHead';
import { AppDispatch } from '../../../../../features/store';
import { selectFilters, selectAllClubs, selectClubsCount, selectClubsStatus } from '../../../../../features/clubs/selectors';
import { getAllClubs } from '../../../../../features/clubs/asyncActions';
import ClubsTableBody from './ClubsTableBody';
import ClubsTableFooter from './ClubsTableFooter';
import BackdropLoader from '../../../ui/BackdropLoader';
import { IClubsTableHeadCell, Order } from '../../../../../features/clubs/types';


const ClubsTable: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const clubs = useSelector(selectAllClubs);
  const pageCount = useSelector(selectClubsCount);
  const status = useSelector(selectClubsStatus);
  const filterData = useSelector(selectFilters);

  const [page, setPage] = useState<number>(0);
  const [activeCell, setActiveCell] = useState<IClubsTableHeadCell | null>(null);

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

  useEffect(() => {
    dispatch(getAllClubs({
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
    </Paper>
  );
};

export default ClubsTable;