import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuid } from 'uuid';
import { AppDispatch } from '../../features/store';
import { getContentSections } from '../../features/content/asyncActions';
import { selectContent, selectContentStatus } from '../../features/content/selectors';
import ContentSection from '../components/homepage/ContentSection';
import { getRecentMaterials } from '../../features/materials/asyncActions';
import { MaterialType } from '../models/components';
import { selectMaterials, selectMaterialsStatus } from '../../features/materials/selectors';
import { Box, Divider, styled } from '@mui/material';
import TopContentSection from '../components/homepage/TopContentSection';


const Container = styled(Box)`
  padding: 1em 0;
`;

const Home: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();

  const contentSections = useSelector(selectContent);
  const recentMaterials = useSelector(selectMaterials);
  const contentStatus = useSelector(selectContentStatus);
  const recentMaterialsStatus = useSelector(selectMaterialsStatus);

  const fetchData = async () => {
    await dispatch(getContentSections());
    await dispatch(getRecentMaterials({ 
      materialsNumber: 14, 
      materialTypes: [MaterialType.article, MaterialType.note] 
    }));
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
        <ContentSection 
          key={uuid()} 
          data={section} 
        />
      ))}
    </Container>
  );
};

export default Home;