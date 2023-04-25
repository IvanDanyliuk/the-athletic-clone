import React from 'react';
import sc from 'styled-components';
import { Avatar, Grid, List, ListItem, Typography, styled } from '@mui/material';
import { v4 as uuid } from 'uuid';
import { IMaterial } from '../../../features/materials/types';
import MaterialSecondaryInfo from './MaterialSecondaryInfo';
import { Link } from 'react-router-dom';
import Headlines from './Headlines';


interface ITopContentSectionProps {
  materials: IMaterial[]
}

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
  line-height: 1em;
`;

const SecondaryMaterialTitle = styled(Typography)`
  font-family: 'Times New Roman', serif;
  font-size: 1em;
`;

const MaterialLink = styled(Link)`
  text-decoration: none;
  color: #000000;
  transition: .5s;
  &:hover {
    color: #434343;
  }
`;


const TopContentSection: React.FC<ITopContentSectionProps> = ({ materials }) => {
  if(materials.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={9}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6} sx={{ boxSizing: 'border-box', margin: 0 }}>
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
          <Grid item xs={12} md={6}>
            <List>
              {materials.slice(1, 6).map((material, i) => (
                <ListItem key={uuid()}>
                  <MaterialLink to={`/materials/${material._id}`}>
                    <Grid container>
                      <Grid item xs={9}>
                        <SecondaryMaterialTitle variant='inherit'>
                          {material.title}
                        </SecondaryMaterialTitle>
                        <MaterialSecondaryInfo 
                          author={material.author.name} 
                          views={material.views} 
                        />
                      </Grid>
                      <Grid item xs={3} sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                        <Avatar 
                          src={material.image} 
                          alt={material._id} 
                          variant='square' 
                          sx={{ width: 76, height: 76 }}
                        />
                      </Grid>
                    </Grid>
                  </MaterialLink>
                </ListItem>
              ))}
            </List>
          </Grid>
        </Grid>
      </Grid>
      
      <Grid item xs={12} md={3}>
        <Headlines data={materials.slice(6)} />
      </Grid>
    </Grid>
  );
};

export default TopContentSection;