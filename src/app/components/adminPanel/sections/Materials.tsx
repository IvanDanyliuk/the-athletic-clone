import React from 'react';
import MaterialFilters from '../filters/MaterialFilters';
import MaterialsTable from '../tables/MaterialsTable/MaterialsTable';
import MaterialsHeader from '../ui/MaterialsHeader';


const Materials: React.FC = () => {
  return (
    <>
      <MaterialsHeader />
      <MaterialFilters />
      <MaterialsTable />
    </>
  );
};

export default Materials;