import React from 'react';
import { Box, Typography, styled } from '@mui/material';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';


const SubscriptionLink = styled(Link)`

`;

const SubscribeSection: React.FC = () => {
  return (
    <Box>
      <Typography>
        Access sports reporting that sets the standard.
      </Typography>
      <SubscriptionLink to='/subscribe'>
        Subscribe for $2
        <FontAwesomeIcon icon={faAngleRight} />
      </SubscriptionLink>
    </Box>
  );
};

export default SubscribeSection;