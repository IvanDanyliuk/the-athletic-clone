import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuid } from 'uuid';
import { AppDispatch } from '../../features/store';
import { getContentSections } from '../../features/content/asyncActions';
import { selectContent, selectContentStatus } from '../../features/content/selectors';
import ContentSection from '../components/homepage/ContentSection';
import { getHomepageSecondaryMaterials, getRecentMaterials } from '../../features/materials/asyncActions';
import { MaterialType } from '../models/components';
import { selectHomepageSecondaryMaterials, selectMaterials, selectMaterialsStatus } from '../../features/materials/selectors';
import { Box, Divider, styled } from '@mui/material';
import TopContentSection from '../components/homepage/TopContentSection';
import PopularMaterials from '../components/homepage/PopularMaterials';


const Container = styled(Box)`
  /* padding: 1em 0; */
`;

const Section = styled(Box)`
  margin-top: 2em;
`;

const SectionDivider = styled(Divider)`
  margin-top: 1em;
`;

const Home: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();

  const contentSections = useSelector(selectContent);
  const recentMaterials = useSelector(selectMaterials);
  const secondaryMaterials = useSelector(selectHomepageSecondaryMaterials);
  const contentStatus = useSelector(selectContentStatus);
  const recentMaterialsStatus = useSelector(selectMaterialsStatus);

  const fetchData = async () => {
    await dispatch(getContentSections());
    await dispatch(getRecentMaterials({ 
      materialsNumber: 14, 
      materialTypes: [MaterialType.article, MaterialType.note] 
    }));
    await dispatch(getHomepageSecondaryMaterials({ topMaterialsNum: 8, postsNum: 3 }));
  };

  useEffect(() => {
    fetchData();
  }, []);

  if(contentStatus === 'loading' && recentMaterialsStatus === 'loading') {
    return <div>Loading...</div>
  }

  return (
    <Container>
      <TopContentSection materials={recentMaterials} />
      <Divider />
      {contentSections.map(section => (
        <Section key={uuid()}>
          <ContentSection data={section} />
          <SectionDivider />
        </Section>
      ))}
      <Divider />
      <PopularMaterials materials={secondaryMaterials.topMaterials} />
    </Container>
  );
};

export default Home;