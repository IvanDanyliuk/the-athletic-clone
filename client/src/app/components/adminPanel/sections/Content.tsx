import React, { useEffect } from 'react';
import SubPageHeader from '../ui/SubPageHeader';
import { useDispatch, useSelector } from 'react-redux';
import { selectContent } from '../../../../features/content/selectors';
import { AppDispatch } from '../../../../features/store';
import { getContentSections } from '../../../../features/content/asyncActions';
import { ContentMainArticle, ContentSectionsList } from '../content/';
import { selectHomepageSecondaryMaterials } from '../../../../features/materials/selectors';
import { getHomepageSecondaryMaterials } from '../../../../features/materials/asyncActions';


const Content: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const contentSections = useSelector(selectContent);
  const { mustRead } = useSelector(selectHomepageSecondaryMaterials);

  useEffect(() => {
    dispatch(getHomepageSecondaryMaterials({ topMaterialsNum: 8, postsNum: 8 }));
    dispatch(getContentSections());
  }, [dispatch]);

  return (
    <>
      <SubPageHeader 
        title='Content'
        link='content/new-content-section'
      />
      <ContentMainArticle article={mustRead} />
      <ContentSectionsList 
        sections={contentSections}
      />
    </>
  );
};

export default Content;