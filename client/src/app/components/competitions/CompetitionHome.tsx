import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box, styled } from '@mui/material';
import { AppDispatch } from '../../../features/store';
import { getLeagueMaterials } from '../../../features/materials/asyncActions';
import { selectCompetition } from '../../../features/competitions/selectors';
import { selectMaterials, selectMaterialsStatus } from '../../../features/materials/selectors';
import { BackdropLoader, DataNotFoundMessage } from '../ui/';
import { TopContentSection } from '../homepage/';
import { StateStatus } from '../../../features/types';


const Container = styled(Box)`
  padding: 1em 0;
  width: 100%;
  height: 100%;
`;


const CompetitionHome: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();

  const league = useSelector(selectCompetition);
  const materials = useSelector(selectMaterials);
  const materialsStatus = useSelector(selectMaterialsStatus);

  useEffect(() => {
    dispatch(getLeagueMaterials({ value: league?.fullName!, type: ['article', 'note'], materialsNum: 16 }))
  }, [dispatch, league]);

  if(materials.length === 0) {
    return materialsStatus === StateStatus.Loading ? 
      <BackdropLoader open={true} /> : 
      <DataNotFoundMessage message='Cannot find materials' />;
  }

  return (
    <Container>
      <TopContentSection materials={materials!} />
    </Container>
  );
};

export default CompetitionHome;