import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Avatar, Box, Grid, List, ListItem, Paper, Typography, styled } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import dayjs from 'dayjs';
import { v4 as uuid } from 'uuid';
import { IContentSection } from '../../../../features/content/types';
import ConfirmAction from '../ui/ConfirmAction';
import { AppDispatch } from '../../../../features/store';
import { deleteContentSection } from '../../../../features/content/asyncActions';


interface IContentSectionListItem {
  data: IContentSection,
}

const SectionBody = styled(Paper)`
  padding: 5px 10px;
`;

const Text = styled(Typography)`
  font-size: .8em;
`;

const SectionTitle = styled(Box)`
  display: flex;
  align-items: 'center';
`;

const EditLink = styled(Link)`
  margin-left: .5em;
  color: #ababab;
  transition: .3s;
  &:hover {
    color: #7c7c7c;
  }
`;


const ContentSectionListItem: React.FC<IContentSectionListItem> = ({ data }) => {
  const { _id, name, materials } = data;

  const dispatch = useDispatch<AppDispatch>();

  const handleSectionDelete = async (id: string) => { 
    await dispatch(deleteContentSection(id));
  };

  return (
    <SectionBody elevation={4} data-testid='contentSectionListItem'>
      <Box component='div' sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <SectionTitle>
          <Typography variant='h6'>
            {name}
          </Typography>
          <EditLink to={`/admin/content/edit/${_id}`}>
            <FontAwesomeIcon icon={faPenToSquare} />
          </EditLink>
        </SectionTitle>
        <ConfirmAction onDelete={() => handleSectionDelete(_id)} />
      </Box>
      <List>
        {materials.map(material => (
          <ListItem key={uuid()}>
            <Grid container spacing={3}>
              <Grid item xs={6}>
                <Text>{material.title}</Text>
              </Grid>
              <Grid item xs={2}>
                <Text>by {material.author.name}</Text>
              </Grid>
              <Grid item xs={2}>
                <Avatar src={material.image} variant='square' />
              </Grid>
              <Grid item xs={2}>
                <Text>
                  {dayjs(material.publicationDate).subtract(1, 'day').format('DD/MM/YYYY')}
                </Text>
              </Grid>
            </Grid>
          </ListItem>
        ))}
      </List>
    </SectionBody>
  );
};

export default ContentSectionListItem;