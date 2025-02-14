import React from 'react';
import { useSelector } from 'react-redux';
import { Box, Grid, styled } from '@mui/material';
import { v4 as uuid } from 'uuid';
import { selectCompetition } from '../../../features/competitions/selectors';
import { BackdropLoader, ClubLabel } from '../ui/';


const Container = styled(Box)`
  padding: 1em 0;
`;


const CompetitionTeams: React.FC = () => {
  const league = useSelector(selectCompetition);

  if(!league) {
    return <BackdropLoader open={true} />;
  }

  return (
    <Container>
      <Grid container spacing={3}>
        {league.clubs.map(club => (
          <Grid key={uuid()} item xs={4} md={3}>
            <ClubLabel 
              clubId={club._id}
              logo={club.clubLogoUrl} 
              name={club.commonName} 
              altText={club.shortName} 
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default CompetitionTeams;