import React from 'react';
import { Grid } from '@mui/material';
import { v4 as uuid } from 'uuid';
import { IContentSection } from '../../../../features/content/types';
import { ContentSectionListItem } from './';


interface IContentSectionsListProps {
  sections: IContentSection[],
}


const ContentSectionsList: React.FC<IContentSectionsListProps> = ({ 
  sections
}) => {

  return (
    <Grid container spacing={3} sx={{ marginTop: '5px' }}>
      {sections.map(section => (
        <Grid item xs={12} key={uuid()}>
          <ContentSectionListItem 
            data={section} 
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default ContentSectionsList;