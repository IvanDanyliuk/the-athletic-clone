import React from 'react';
import styled from 'styled-components';
import { Box, Container } from '@mui/material';


interface ILayout {
  children: React.ReactNode
}

const Wrapper = styled(Box)`
  background: #bdbdbd;
`;

const Content = styled(Container)`
  background: #d6d4d4;
`;

const Layout: React.FC<ILayout> = ({ children }) => {
  return (
    <Wrapper>
      
      <Content maxWidth='xl'>
        {children}
      </Content>

    </Wrapper>
  )
}

export default Layout;