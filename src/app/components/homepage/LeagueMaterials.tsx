import React from 'react';
import styled from '@mui/styled-engine-sc';
import { 
  Avatar, Divider, Grid, IconButton, 
  List, ListItem, Typography 
} from '@mui/material';
import { v4 as uuid } from 'uuid';
import { IMaterial } from '../../../features/materials/types';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { setUrl } from '../../utils/helpers';


interface ILeagueMaterialsProps {
  materials: {
    league: string,
    logo: string,
    materials: IMaterial[]
  }[],
  leaguesNumToShow: number
}

const HeaderItem = styled(Grid)`
  display: flex;
  align-items: center;
`;

const LeagueTitle = styled(Typography)`
  font-weight: 600;
`;

const LeagueDivider = styled(Divider)`
  margin: 1em 0 .5em 0;
  background: #000000;
`;

const MaterialLink = styled(Link)`
  text-decoration: none;
  color: #000000;
`;

const LinkBtn = styled(IconButton)`
  width: 1.2em;
  height: 1.2em;
  svg {
      font-size: .5em;
  }
`;

const LeagueMaterials: React.FC<ILeagueMaterialsProps> = ({ materials, leaguesNumToShow }) => {
  return (
    <Grid container spacing={4} sx={{ paddingBottom: '2em' }}>
      {materials.slice(0, leaguesNumToShow).map(league => (
        <Grid key={uuid()} item xs={12} md={3}>
          <Grid container>
            <HeaderItem item xs={2}>
              <Avatar src={league.logo} alt={league.league} variant='square' />
            </HeaderItem>
            <HeaderItem item xs={9}>
              <LeagueTitle variant='inherit'>{league.league}</LeagueTitle>
            </HeaderItem>
            <HeaderItem item xs={1}>
              <MaterialLink to={`/materials/${setUrl(league.league)}`}>
                <LinkBtn>
                  <FontAwesomeIcon icon={faAngleRight} />
                </LinkBtn>
              </MaterialLink>
            </HeaderItem>
          </Grid>
          <LeagueDivider flexItem />
          <List sx={{ padding: 0 }}>
            {league.materials.slice(0, 4).map(material => (
              <ListItem key={uuid()} sx={{ paddingLeft: 0 }}>
                <MaterialLink to={`/materials/${setUrl(league.league)}/${material._id}`}>
                  {material.title}
                </MaterialLink>
              </ListItem>
            ))}
          </List>
        </Grid>
      ))}
    </Grid>
  );
};

export default LeagueMaterials;