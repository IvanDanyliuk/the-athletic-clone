import React from 'react';
import { Link } from 'react-router-dom';
import { styled } from '@mui/material';


interface ISeeMoreLinkProps {
  url: string;
  label: string;
}

const LinkItem = styled(Link)`
  font-size: .9em;
  text-decoration: none;
  color: #000000;
  transition: .5s;
  &:hover {
    color: #434343;
    text-decoration: underline;
  }
`;


const SeeMoreLink: React.FC<ISeeMoreLinkProps> = ({ url, label }) => {
  return (
    <LinkItem to={url}>
      {label}
    </LinkItem>
  );
};

export default SeeMoreLink;