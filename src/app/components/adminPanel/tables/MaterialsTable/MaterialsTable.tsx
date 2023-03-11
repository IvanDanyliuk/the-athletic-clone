import { Table } from '@mui/material';
import React from 'react';
import { MaterialModel } from '../../../../models/components';
import MaterialsTableHead from './MaterialsTableHead';


interface IMaterialsTableProps {
  materials: MaterialModel[],
  onEdit: () => void,
  onDelete: () => void
}

const MaterialsTable: React.FC<IMaterialsTableProps> = ({ materials, onEdit, onDelete }) => {
  return (
    <Table>
      <MaterialsTableHead />
    </Table>
  );
};

export default MaterialsTable;