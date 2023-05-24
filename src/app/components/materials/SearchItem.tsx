import React from 'react';
import { Box, Typography, styled } from '@mui/material';


interface ISearchItemProps {
  image: string;
  label: string;
  altText?: string;
}

const Container = styled(Box)`
  width: 100%;
  display: flex;
  align-items: center;
`;

const Image = styled('img')`
  margin-right: 1em;
  height: 1.5em;
`;

const Label = styled(Typography)`
  font-size: .8em;
`;


const SearchItem: React.FC<ISearchItemProps> = ({ image, label, altText }) => {
  return (
    <Container>
      <Image src={image} alt={altText} />
      <Label>{label}</Label>
    </Container>
  );
};

export default SearchItem;