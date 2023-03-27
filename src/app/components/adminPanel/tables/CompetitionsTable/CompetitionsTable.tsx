import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Paper, Table } from '@mui/material';
import CompetitionsTableHead from './CompetitionsTableHead';
import { AppDispatch } from '../../../../../features/store';
import { selectCompetitionsFilters, selectAllCompetitions, selectCompetitionsCount, selectCompetitionsStatus } from '../../../../../features/competitions/selectors';
import CompetitionsTableBody from './CompetitionsTableBody';
import CompetitionsTableFooter from './CompetitionsTableFooter';
import BackdropLoader from '../../../ui/BackdropLoader';
import { ICompetitionsTableHeadCell, Order } from '../../../../../features/competitions/types';
import { getCompetitions } from '../../../../../features/competitions/asyncActions';


const CompetitionsTable: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const competitons = useSelector(selectAllCompetitions);
  const pageCount = useSelector(selectCompetitionsCount);
  const status = useSelector(selectCompetitionsStatus);
  const filterData = useSelector(selectCompetitionsFilters);

  const [page, setPage] = useState<number>(0);
  const [activeCell, setActiveCell] = useState<ICompetitionsTableHeadCell | null>(null);

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
          clubs={competitons} 
          page={page} 
          itemsPerPage={10}
        />
        <CompetitionsTableFooter 
          pageCount={pageCount} 
          page={page} 
          onPageChange={handleCurrentPageChange} 
        />
      </Table>
    </Paper>
  );
};

export default CompetitionsTable;