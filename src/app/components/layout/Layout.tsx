import React from 'react';
import { styled } from '@mui/material/styles';
import { Box, Container } from '@mui/material';
import Header from './Header';


interface ILayout {
  children: React.ReactNode
}

const Wrapper = styled(Box)`
  min-height: 100vh;
`;

const Content = styled(Container)`
  padding-top: 7vh;
`;

const Layout: React.FC<ILayout> = ({ children }) => {
  return (
    <Wrapper>
      <Header />
      <Content maxWidth='xl'>
        {children}
      </Content>

    </Wrapper>
  )
}

export default Layout;