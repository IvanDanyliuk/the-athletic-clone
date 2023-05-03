import React from 'react';
import { Link } from 'react-router-dom';
import { Box, styled, Typography } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';


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
  width: 44px;
  height: 44px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 22px;
  line-height: 1em;
  text-decoration: none;
  background: #30b77e;
  color: #ffffff;

  svg {
    font-size: 20px;
  }
`;


const SubPageHeader: React.FC<ISubPageHeaderProps> = ({ title, link }) => {
  return (
    <Container>
      <Typography variant='h3'>
        {title}
      </Typography>
      <LinkBtn to={`/admin/${link}`}>
        <FontAwesomeIcon icon={faPlus} />
      </LinkBtn>
    </Container>
  );
};

export default SubPageHeader;