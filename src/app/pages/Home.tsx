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
import LeagueMaterials from '../components/homepage/LeagueMaterials';
import RealtimePosts from '../components/homepage/RealtimePosts';


const Section = styled(Box)`
  margin-top: 2em;
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
  const contentStatus = useSelector(selectContentStatus);
  const recentMaterialsStatus = useSelector(selectMaterialsStatus);

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

  if(contentStatus === 'loading' && recentMaterialsStatus === 'loading') {
    return <div>Loading...</div>
  }

  return (
    <Box>
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
      <LeagueMaterials materials={leagueMaterials} leaguesNumToShow={4} />
    </Box>
  );
};

export default Home;