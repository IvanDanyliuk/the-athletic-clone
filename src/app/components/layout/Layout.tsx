import React from 'react';
import { styled } from '@mui/material/styles';
import { Box, Container } from '@mui/material';
import Header from './Header';
import Footer from './Footer';


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

  background: #cacaca;
`;

const Layout: React.FC<ILayout> = ({ children }) => {
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