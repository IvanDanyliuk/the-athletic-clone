import React from 'react';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { Box, Grid, styled, useMediaQuery } from '@mui/material';
import { NavMenu, NavMenuMobile } from '../components/ui';
import { selectUser } from '../../features/users/selectors';


const Container = styled(Box)`
  padding: 1em 0;
  width: 100%;
  min-height: 93vh;
`;

const navLinks = [
  { url: 'user', label: 'My Profile' },
  { url: 'materials', label: 'My Materials' },
];


const Profile: React.FC = () => {
  const isMobile = useMediaQuery('(max-width:640px)');

  const user = useSelector(selectUser);
  const checkedLinks = user?.role === 'reader' ? 
    navLinks.filter(link => link.url !== 'materials') : 
    navLinks;

  return (
    <Grid container>
      <Grid item xs={12} md={2}>
        {
          isMobile ? 
            <NavMenuMobile links={checkedLinks} /> : 
            <NavMenu links={checkedLinks} />
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

export default Profile;