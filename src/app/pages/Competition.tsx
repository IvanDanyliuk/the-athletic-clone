import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, Outlet, useParams } from 'react-router-dom';
import { Box, Grid, List, ListItem, Typography, styled } from '@mui/material';
import { AppDispatch } from '../../features/store';
import { getCompetition } from '../../features/competitions/asyncActions';
import { clearCompetition } from '../../features/competitions/reducers';
import { selectCompetition } from '../../features/competitions/selectors';
import BackdropLoader from '../components/ui/BackdropLoader';


const LeagueTitle = styled(Box)`
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
  padding: 1em 0;
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


const Competition: React.FC = () => {
  const { id } = useParams();
  const dispatch = useDispatch<AppDispatch>();

  const league = useSelector(selectCompetition);

  useEffect(() => {
    dispatch(getCompetition(id!));
    return () => { dispatch(clearCompetition()) };
  }, [dispatch, id]);

  if(!league) {
    return <BackdropLoader open={true} />;
  }

  return (
    <Box>
      <Grid container>
        <Grid item xs={12} md={8} justifyContent='flex-end' alignItems='center'>
          <LeagueTitle>
            <Image src={league?.logoUrl} alt={league?.shortName} />
            <Label variant='h2_custom'>{league.fullName}</Label>
          </LeagueTitle>
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
    </Box>
  );
};

export default Competition;