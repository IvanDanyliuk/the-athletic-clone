import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Icon, IconButton, styled, Typography } from '@mui/material';
import { Add } from '@mui/icons-material';


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
  text-decoration: none;
`;

const MenuBtn = styled(IconButton)`
  cursor: pointer;
  width: 44px;
  height: 44px;
  border-radius: 22px;
  border: none;
  background: #30b77e;
  color: #ffffff;
  svg {
    font-size: 20px;
  }
  &:hover {
    background: #74d5ac;
  }
`;


const SubPageHeader: React.FC<ISubPageHeaderProps> = ({ title, link }) => {
  return (
    <Container>
      <Typography variant='h3'>
        {title}
      </Typography>
      <LinkBtn to={`/admin/${link}`}>
        <MenuBtn>
          <Icon component={Add} />
        </MenuBtn>
      </LinkBtn>
    </Container>
  );
};

export default SubPageHeader;