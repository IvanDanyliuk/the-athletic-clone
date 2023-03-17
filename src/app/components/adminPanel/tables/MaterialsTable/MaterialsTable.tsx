import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Paper, Table } from '@mui/material';
import MaterialsTableHead from './MaterialsTableHead';
import { AppDispatch } from '../../../../../features/store';
import { selectFilters, selectMaterials, selectMaterialsCount, selectMaterialsStatus } from '../../../../../features/materials/selectors';
import { getAllMaterials } from '../../../../../features/materials/asyncActions';
import MaterialTableBody from './MaterialTableBody';
import MaterialsTableFooter from './MaterialsTableFooter';
import BackdropLoader from '../../../ui/BackdropLoader';
import { IMaterialsTableHeadCell, Order } from '../../../../../features/materials/types';


const MaterialsTable: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const materials = useSelector(selectMaterials);
  const pageCount = useSelector(selectMaterialsCount);
  const status = useSelector(selectMaterialsStatus);
  const filterData = useSelector(selectFilters);

  const [page, setPage] = useState<number>(0);
  const [activeCell, setActiveCell] = useState<IMaterialsTableHeadCell | null>(null);

  const handleDataSort = (data: IMaterialsTableHeadCell) => {
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
    dispatch(getAllMaterials({
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
        <MaterialsTableHead 
          activeCell={activeCell} 
          onSort={handleDataSort} 
        />
        <MaterialTableBody 
          materials={materials} 
          page={page} 
          itemsPerPage={10}
        />
        <MaterialsTableFooter 
          pageCount={pageCount} 
          page={page} 
          onPageChange={handleCurrentPageChange} 
        />
      </Table>
    </Paper>
  );
};

export default MaterialsTable;