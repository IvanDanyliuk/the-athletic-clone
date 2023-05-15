import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Box, Card, CardContent, CardMedia, Grid, Typography, styled } from '@mui/material';
import { v4 as uuid } from 'uuid';
import { AppDispatch } from '../../features/store';
import { getRecentMaterials } from '../../features/materials/asyncActions';
import { selectMaterials } from '../../features/materials/selectors';
import BackdropLoader from '../components/ui/BackdropLoader';


const MaterialLink = styled(Link)`
  width: 100%;
  text-decoration: none;
  color: #000000;
  transition: .5s;
  &:hover {
    color: #434343;
  }
`;

const MaterialImage = styled('img')`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const MainMaterialTitle = styled(Typography)`
  margin: .5em 0;
  font-size: 2.5em;

  @media (max-width: 768px) {
    font-size: 1.7em;
  }
`;

const SecondaryMaterialTitle = styled(Typography)`
  margin: .5em 0;

  @media (max-width: 768px) {
    font-size: 1.2em;
  }
`;

const PreviewText = styled(Typography)`
  @media (max-width: 768px) {
    font-size: .7em;
  }
`;

const LabelsContainer = styled(Box)`
  display: flex;
`;

const Label = styled(Typography)`
  margin-right: 1em;
  text-transform: uppercase;

  @media (max-width: 768px) {
    font-size: .5em;
  }
`;

const MaterialCard = styled(Card)`
  height: 100%;
  border: none;
  box-shadow: none;
`;


const Materials: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const materials = useSelector(selectMaterials);

  useEffect(() => {
    dispatch(getRecentMaterials({ 
      materialsNumber: 10, 
      materialTypes: [ 'article', 'note' ] 
    }));
  }, []);

  if(materials.length === 0) {
    return <BackdropLoader open={true} />;
  }

  return (
    <Grid container spacing={3} sx={{ padding: '1em 0' }}>
      <Grid item xs={12}>
        <MaterialLink to={`/materials/${materials[0]._id}`}>
          <Grid container spacing={{ xs: 1, md: 8 }} alignItems='center'>
            <Grid item xs={12} md={6}>
              <MaterialImage src={materials[0].image} />
            </Grid>
            <Grid item xs={12} md={6}>
              <LabelsContainer>
                {materials[0].labels.map(label => (
                  <Label key={uuid()} variant='body2'>{label}</Label>
                ))}
              </LabelsContainer>
              <MainMaterialTitle variant='h2'>
                {materials[0].title}
              </MainMaterialTitle>
              <PreviewText variant='body1'>
                {materials[0].preview}
              </PreviewText>
            </Grid>
          </Grid>
        </MaterialLink>
      </Grid>
      <Grid item xs={12}>
        <Grid container spacing={3}>
          {materials.slice(1).map(material => (
            <Grid key={uuid()} item xs={12} md={4}>
              <MaterialLink to={`/materials/${material._id}`}>
                <MaterialCard>
                  <CardMedia
                    component='img'
                    height='270'
                    image={material.image}
                    alt={material._id}
                  />
                  <CardContent>
                    <LabelsContainer>
                      {material.labels.map(label => (
                        <Label key={uuid()} variant='body2'>{label}</Label>
                      ))}
                    </LabelsContainer>
                    <SecondaryMaterialTitle variant='h2'>
                      {material.title}
                    </SecondaryMaterialTitle>
                    <PreviewText variant='body1'>
                      {material.preview}
                    </PreviewText>
                  </CardContent>
                </MaterialCard>
              </MaterialLink>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Materials;