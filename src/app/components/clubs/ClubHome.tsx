import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box, styled } from '@mui/material';
import { AppDispatch } from '../../../features/store';
import { selectClub } from '../../../features/clubs/selectors';
import { getLeagueMaterials } from '../../../features/materials/asyncActions';
import { selectMaterials, selectMaterialsStatus } from '../../../features/materials/selectors';
import { BackdropLoader, DataNotFoundMessage } from '../ui';
import { ContentSection, TopContentSection } from '../homepage';


const Container = styled(Box)`
  padding-top: 1em;
  width: 100%;
  height: 100%;
`;


const ClubHome: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();

  const club = useSelector(selectClub);
  const materials = useSelector(selectMaterials);
  const materialsStatus = useSelector(selectMaterialsStatus);

  useEffect(() => {
    dispatch(getLeagueMaterials({ value: club?.commonName!, type: ['article', 'note'], materialsNum: 5 }))
  }, [dispatch, club]);

  if(materials.length === 0) {
    return materialsStatus === 'loading' ? 
      <BackdropLoader open={true} /> : 
      <DataNotFoundMessage message='Cannot find materials' />;
  }

  return (
    <Container>
      {/* <TopContentSection materials={materials!} /> */}
      
    </Container>
  );
};

export default ClubHome;