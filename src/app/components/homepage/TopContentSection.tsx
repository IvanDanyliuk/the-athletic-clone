import React from 'react';
import sc from 'styled-components';
import { Avatar, Divider, Grid, List, ListItem, Typography, styled } from '@mui/material';
import { v4 as uuid } from 'uuid';
import { IMaterial } from '../../../features/materials/types';
import MaterialSecondaryInfo from './MaterialSecondaryInfo';
import { Link } from 'react-router-dom';
import Headlines from './Headlines';


interface ITopContentSectionProps {
  materials: IMaterial[]
}

const Container = styled(Grid)`
  margin-top: 0;
  padding: 1em 0;
`;

const TopImage = sc.img`
  width: 100%;
`;

const TopMaterialTitle = styled(Typography)`
  margin: .5em 0;
  font-family: 'Times New Roman', serif;
  font-weight: 900;
  font-size: 1.8em;
  line-height: 1em;
`;

const TopMaterialPreviewText = styled(Typography)`
  font-family: 'Times New Roman', serif;
  font-size: 1em;
  line-height: 1.2em;
`;

const SecondaryMaterialTitle = styled(Typography)`
  font-family: 'Times New Roman', serif;
  font-size: 1em;
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

const MaterialsList = styled(List)`
  padding: 0;
  @media (max-width: 768px) {
    margin: 1em 0;
  }
`;

const MaterialsListItem = styled(ListItem)`
  padding: 0;
`;


const TopContentSection: React.FC<ITopContentSectionProps> = ({ materials }) => {
  if(materials.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <Container container>
      <Grid item xs={12} md={9}>
        <Grid container sx={{ padding: 0 }}>
          <Grid item xs={12} md={6} sx={{ padding: 0 }}>
            <MaterialLink to={`/materials/${materials[0]._id}`}>
              <TopImage 
                src={materials[0].image} 
                alt={materials[0]._id} 
              />
              <TopMaterialTitle variant='inherit'>
                {materials[0].title}
              </TopMaterialTitle>
              <TopMaterialPreviewText variant='inherit'>
                {materials[0].preview}
              </TopMaterialPreviewText>
            </MaterialLink>
          </Grid>
          <Divider orientation='vertical' flexItem sx={{ margin: '0 1em' }} />
          <Grid item xs={12} md>
            <MaterialsList>
              {materials.slice(1, 6).map((material, i) => (
                <MaterialsListItem key={uuid()}>
                  <MaterialLink to={`/materials/${material._id}`}>
                    <Grid container sx={{ paddingLeft: 0 }}>
                      <Grid item xs={10} sx={{ paddingRight: '1em' }}>
                        <SecondaryMaterialTitle variant='inherit'>
                          {material.title}
                        </SecondaryMaterialTitle>
                        <MaterialSecondaryInfo 
                          author={material.author.name} 
                          views={material.views} 
                        />
                      </Grid>
                      <Grid item xs sx={{ display: 'flex' }}>
                        <Avatar 
                          src={material.image} 
                          alt={material._id} 
                          variant='square' 
                          sx={{ width: '100%', height: 'auto' }}
                        />
                      </Grid>
                    </Grid>
                    {i !== 4 && (
                      <Divider orientation='horizontal' flexItem sx={{ margin: '1em 0' }} />
                    )}
                  </MaterialLink>
                </MaterialsListItem>
              ))}
            </MaterialsList>
          </Grid>
        </Grid>
      </Grid>
      <Divider orientation='vertical' flexItem sx={{ margin: '0 1em' }} />
      <Grid item xs={12} md>
        <Headlines data={materials.slice(6)} />
      </Grid>
    </Container>
  );
};

export default TopContentSection;