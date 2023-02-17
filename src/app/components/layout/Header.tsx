import React from 'react';
import { Button, Container, styled } from '@mui/material';
import sc from 'styled-components';
import Navigation from '../navigation/Navigation';
import { competitions } from '../../../data';


const Wrapper = sc.header`
  position: fixed;
  width: 100%;
  background: #181818;
`;

const Content = styled(Container)`
  height: 7vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const SubscribeBtn = styled(Button)`
  background: #ed4747;
  color: #ffffff;
`;


const Header: React.FC = () => {
  const data = competitions
  return (
    <Wrapper>
      <Content maxWidth={'xl'}>
        <Navigation links={data} />
        <SubscribeBtn>Subscribe</SubscribeBtn>
      </Content>
    </Wrapper>
  );
};

export default Header;