import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { styled, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';


interface IBackLinkProps {
  link: string,
  title: string
}

const LinkBody = styled(Link)`
  padding: 5px 15px;
  width: fit-content;
  display: flex;
  align-items: center;
  font-size: 1em;
  line-height: 0;
  text-decoration: none;
  border-radius: 5px;
  background: #ececec;
  color: #000000;
  transition: .3s;

  &:hover {
    background: #cccccc;
  }

  svg {
    margin-right: 5px;
  }
`;

const BackLink: React.FC<IBackLinkProps> = ({ link, title }) => {
  return (
    <LinkBody to={link}>
      <FontAwesomeIcon icon={faArrowLeft} />
      <Typography variant='body1'>{title}</Typography>
    </LinkBody>
  );
};

export default BackLink;