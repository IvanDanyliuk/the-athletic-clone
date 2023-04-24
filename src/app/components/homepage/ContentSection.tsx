import React from 'react';
import sc from 'styled-components';
import { Avatar, Box, Grid, Typography, styled } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment } from '@fortawesome/free-solid-svg-icons';
import { v4 as uuid } from 'uuid';
import { IContentSection } from '../../../features/content/types';
import MaterialSecondaryInfo from './MaterialSecondaryInfo';


interface IContentSectionProps {
  data: IContentSection
}

const SectionTitle = styled(Typography)`
  margin-bottom: .8em;
  font-family: 'Sanchez', serif;
  font-size: 1.7em;
`;

const Section = styled(Box)`
  background: #ffffff;
`;

const TopImage = sc.img`
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

const SecondaryMaterialTitle = styled(Typography)`
  font-family: 'Crimson Pro', serif;
  font-size: 1em;
`;


const ContentSection: React.FC<IContentSectionProps> = ({ data }) => {
  if(!data) {
    return <div>Loading...</div>
  } 

  return (
    <Section>
      <SectionTitle variant='inherit'>{data.name}</SectionTitle>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <TopImage 
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
        </Grid>
        <Grid item xs={12} md={6}>
          {data.materials.slice(1).map(material => (
            <Grid container spacing={3} key={uuid()}>
              <Grid item xs={9}>
                <SecondaryMaterialTitle variant='inherit'>
                  {material.title}
                </SecondaryMaterialTitle>
                <MaterialSecondaryInfo 
                  author={material.author.name} 
                  views={material.views} 
                />
              </Grid>
              <Grid item xs={3}>
                <Avatar 
                  src={material.image} 
                  alt={material._id} 
                  variant='square' 
                  sx={{ width: 76, height: 76 }}
                />
              </Grid>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Section>
  );
};

export default ContentSection;