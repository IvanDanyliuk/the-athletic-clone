import React from 'react';
import { Icon, Typography, styled } from '@mui/material';
import { ChatBubble } from '@mui/icons-material';


interface IMaterialSecondaryInfoProps {
  author: string;
  commentsNum: number;
}

const SecondaryInfo = styled('div')`
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

const MaterialSecondaryInfo: React.FC<IMaterialSecondaryInfoProps> = ({ author, commentsNum }) => {
  return (
    <SecondaryInfo>
      <Author variant='caption'>{author}</Author>
      <Views variant='caption'>
        <Icon component={ChatBubble} />
        {commentsNum}
      </Views>
    </SecondaryInfo>
  );
};

export default MaterialSecondaryInfo;