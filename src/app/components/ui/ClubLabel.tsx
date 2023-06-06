import React from 'react';
import { Box, Typography, styled } from '@mui/material';
import { Link } from 'react-router-dom';


interface IClubLabelProps {
  clubId: string;
  logo: string;
  name: string;
  altText: string;
}

const Container = styled(Box)`
  width: fit-content;
  display: flex;
  align-items: center;
`;

const ClubLink = styled(Link)`
  text-decoration: none;
  color: #000000;
`;

const LogoContainer = styled(Box)`
  width: 3em;
  display: flex;
  justify-content: center;
`;

const ClubLogo = styled('img')`
  height: 1.5em;
`;


const ClubLabel: React.FC<IClubLabelProps> = ({ clubId, logo, name, altText }) => {
  return (
    <ClubLink to={`/clubs/${clubId}`}>
      <Container>
        <LogoContainer>
          <ClubLogo src={logo} alt={altText} />
        </LogoContainer>
        <Typography>{name}</Typography>
      </Container>
    </ClubLink>
  );
};

export default ClubLabel;