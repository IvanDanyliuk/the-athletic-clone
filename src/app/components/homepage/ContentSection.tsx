import React from 'react';
import sc from 'styled-components';
import { IContentSection } from '../../../features/content/types';
import { Box, Grid, Typography, styled } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment } from '@fortawesome/free-solid-svg-icons';
import MaterialSecondaryInfo from './MaterialSecondaryInfo';


interface IContentSectionProps {
  data: IContentSection
}

const Section = styled(Box)`
  background: #ffffff;
`;

const Image = sc.img`
  width: 100%;
`;

const TopMaterialTitle = styled(Typography)`
  margin: .5em 0;
  font-family: 'Crimson Pro', serif;
  font-size: 1.8em;
  line-height: 1em;
`;

const TopMaterialPreviewText = styled(Typography)`
  font-family: 'Crimson Pro', serif;
  font-size: 1em;
  line-height: .5em;
`;

const ContentSection: React.FC<IContentSectionProps> = ({ data }) => {
  if(!data) {
    return <div>Loading...</div>
  } 

  return (
    <Section>
      <Grid container>
        <Grid item xs={12} md={6}>
          <Box>
            <Image 
              src={data.materials[0].image} 
              alt={data.materials[0]._id} 
            />
            <TopMaterialTitle>{data.materials[0].title}</TopMaterialTitle>
            <TopMaterialPreviewText>
              {data.materials[0].content.split('.')[0].replace(/(<([^>]+)>)/ig, '')}
            </TopMaterialPreviewText>
            <MaterialSecondaryInfo 
              author={data.materials[0].author.name} 
              views={data.materials[0].views} 
            />
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          
        </Grid>
      </Grid>
    </Section>
  );
};

export default ContentSection;