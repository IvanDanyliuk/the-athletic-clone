import React from 'react';
import { Grid, styled } from '@mui/material';
import { v4 as uuid } from 'uuid';
import { IContentSection } from '../../../../features/content/types';
import { ContentSectionListItem } from './';


interface IContentSectionsListProps {
  sections: IContentSection[];
}

const Container = styled(Grid)`
  margin-top: 5px;
`;


const ContentSectionsList: React.FC<IContentSectionsListProps> = ({ sections }) => {
  return (
    <Container container spacing={3}>
      {sections.map(section => (
        <Grid item xs={12} key={uuid()}>
          <ContentSectionListItem 
            data={section} 
          />
        </Grid>
      ))}
    </Container>
  );
};

export default ContentSectionsList;