import React from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { selectContent } from '../../../../../features/content/selectors';
import { ContentForm } from '../creationForms';


const UpdateContentSection: React.FC = () => {
  const { id } = useParams();
  const sections = useSelector(selectContent);
  const sectionToUpdate = sections.find(section => section._id === id);

  return (
    <ContentForm sectionToUpdate={sectionToUpdate} />
  );
};

export default UpdateContentSection;