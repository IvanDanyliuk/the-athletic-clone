import React from 'react';
import { Link } from 'react-router-dom';
import { Box, styled, Typography } from '@mui/material';


interface ISubPageHeaderProps {
  title: string,
  link: string
}

const Container = styled(Box)`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const LinkBtn = styled(Link)`
  padding: 10px 15px;
  font-size: 1em;
  font-weight: 500;
  border-radius: 5px;
  text-decoration: none;
  background: #30b77e;
  color: #ffffff;
`;


const SubPageHeader: React.FC<ISubPageHeaderProps> = ({ title, link }) => {
  return (
    <Container>
      <Typography variant='h4'>{title}</Typography>
      <LinkBtn to={`/admin/${link}`}>Add new</LinkBtn>
    </Container>
  );
};
export default SubPageHeader;