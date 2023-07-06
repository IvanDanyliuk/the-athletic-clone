import React from 'react';
import { Link } from 'react-router-dom';
import { Avatar, Divider, Grid, List, ListItem, Typography, styled } from '@mui/material';
import { v4 as uuid } from 'uuid';
import { IMaterial } from '../../../features/materials/types';
import { Headlines, MaterialSecondaryInfo } from './';


interface ITopContentSectionProps {
  materials: IMaterial[];
}

const Container = styled(Grid)`
  margin: 0;
  &:first-child {
    padding-right: 1em;
    @media (max-width: 492px) {
      padding-right: 0;
    }
  }
`;

const TopImage = styled('img')`
  width: 100%;
`;

const TopMaterialTitle = styled(Typography)`
  margin: .5em 0;
  @media (max-width: 492px) {
    font-size: 1.5em;
    text-align: center;
  }
`;

const TopMaterialPreview = styled(Typography)`
  @media (max-width: 492px) {
    font-size: .8em;
    text-align: center;
  }
`;

const SecondaryMaterialTitle = styled(Typography)`
  @media (max-width: 492px) {
    font-size: .9em;
  }
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

const VerticalDivider = styled(Divider)`
  margin: 0 1em;
`;

const HorizontalDivider = styled(Divider)`
  margin: 1em 0;
`;


const TopContentSection: React.FC<ITopContentSectionProps> = ({ materials }) => {
  return (
    <Container container>
      <Grid item xs={12} md={9}>
        <Grid container>
          <Grid item xs={12} md={6}>
            <MaterialLink to={`/materials/${materials[0]._id}`}>
              <TopImage 
                src={materials[0].image} 
                alt={materials[0]._id} 
              />
              <TopMaterialTitle variant='h3_custom'>
                {materials[0].title}
              </TopMaterialTitle>
              <TopMaterialPreview variant='subtitle1_custom'>
                {materials[0].preview}
              </TopMaterialPreview>
              <MaterialSecondaryInfo 
                author={materials[0].author.name} 
                commentsNum={materials[0].comments.length} 
              />
            </MaterialLink>
          </Grid>
          <VerticalDivider orientation='vertical' flexItem />
          <Grid item xs={12} md>
            <MaterialsList>
              {materials.slice(1, 6).map((material, i) => (
                <MaterialsListItem key={uuid()}>
                  <MaterialLink to={`/materials/${material._id}`}>
                    <Grid container sx={{ paddingLeft: 0 }}>
                      <Grid item xs={9} md={10} sx={{ paddingRight: '1em' }}>
                        <SecondaryMaterialTitle variant='h4_custom'>
                          {material.title}
                        </SecondaryMaterialTitle>
                        <MaterialSecondaryInfo 
                          author={material.author.name} 
                          commentsNum={material.comments.length} 
                        />
                      </Grid>
                      <Grid item xs md sx={{ display: 'flex' }}>
                        <Avatar 
                          src={material.image} 
                          alt={material._id} 
                          variant='square' 
                          sx={{ width: '100%', height: 'auto' }}
                        />
                      </Grid>
                    </Grid>
                    {i !== 4 && (
                      <HorizontalDivider orientation='horizontal' flexItem />
                    )}
                  </MaterialLink>
                </MaterialsListItem>
              ))}
            </MaterialsList>
          </Grid>
        </Grid>
      </Grid>
      <VerticalDivider orientation='vertical' flexItem />
      <Grid item xs={12} md sx={{ marginTop: { xs: '1.5em', md: 0 } }}>
        <Headlines data={materials.slice(6)} />
      </Grid>
    </Container>
  );
};

export default TopContentSection;