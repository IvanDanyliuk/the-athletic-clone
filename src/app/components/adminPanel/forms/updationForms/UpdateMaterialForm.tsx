import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { selectMaterials } from '../../../../../features/materials/selectors';


const UpdateMaterialForm: React.FC = () => {
  const { id } = useParams();
  const materials = useSelector(selectMaterials);
  const materialToUpdate = materials.find(material => material._id === id);

  return (
    <div>NewMaterialForm</div>
  );
};

export default UpdateMaterialForm;