import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { selectMaterials } from '../../../../../features/materials/selectors';
import { ArticleForm } from '../creationForms';


const UpdateMaterialForm: React.FC = () => {
  const { id } = useParams();
  const materials = useSelector(selectMaterials);
  const materialToUpdate = materials.find(material => material._id === id);

  return (
    <>
      {
        materialToUpdate?.type === 'article' && (
          <ArticleForm articleToUpdate={materialToUpdate} />
        )
      }
    </>
  );
};

export default UpdateMaterialForm;