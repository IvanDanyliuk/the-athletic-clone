import React from 'react';
import MaterialsTable from '../tables/MaterialsTable';
import { materials } from '../../../../data';
import SubPageHeader from '../ui/SubPageHeader';


const Materials: React.FC = () => {
  const data = materials;

  const handleMaterialEdit = () => {

  };

  const handleMaterialDelete = () => {

  };

  return (
    <>
      <SubPageHeader 
        title='Materials' 
        link='new-material' 
      />
      <MaterialsTable 
        materials={data} 
        onEdit={handleMaterialEdit} 
        onDelete={handleMaterialDelete} 
      />
    </>
  );
};

export default Materials;