import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuid } from 'uuid';
import { AppDispatch } from '../../features/store';
import { getContentSections } from '../../features/content/asyncActions';
import Headlines from '../components/homepage/Headlines';
import { selectContent, selectContentStatus } from '../../features/content/selectors';
import ContentSection from '../components/homepage/ContentSection';
import { getRecentMaterials } from '../../features/materials/asyncActions';
import { MaterialType } from '../models/components';
import { selectMaterials, selectMaterialsStatus } from '../../features/materials/selectors';
import { Box, Grid, styled } from '@mui/material';


const Container = styled(Box)`
  padding: 1em 0;
`;

const Home: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();

  const contentSections = useSelector(selectContent);
  const headlines = useSelector(selectMaterials);
  const contentStatus = useSelector(selectContentStatus);
  const headlinesStatus = useSelector(selectMaterialsStatus);

  const fetchData = async () => {
    await dispatch(getContentSections());
    await dispatch(getRecentMaterials({ 
      materialsNumber: 8, 
      materialTypes: [MaterialType.article, MaterialType.note] 
    }));
  };

  useEffect(() => {
    fetchData()
  }, []);

  if(contentStatus === 'loading' || headlinesStatus === 'loading') {
    return <div>Loading...</div>
  }

  return (
    <Container>
      <Grid container>
        <Grid item xs={12} md={9}>
          <ContentSection data={contentSections[0]} />
        </Grid>
        <Grid item xs={12} md={3}>
          <Headlines data={headlines} />
        </Grid>
      </Grid>
      {contentSections.slice(1).map(section => (
        <ContentSection 
          key={uuid()} 
          data={section} 
        />
      ))}
    </Container>
  );
};

export default Home;