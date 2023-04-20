import React, { useEffect } from 'react';
import SubPageHeader from '../ui/SubPageHeader';
import { useDispatch, useSelector } from 'react-redux';
import { selectContent } from '../../../../features/content/selectors';
import { AppDispatch } from '../../../../features/store';
import { getContentSections } from '../../../../features/content/asyncActions';
import ContentSectionsList from '../content/ContentSectionsList';


const Content: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const contentSections = useSelector(selectContent);

  useEffect(() => {
    dispatch(getContentSections());
  }, []);

  return (
    <>
      <SubPageHeader 
        title='Content'
        link='content/new-content-section'
      />
      <ContentSectionsList 
        sections={contentSections}
      />
    </>
  );
};

export default Content;