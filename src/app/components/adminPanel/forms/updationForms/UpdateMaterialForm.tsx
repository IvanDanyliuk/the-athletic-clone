import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { selectMaterials } from '../../../../../features/materials/selectors';
import { MaterialType } from '../../../../models/components';
import { ArticleForm, NoteForm, RealtimePostForm } from '../creationForms';


const UpdateMaterialForm: React.FC = () => {
  const { id } = useParams();
  const materials = useSelector(selectMaterials);
  const materialToUpdate = materials.find(material => material._id === id);

  return (
    <>
      {
        materialToUpdate?.type === MaterialType.article ? (
          <ArticleForm articleToUpdate={materialToUpdate} />
        ) : materialToUpdate?.type === MaterialType.note ? (
          <NoteForm noteToUpdate={materialToUpdate} />
        ) : (
          <RealtimePostForm postToUpdate={materialToUpdate} />
        )
      }
    </>
  );
};

export default UpdateMaterialForm;