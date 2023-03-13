import React from 'react';
import MaterialsTable from '../tables/MaterialsTable/MaterialsTable';
import MaterialsHeader from '../ui/MaterialsHeader';


const Materials: React.FC = () => {
  return (
    <>
      <MaterialsHeader />
      <MaterialsTable />
    </>
  );
};

export default Materials;