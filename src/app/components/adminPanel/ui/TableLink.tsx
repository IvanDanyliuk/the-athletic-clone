import React from 'react';
import { Link } from 'react-router-dom';
import { styled } from '@mui/material';


interface ITableLinkProps {
  url: string;
  label: string;
}

const LinkContainer = styled(Link)`
  text-decoration: none;
  color: inherit;
`;


const TableLink: React.FC<ITableLinkProps> = ({ url, label }) => {
  return (
    <LinkContainer to={url}>
      {label}
    </LinkContainer>
  );
};

export default TableLink;