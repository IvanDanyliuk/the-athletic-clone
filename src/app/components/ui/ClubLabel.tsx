import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Typography, styled } from '@mui/material';


interface IClubLabelProps {
  clubId: string;
  logo: string;
  name: string;
  altText: string;
}

const Container = styled(Box)`
  width: max-content;
  display: flex;
  align-items: center;
`;

const ClubLink = styled(Link)`
  width: 100%;
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

const ClubName = styled(Typography)`
  @media (max-width: 640px) {
    font-size: .9em;
  }
`;


const ClubLabel: React.FC<IClubLabelProps> = ({ clubId, logo, name, altText }) => {
  return (
    <ClubLink to={`/clubs/${clubId}`}>
      <Container>
        <LogoContainer>
          <ClubLogo src={logo} alt={altText} />
        </LogoContainer>
        <ClubName>{name}</ClubName>
      </Container>
    </ClubLink>
  );
};

export default ClubLabel;