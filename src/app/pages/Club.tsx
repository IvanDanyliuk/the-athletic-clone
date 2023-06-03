import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, Outlet, useParams } from 'react-router-dom';
import { Box, Grid, List, ListItem, Typography, styled } from '@mui/material';
import { AppDispatch } from '../../features/store';
import { selectClub } from '../../features/clubs/selectors';
import { getClub } from '../../features/clubs/asyncActions';
import { clearClub } from '../../features/clubs/reducers';
import { BackdropLoader } from '../components/ui';


const Container = styled(Box)`
  padding: 1em 0;
`;

const ClubTitle = styled(Box)`
  height: 100%;
  display: flex;
  align-items: center;
`;

const Image = styled('img')`
  margin-right: 1em;
  height: 3em;
`;

const Label = styled(Typography)`
  font-size: 1.7em;
`;

const MenuList = styled(List)`
  padding: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const MenuListItem = styled(ListItem)`
  margin-right: 1em;
  padding: .5em 0;
  width: fit-content;
`;

const MenuLink = styled(NavLink)`
  font-size: 1em;
  font-weight: 700;
  text-decoration: none;
  text-align: center;
  color: #888888;

  &:hover {
    color: #000000;
  }
  &.active {
    color: #000000;
  }
`;


const Club: React.FC = () => {
  const { id } = useParams();
  const dispatch = useDispatch<AppDispatch>();

  const club = useSelector(selectClub);

  useEffect(() => {
    dispatch(getClub(id!));
    return () => { dispatch(clearClub()) };
  }, [dispatch, id]);

  if(!club) {
    return <BackdropLoader open={true} />;
  }

  return (
    <Container>
      <Grid container>
        <Grid item xs={12} md={8} justifyContent='flex-end' alignItems='center'>
          <ClubTitle>
            <Image src={club.clubLogoUrl} alt={club.shortName} />
            <Label variant='h2_custom'>{club.commonName}</Label>
          </ClubTitle>
        </Grid>
        <Grid item xs={12} md={4} justifyContent='flex-end' alignItems='center'>
          <MenuList>
            <MenuListItem>
              <MenuLink to='home'>Home</MenuLink>
            </MenuListItem>
            <MenuListItem>
              <MenuLink to='scores-and-schedules'>Scores & Schedules</MenuLink>
            </MenuListItem>
            <MenuListItem>
              <MenuLink to='standings'>Standings</MenuLink>
            </MenuListItem>
            <MenuListItem>
              <MenuLink to='teams'>Teams</MenuLink>
            </MenuListItem>
          </MenuList>
        </Grid>
      </Grid>
      <Box>
        <Outlet />
      </Box>
    </Container>
  );
};

export default Club;