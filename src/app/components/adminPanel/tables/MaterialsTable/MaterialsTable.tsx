import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Table } from '@mui/material';
import MaterialsTableHead from './MaterialsTableHead';
import { AppDispatch } from '../../../../../features/store';
import { selectMaterials, selectMaterialsCount, selectMaterialsStatus } from '../../../../../features/materials/selectors';
import { getAllMaterials } from '../../../../../features/materials/asyncActions';
import MaterialTableBody from './MaterialTableBody';
import MaterialsTableFooter from './MaterialsTableFooter';
import BackdropLoader from '../../../ui/BackdropLoader';


enum Order {
  asc = 'asc',
  desc = 'desc'
}

interface ITableHeadCell {
  title: string,
  isSortable: boolean,
  sortKey?: string,
  order?: Order
}


const MaterialsTable: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const materials = useSelector(selectMaterials);
  const pageCount = useSelector(selectMaterialsCount);
  const status = useSelector(selectMaterialsStatus);

  const [page, setPage] = useState<number>(0);
  const [activeCell, setActiveCell] = useState<ITableHeadCell | null>(null);

  const handleDataSort = (data: ITableHeadCell) => {
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
    if(activeCell) {
      dispatch(getAllMaterials({
        page, 
        itemsPerPage: 10, 
        sortData: { 
          indicator: activeCell?.sortKey!, 
          order: activeCell?.order! 
        }
      }));
    } else {
      dispatch(getAllMaterials({
        page, 
        itemsPerPage: 10 
      }));
    }
  }, [dispatch, page, activeCell]);

  if(status === 'loading') {
    return (
      <BackdropLoader open={true} />
    );
  }

  return (
    <Table>
      <MaterialsTableHead 
        activeCell={activeCell} 
        onSort={handleDataSort} 
      />
      <MaterialTableBody 
        materials={materials} 
        page={page} 
        itemsPerPage={10}
      />
      <MaterialsTableFooter pageCount={pageCount} page={page} onPageChange={handleCurrentPageChange} />
    </Table>
  );
};

export default MaterialsTable;