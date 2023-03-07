import React, { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { Grid, useMediaQuery } from '@mui/material';
import { AdminPanelNavMenu, AdminPanelNavMenuMobile } from '../components/adminPanel/adminPanelNavMenu';
import { useSelector } from 'react-redux';
import { selectUser } from '../../features/users/selectors';


const Admin: React.FC = () => {
  const isMobile = useMediaQuery('(max-width:640px)');
  const navigate = useNavigate();

  const user = useSelector(selectUser);

  useEffect(() => {
    if(user?.role !== 'admin') {
      navigate('/');
    }
  }, []);

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