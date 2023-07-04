import React from 'react';
import { Box, Typography, styled } from '@mui/material';
import { IContentSection } from '../../../features/content/types';
import { ContentSectionMaterials } from './';


interface IContentSectionProps {
  data: IContentSection
}

const Section = styled(Box)`
  background: #ffffff;
`;

const SectionTitle = styled(Typography)`
  margin-bottom: .8em;
  @media (max-width: 640px) {
    font-size: 1.3em;
  }
`;


const ContentSection: React.FC<IContentSectionProps> = ({ data }) => {
  return (
    <Section>
      <SectionTitle variant='h2_custom'>{data.name}</SectionTitle>
      <ContentSectionMaterials materials={data.materials} />
    </Section>
  );
};

export default ContentSection;