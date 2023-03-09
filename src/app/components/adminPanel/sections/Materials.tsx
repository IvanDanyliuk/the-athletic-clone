import React from 'react';
import MaterialsTable from '../tables/MaterialsTable';
import MaterialsHeader from '../ui/MaterialsHeader';

import { materials } from '../../../../data';


const Materials: React.FC = () => {
  const data = materials;

  const handleMaterialEdit = () => {

  };

  const handleMaterialDelete = () => {

  };

  return (
    <>
      <MaterialsHeader />
      <MaterialsTable 
        materials={data} 
        onEdit={handleMaterialEdit} 
        onDelete={handleMaterialDelete} 
      />
    </>
  );
};

export default Materials;