import React from 'react';
import { Box, styled, Typography } from '@mui/material';
import AddNewMaterialButtonMenu from './AddNewMaterialButtonMenu';


const Container = styled(Box)`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const navLinks = [
  { url: '/admin/materials/new-article', label: 'Article' },
  { url: '/admin/materials/new-note', label: 'Note' },
  { url: '/admin/materials/new-realtime-post', label: 'Realtime' }
];


const MaterialsHeader: React.FC = () => {
  return (
    <Container>
      <Typography variant='h3'>Materials</Typography>
      <AddNewMaterialButtonMenu links={navLinks} />
    </Container>
  );
};

export default MaterialsHeader;