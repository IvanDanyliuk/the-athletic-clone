import React from 'react';
import { Box, Grid, Typography, styled } from '@mui/material';


interface IClubLabelProps {
  logo: string;
  name: string;
  altText: string;
}

const Container = styled(Box)`
  width: fit-content;
`;

const ClubLogo = styled('img')`
  height: 1.5em;
`;


const ClubLabel: React.FC<IClubLabelProps> = ({ logo, name, altText }) => {
  return (
    <Container>
      <Grid container spacing={5} alignItems='center'>
        <Grid item xs={1} display='flex' justifyContent='center'>
          <ClubLogo src={logo} alt={altText} />
        </Grid>
        <Grid item xs alignItems='center'>
          <Typography>{name}</Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ClubLabel;