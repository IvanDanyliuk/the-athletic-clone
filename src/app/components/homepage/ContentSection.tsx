import React from 'react';
import sc from 'styled-components';
import { Avatar, Box, Grid, List, ListItem, Typography, styled } from '@mui/material';
import { v4 as uuid } from 'uuid';
import { IContentSection } from '../../../features/content/types';
import MaterialSecondaryInfo from './MaterialSecondaryInfo';
import { Link } from 'react-router-dom';


interface IContentSectionProps {
  data: IContentSection
}

const SectionTitle = styled(Typography)`
  margin-bottom: .8em;
  font-family: 'Arvo', serif;
  font-weight: 700;
  font-size: 1.7em;
`;

const Section = styled(Box)`
  background: #ffffff;
`;

const MaterialLink = styled(Link)`
  width: 100%;
  text-decoration: none;
  color: #000000;
  transition: .5s;
  &:hover {
    color: #434343;
  }
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
  line-height: 1.2em;
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
          <Grid item xs={12} md={6} sx={{ boxSizing: 'border-box', margin: 0 }}>
            <MaterialLink to={`/materials/${data.materials[0]._id}`}>
              <TopImage 
                src={data.materials[0].image} 
                alt={data.materials[0]._id} 
              />
              <TopMaterialTitle variant='inherit'>
                {data.materials[0].title}
              </TopMaterialTitle>
              <TopMaterialPreviewText variant='inherit'>
                {data.materials[0].preview}
              </TopMaterialPreviewText>
            </MaterialLink>
          </Grid>
          <Grid item xs={12} md={6}>
            <List>
              {data.materials.slice(1, 6).map((material, i) => (
                <ListItem key={uuid()}>
                  <MaterialLink to={`/materials/${material._id}`}>
                    <Grid container>
                      <Grid item xs={2}>
                        <Avatar 
                          src={material.image} 
                          alt={material._id} 
                          variant='square' 
                          sx={{ width: 76, height: 76 }}
                        />
                      </Grid>
                      <Grid item xs={10}>
                        <SecondaryMaterialTitle variant='inherit'>
                          {material.title}
                        </SecondaryMaterialTitle>
                        <MaterialSecondaryInfo 
                          author={material.author.name} 
                          views={material.views} 
                        />
                      </Grid>
                    </Grid>
                  </MaterialLink>
                </ListItem>
              ))}
            </List>
          </Grid>
        </Grid>
    </Section>
  );
};

export default ContentSection;