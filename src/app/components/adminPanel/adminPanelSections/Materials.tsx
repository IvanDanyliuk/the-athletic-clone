import React from 'react';
import { Box, styled, Typography } from '@mui/material';
import MaterialsTable from '../tables/MaterialsTable';
import { materials } from '../../../../data';


const Container = styled(Box)`
  padding: 1em 0;
  width: 100%;
  min-height: 93vh;
`;

const Materials: React.FC = () => {
  const data = materials;

  const handleMaterialEdit = () => {

  };

  const handleMaterialDelete = () => {

  };

  return (
    <Container>
      <Typography variant='h4'>Materials</Typography>
      <MaterialsTable 
        materials={data} 
        onEdit={handleMaterialEdit} 
        onDelete={handleMaterialDelete} 
      />
    </Container>
  );
};

export default Materials;