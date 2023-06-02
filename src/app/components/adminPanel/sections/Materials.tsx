import React from 'react';
import { MaterialFilters } from '../filters/';
import { MaterialsTable } from '../tables/MaterialsTable/';
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