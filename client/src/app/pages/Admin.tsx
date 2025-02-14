import React, { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { Box, Grid, styled, useMediaQuery } from '@mui/material';
import { NavMenu, NavMenuMobile } from '../components/ui/';
import { useSelector } from 'react-redux';
import { selectUser } from '../../features/users/selectors';


const Container = styled(Box)`
  padding: 1em 0;
  width: 100%;
  min-height: 93vh;
`;

const navLinks = [
  { url: 'materials', label: 'Materials' },
  { url: 'competitions', label: 'Competitions' },
  { url: 'clubs', label: 'Clubs' },
  { url: 'users', label: 'Users' },
  { url: 'players', label: 'Players' },
  { url: 'schedules', label: 'Schedules' },
  { url: 'content', label: 'Content' },
];


const Admin: React.FC = () => {
  const isMobile = useMediaQuery('(max-width:640px)');
  const navigate = useNavigate();

  const user = useSelector(selectUser);

  useEffect(() => {
    if(user?.role !== 'admin') {
      navigate('/');
    }
  }, [user]);

  return (
    <Grid container>
      <Grid item xs={12} md={2}>
        {
          isMobile ? 
            <NavMenuMobile links={navLinks} /> : 
            <NavMenu links={navLinks} />
        }
      </Grid>
      <Grid item xs={12} md={10}>
        <Container>
          <Outlet />
        </Container>
      </Grid>
    </Grid>
  );
};

export default Admin;