import React from 'react';
import { Box, Typography, styled } from '@mui/material';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';


const SectionContainer = styled(Box)`
  position: relative;
  padding: 3em 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #121212;

  h2 {
    margin-bottom: .5em;
    width: 25%;
    font-size: 2.5em;
    text-align: center;
    color: #ffffff;
  }
`;

const SubscriptionLink = styled(Link)`
  text-transform: uppercase;
  text-decoration: none;
  font-size: 1.2em;
  font-weight: 500;
  color: #ffffff;

  &:hover {
    text-decoration: underline;
  }

  svg {
    margin-left: .5em;
  }
`;

const SubscribeSection: React.FC = () => {
  return (
    <SectionContainer>
      <Typography variant='h2'>
        Access sports reporting that sets the standard.
      </Typography>
      <SubscriptionLink to='/subscribe'>
        Subscribe for $2
        <FontAwesomeIcon icon={faAngleRight} />
      </SubscriptionLink>
    </SectionContainer>
  );
};

export default SubscribeSection;