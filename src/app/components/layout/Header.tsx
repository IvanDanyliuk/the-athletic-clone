import React from 'react';
import styled from 'styled-components';
import Navigation from '../navigation/Navigation';
import { competitions } from '../../../data';


const Wrapper = styled.header`
  width: 100%;
  background: #181818;
`;


const Header: React.FC = () => {
  const data = competitions
  return (
    <Wrapper>
      <Navigation links={data} />
    </Wrapper>
  );
};

export default Header;