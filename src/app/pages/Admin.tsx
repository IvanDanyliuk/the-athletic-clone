import React from 'react';
import { Outlet } from 'react-router-dom';
import { Grid, useMediaQuery } from '@mui/material';
import { AdminPanelNavMenu, AdminPanelNavMenuMobile } from '../components/adminPanel/adminPanelNavMenu';


const Admin: React.FC = () => {
  const isMobile = useMediaQuery('(max-width:640px)');

  return (
    <Grid container>
      <Grid item xs={12} md={2}>
        {
          isMobile ? 
            <AdminPanelNavMenuMobile /> : 
            <AdminPanelNavMenu />
        }
      </Grid>
      <Grid item xs={12} md={8}>
        <Outlet />
      </Grid>
    </Grid>
  );
};

export default Admin;