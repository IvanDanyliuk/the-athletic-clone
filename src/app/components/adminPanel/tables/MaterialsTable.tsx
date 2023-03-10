import React from 'react';
import { MaterialModel } from '../../../models/components';


interface IMaterialsTableProps {
  materials: MaterialModel[],
  onEdit: () => void,
  onDelete: () => void
}

const MaterialsTable: React.FC<IMaterialsTableProps> = ({ materials, onEdit, onDelete }) => {
  return (
    <div>MaterialsTable</div>
  );
};

export default MaterialsTable;