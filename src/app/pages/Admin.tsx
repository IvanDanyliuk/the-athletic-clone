import React, { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { Box, Grid, styled, useMediaQuery } from '@mui/material';
import { AdminPanelNavMenu, AdminPanelNavMenuMobile } from '../components/adminPanel/navMenu';
import { useSelector } from 'react-redux';
import { selectUser } from '../../features/users/selectors';


const Container = styled(Box)`
  padding: 1em 0;
  width: 100%;
  min-height: 93vh;
`;


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
            <AdminPanelNavMenuMobile /> : 
            <AdminPanelNavMenu />
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