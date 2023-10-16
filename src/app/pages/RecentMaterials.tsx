import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Box, Card, CardContent, CardMedia, Grid, Typography, styled } from '@mui/material';
import { v4 as uuid } from 'uuid';
import { AppDispatch } from '../../features/store';
import { getRecentMaterials } from '../../features/materials/asyncActions';
import { selectMaterials } from '../../features/materials/selectors';
import { BackdropLoader } from '../components/ui';


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

const OtherMaterialTitle = styled(Typography)`
  margin: .5em 0;
  font-size: 1em;
  @media (max-width: 768px) {
    font-size: 1.1em;
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
  font-size: .7em;
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

const OtherMaterials = styled(Box)`
  margin-top: 1em;
  padding: 2em 1em;
  background: #f7f7f4;
  @media (max-width: 768px) {
    font-size: .8em;
  }
`;


const RecentMaterials: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const materials = useSelector(selectMaterials);

  useEffect(() => {
    dispatch(getRecentMaterials({ 
      materialsNumber: 21, 
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
              <MainMaterialTitle variant='h2_custom'>
                {materials[0].title}
              </MainMaterialTitle>
              <PreviewText variant='body1_custom'>
                {materials[0].preview}
              </PreviewText>
            </Grid>
          </Grid>
        </MaterialLink>
      </Grid>
      <Grid item xs={12}>
        <Grid container spacing={3}>
          {materials.slice(1, 9).map(material => (
            <Grid key={uuid()} item xs={12} md={3}>
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
                    <SecondaryMaterialTitle variant='h2_custom'>
                      {material.title}
                    </SecondaryMaterialTitle>
                    <PreviewText variant='body1_custom'>
                      {material.preview}
                    </PreviewText>
                  </CardContent>
                </MaterialCard>
              </MaterialLink>
            </Grid>
          ))}
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <OtherMaterials>
          <Grid container spacing={6}>
            {materials.slice(9).map(material => (
              <Grid key={uuid()} item xs={12} md={4}>
                <Grid container spacing={3} sx={{ height: '100%' }}>
                  <Grid item xs={8}>
                    <LabelsContainer>
                      {material.labels.map(label => (
                        <Label key={uuid()} variant='body2'>{label}</Label>
                      ))}
                    </LabelsContainer>
                    <OtherMaterialTitle variant='h3_custom'>
                      {material.title}
                    </OtherMaterialTitle>
                  </Grid>
                  <Grid item xs={4}>
                    <MaterialImage src={material.image} />
                  </Grid>
                </Grid>
              </Grid>
            ))}
          </Grid>
        </OtherMaterials>
      </Grid>
    </Grid>
  );
};

export default RecentMaterials;