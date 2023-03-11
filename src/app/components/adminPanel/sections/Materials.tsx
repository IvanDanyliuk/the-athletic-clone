import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllMaterials } from '../../../../features/materials/asyncActions';
import { selectMaterials } from '../../../../features/materials/selectors';
import { AppDispatch } from '../../../../features/store';
import MaterialsTable from '../tables/MaterialsTable/MaterialsTable';
import MaterialsHeader from '../ui/MaterialsHeader';


const Materials: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const materials = useSelector(selectMaterials);
  const [page, setPage] = useState<number>(1);

  const handleMaterialEdit = () => {

  };

  const handleMaterialDelete = () => {

  };

  useEffect(() => {
    dispatch(getAllMaterials({page, itemsPerPage: 10}));
  }, [dispatch, page]);

  return (
    <>
      <MaterialsHeader />
      <MaterialsTable 
        materials={materials} 
        onEdit={handleMaterialEdit} 
        onDelete={handleMaterialDelete} 
      />
    </>
  );
};

export default Materials;