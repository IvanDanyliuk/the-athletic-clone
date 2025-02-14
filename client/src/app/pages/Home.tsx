import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Divider, styled } from '@mui/material';
import { v4 as uuid } from 'uuid';
import { AppDispatch } from '../../features/store';
import { getContentSections } from '../../features/content/asyncActions';
import { selectContent } from '../../features/content/selectors';
import { 
  ContentSection, TopContentSection, PopularMaterials, 
  LeagueMaterials, RealtimePosts, MustReadSection  
} from '../components/homepage/';
import { getHomepageSecondaryMaterials, getRecentMaterials } from '../../features/materials/asyncActions';
import { MaterialType } from '../models/components';
import { selectHomepageSecondaryMaterials, selectMaterials } from '../../features/materials/selectors';
import { SkeletonLoader } from '../components/ui/';


const Section = styled(Box)`
  margin-top: 2em;
  width: 100%;
`;

const SectionDivider = styled(Divider)`
  margin: 2em 0;
`;


const Home: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();

  const contentSections = useSelector(selectContent);
  const recentMaterials = useSelector(selectMaterials);
  const { 
    topMaterials, 
    latestPosts, 
    mustRead, 
    leagueMaterials 
  } = useSelector(selectHomepageSecondaryMaterials);

  const fetchData = async () => {
    await dispatch(getContentSections());
    await dispatch(getRecentMaterials({ 
      materialsNumber: 14, 
      materialTypes: [MaterialType.article, MaterialType.note] 
    }));
    await dispatch(getHomepageSecondaryMaterials({ topMaterialsNum: 8, postsNum: 8 }));
  };

  useEffect(() => {
    fetchData();
  }, []);

  if(contentSections.length === 0 || recentMaterials.length === 0) {
    return <SkeletonLoader variant='section' />;
  }

  return (
    <Box sx={{ width: '100%', padding: '1em 0' }}>
      <TopContentSection materials={recentMaterials} />
      <SectionDivider />
      {contentSections.map((section, i) => (
        <Section key={uuid()}>
          <ContentSection data={section} />
          {i < contentSections.length - 1 && <SectionDivider />}
        </Section>
      ))}
      <SectionDivider />
      <RealtimePosts materials={latestPosts} />
      <SectionDivider />
      <PopularMaterials materials={topMaterials} />
      <SectionDivider />
      {mustRead && (
        <>
          <MustReadSection article={mustRead} />
          <SectionDivider />
        </>
      )}
      <LeagueMaterials 
        materials={leagueMaterials} 
        leaguesNumToShow={4} 
      />
    </Box>
  );
};

export default Home;