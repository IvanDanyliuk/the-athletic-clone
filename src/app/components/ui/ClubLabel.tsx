import React from 'react';
import { Box, Typography, styled } from '@mui/material';


interface IClubLabelProps {
  logo: string;
  name: string;
  altText: string;
}

const Container = styled(Box)`
  width: fit-content;
  display: flex;
  align-items: center;
`;

const LogoContainer = styled(Box)`
  width: 3em;
  display: flex;
  justify-content: center;
`;

const ClubLogo = styled('img')`
  height: 1.5em;
`;


const ClubLabel: React.FC<IClubLabelProps> = ({ logo, name, altText }) => {
  return (
    <Container>
      <LogoContainer>
        <ClubLogo src={logo} alt={altText} />
      </LogoContainer>
      <Typography>{name}</Typography>
    </Container>
  );
};

export default ClubLabel;