import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { styled } from '@mui/material/styles';
import { Box, Container } from '@mui/material';
import Header from './Header';
import Footer from './Footer';
import { AppDispatch } from '../../../features/store';
import { getAuthenticatedUser } from '../../../features/users/asyncActions';


interface ILayout {
  children: React.ReactNode
}

const Wrapper = styled(Box)`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #ffffff;
`;

const Content = styled(Container)`
  padding-top: 7vh;
  display: flex;
  flex: 1;
`;

const Layout: React.FC<ILayout> = ({ children }) => {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getAuthenticatedUser());
  }, [])

  return (
    <Wrapper>
      <Header />
      <Content maxWidth='xl'>
        {children}
      </Content>
      <Footer />
    </Wrapper>
  )
}

export default Layout;