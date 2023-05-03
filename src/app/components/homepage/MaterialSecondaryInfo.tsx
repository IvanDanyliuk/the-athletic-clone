import React from 'react';
import sc from 'styled-components';
import { Icon, Typography, styled } from '@mui/material';
import { ChatBubble } from '@mui/icons-material';


interface IMaterialSecondaryInfoProps {
  author: string,
  views: number
}

const SecondaryInfo = sc.div`
  margin: 1em 0;
  display: flex;
  align-items: center;
`;

const Author = styled(Typography)`
  margin-right: 1em;
`;

const Views = styled(Typography)`
  svg {
    margin-right: 5px;
    font-size: 1em;
  }
`;

const MaterialSecondaryInfo: React.FC<IMaterialSecondaryInfoProps> = ({ author, views }) => {
  return (
    <SecondaryInfo>
      <Author variant='body2'>{author}</Author>
      <Views variant='body2'>
        <Icon component={ChatBubble} />
        {views}
      </Views>
    </SecondaryInfo>
  );
};

export default MaterialSecondaryInfo;